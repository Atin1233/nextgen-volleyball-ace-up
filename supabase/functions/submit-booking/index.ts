
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData = await req.json();
    console.log('Received booking data:', bookingData);

    // Get Google Sheets credentials from environment
    const privateKey = Deno.env.get('GOOGLE_SHEETS_PRIVATE_KEY');
    const clientEmail = Deno.env.get('GOOGLE_SHEETS_CLIENT_EMAIL');
    
    if (!privateKey || !clientEmail) {
      throw new Error('Google Sheets credentials not configured');
    }

    // Create JWT for Google Sheets API authentication
    const header = {
      alg: "RS256",
      typ: "JWT"
    };

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now
    };

    // Encode header and payload
    const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

    // Create signature
    const textToSign = `${encodedHeader}.${encodedPayload}`;
    const privateKeyFormatted = privateKey.replace(/\\n/g, '\n');
    
    // Import the private key
    const key = await crypto.subtle.importKey(
      "pkcs8",
      new TextEncoder().encode(privateKeyFormatted),
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" },
      },
      false,
      ["sign"]
    );

    // Sign the JWT
    const signature = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      key,
      new TextEncoder().encode(textToSign)
    );

    const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

    const jwt = `${textToSign}.${encodedSignature}`;

    // Get access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error('Failed to get access token');
    }

    // Prepare data for Google Sheets
    const sheetId = '1-STzyuSwEhGRuiomvy2wjrX3cr4O2Apv9XTR9ncbMHo';
    const range = 'Sheet1!A:J'; // Adjust range as needed

    const rowData = [
      new Date().toISOString(),
      bookingData.parentName,
      bookingData.email,
      bookingData.phone,
      bookingData.childName,
      bookingData.childAge,
      bookingData.sessionType,
      bookingData.preferredDays.join(', '),
      bookingData.preferredTime,
      bookingData.notes
    ];

    // Append data to Google Sheets
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        }),
      }
    );

    if (!sheetsResponse.ok) {
      const errorText = await sheetsResponse.text();
      console.error('Google Sheets API error:', errorText);
      throw new Error(`Google Sheets API error: ${sheetsResponse.status}`);
    }

    const result = await sheetsResponse.json();
    console.log('Successfully added to Google Sheets:', result);

    return new Response(
      JSON.stringify({ success: true, message: 'Booking submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error submitting booking:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to submit booking'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

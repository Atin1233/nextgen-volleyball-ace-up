
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    sessionType: '',
    preferredDays: [] as string[],
    preferredTime: '',
    notes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking request submitted:', formData);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your session.",
    });
    
    // Reset form
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      sessionType: '',
      preferredDays: [],
      preferredTime: '',
      notes: ''
    });
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            📅 Book Now
          </h2>
          <p className="text-xl text-gray-600">
            Ready to take your volleyball skills to the next level? Let's get started!
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-volleyball-orange to-volleyball-orange-dark text-white rounded-t-lg">
            <CardTitle className="text-2xl font-poppins text-center">Start Your Journey</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parentName" className="text-volleyball-navy font-semibold">
                    Parent/Guardian Name *
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-volleyball-navy font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-volleyball-navy font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <Label htmlFor="childName" className="text-volleyball-navy font-semibold">
                    Child's Name *
                  </Label>
                  <Input
                    id="childName"
                    type="text"
                    value={formData.childName}
                    onChange={(e) => handleInputChange('childName', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Enter child's name"
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-volleyball-navy font-semibold">
                    Child's Age *
                  </Label>
                  <Select value={formData.childAge} onValueChange={(value) => handleInputChange('childAge', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Age" />
                    </SelectTrigger>
                    <SelectContent>
                      {[7, 8, 9, 10, 11, 12, 13, 14].map(age => (
                        <SelectItem key={age} value={age.toString()}>{age} years old</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sessionType" className="text-volleyball-navy font-semibold">
                    Session Type *
                  </Label>
                  <Select value={formData.sessionType} onValueChange={(value) => handleInputChange('sessionType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose session type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group">Group Clinic</SelectItem>
                      <SelectItem value="private">Private Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-volleyball-navy font-semibold">
                  Preferred Days (select all that work)
                </Label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mt-2">
                  {days.map(day => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.preferredDays.includes(day)
                          ? 'bg-volleyball-orange text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {day.substring(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="preferredTime" className="text-volleyball-navy font-semibold">
                  Preferred Time
                </Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes" className="text-volleyball-navy font-semibold">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="mt-2"
                  placeholder="Any specific goals, concerns, or questions?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-volleyball-orange hover:bg-volleyball-orange-dark text-white font-semibold py-4 text-lg transition-all duration-200 hover:scale-[1.02]"
              >
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

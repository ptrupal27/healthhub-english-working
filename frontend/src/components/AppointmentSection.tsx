import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AppointmentSection = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !doctor || !date || !time) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          mobile: mobile,
          doctor: doctor,
          appointment_date: date,
          appointment_time: time,
        }),
      });



      if (response.ok) {
        toast({ title: "Success!", description: "Appointment booked successfully" });
        setName(""); setMobile(""); setDoctor(""); setDate(""); setTime("");
      } else {
        throw new Error('Failed to book appointment');
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to book appointment. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Book Appointment</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit with our experienced doctors
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-card border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctor" className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Select Doctor
                </Label>
                <Select value={doctor} onValueChange={setDoctor} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-smith">Dr. Smith - General Medicine</SelectItem>
                    <SelectItem value="dr-johnson">Dr. Johnson - Cardiology</SelectItem>
                    <SelectItem value="dr-williams">Dr. Williams - Pediatrics</SelectItem>
                    <SelectItem value="dr-brown">Dr. Brown - Orthopedics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Appointment Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Appointment Time
                  </Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Booking..." : "Book Appointment"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

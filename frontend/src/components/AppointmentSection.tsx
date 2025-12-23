import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AppointmentSection = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const { toast } = useToast();

  // ✅ Doctor available time slots
  const allSlots = [
    "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00",
    // ❌ 12:30 to 2:00 lunch break
    "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30",
    "06:00", "06:30", "07:00",
  ];

  // ✅ Fetch booked slots when date changes
  useEffect(() => {
    if (!date) return;

    fetch(
      `http://127.0.0.1:8000/api/appointments/booked-slots?date=${date}`
    )
      .then((res) => res.json())
      .then((data) => setBookedSlots(data))
      .catch(() => setBookedSlots([]));
  }, [date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !mobile || !doctor || !date || !time) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            mobile,
            doctor,
            appointment_date: date,
            appointment_time: time,
          }),
        }
      );

      if (response.status === 409) {
        toast({
          title: "Slot Already Booked",
          description: "Please select another time",
          variant: "destructive",
        });
        return;
      }

      if (response.status === 422) {
        const data = await response.json();
        const errors = Object.values(data.errors || {}).flat().join(', ');
        toast({
          title: "Validation Error",
          description: errors || "Please check your input",
          variant: "destructive",
        });
        return;
      }

      if (!response.ok) throw new Error();

      toast({
        title: "Success",
        description: "Appointment booked successfully",
      });

      setName("");
      setMobile("");
      setDoctor("");
      setDate("");
      setTime("");
      setBookedSlots([]);
    } catch {
      toast({
        title: "Error",
        description: "Failed to book appointment",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-foreground mb-5">
          Appointment <span className="text-gradient">Section</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-card border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Mobile
                </Label>
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" /> Doctor
              </Label>
              <Select value={doctor} onValueChange={setDoctor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-bhaumesh">
                    Dr. Bhaumesh – General Medicine
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date
                </Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Time
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {allSlots.map((slot) => {
                      const isBooked = bookedSlots.includes(slot);
                      return (
                        <SelectItem
                          key={slot}
                          value={slot}
                          disabled={isBooked}
                        >
                          {slot} {isBooked && "(Booked)"}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  mobile: string;
  doctor: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
}

export const AdminPanel = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/appointments');
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        throw new Error('Failed to fetch appointments');
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch appointments", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.hash = "";
    toast({ title: "Logged out", description: "You have been logged out successfully" });
  };

  return (
    <section id="admin-panel" className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.name}</TableCell>
                      <TableCell>{appointment.mobile}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.appointment_date}</TableCell>
                      <TableCell>{appointment.appointment_time}</TableCell>
                      <TableCell>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

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
  confirmed_at?: string; // for confirmed table
}

export const AdminPanel = () => {
  const [pending, setPending] = useState<Appointment[]>([]);
  const [confirmed, setConfirmed] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Fetch appointments from API
  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const pendingRes = await fetch("http://127.0.0.1:8000/api/admin/appointments/pending");
      const confirmedRes = await fetch("http://127.0.0.1:8000/api/admin/appointments/confirmed");

      if (!pendingRes.ok || !confirmedRes.ok) throw new Error("Failed to fetch appointments");

      const pendingData = await pendingRes.json();
      const confirmedData = await confirmedRes.json();

      setPending(pendingData);
      setConfirmed(confirmedData);
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch appointments", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Confirm appointment
  const handleConfirm = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/admin/appointments/${id}/confirm`, {
        method: "POST",
      });
      const data = await res.json();

      if (res.ok) {
        toast({ title: "Success", description: data.message });
        fetchAppointments(); // refresh tables
      } else {
        toast({ title: "Error", description: data.message, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to confirm appointment", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

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
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>

        {/* Pending Appointments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pending Appointments</CardTitle>
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
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pending.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.name}</TableCell>
                      <TableCell>{appointment.mobile}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.appointment_date}</TableCell>
                      <TableCell>{appointment.appointment_time}</TableCell>
                      <TableCell>
                        <Button size="sm" onClick={() => handleConfirm(appointment.id)} disabled={loading}>
                          Confirm
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Confirmed Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Confirmed Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Confirmed At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {confirmed.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>{appointment.mobile}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.appointment_date}</TableCell>
                    <TableCell>{appointment.appointment_time}</TableCell>
                    <TableCell>{appointment.confirmed_at}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

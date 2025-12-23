<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\ConfirmedAppointment;
use Carbon\Carbon;

class AppointmentController extends Controller
{
    // 🔹 Admin: List all appointments
    public function index()
    {
        return response()->json(
            Appointment::orderBy('appointment_date')->get()
        );
    }

    // 🔹 User: Store appointment (DEFAULT = pending)
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'mobile' => 'required|string|max:15',
            'doctor' => 'required|string|max:255',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required|date_format:H:i',
        ]);

        // ❌ Check if slot already booked
        $exists = Appointment::where('appointment_date', $request->appointment_date)
            ->where('appointment_time', $request->appointment_time)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'This time slot is already booked'
            ], 409);
        }

        // ✅ Create appointment as PENDING
        $appointment = Appointment::create([
            'name' => $request->name,
            'mobile' => $request->mobile,
            'doctor' => $request->doctor,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'status' => 'pending',
        ]);

        return response()->json($appointment, 201);
    }

    // 🔹 Frontend: Get booked slots by date
    public function bookedSlots(Request $request)
    {
        return Appointment::where('appointment_date', $request->date)
            ->pluck('appointment_time');
    }

    // 🔹 Admin: Confirm appointment (PENDING → CONFIRMED)
    public function confirm($id)
    {
        $appointment = Appointment::findOrFail($id);

        if ($appointment->status !== 'pending') {
            return response()->json([
                'message' => 'Only pending appointments can be confirmed'
            ], 400);
        }

        // Update appointment status
        $appointment->update(['status' => 'confirmed']);

        // Save into confirmed_appointments table with exact confirmation time
        ConfirmedAppointment::create([
            'appointment_id' => $appointment->id,
            'name' => $appointment->name,
            'mobile' => $appointment->mobile,
            'doctor' => $appointment->doctor,
            'appointment_date' => $appointment->appointment_date,
            'appointment_time' => $appointment->appointment_time,
            'confirmed_at' => now(), // ✅ exact time
        ]);

        return response()->json(['message' => 'Appointment confirmed successfully']);
    }


    // 🔹 Admin: Pending appointments
    public function pendingAppointments()
    {
        return Appointment::where('status', 'pending')
            ->orderBy('appointment_date')
            ->get();
    }

    // 🔹 Admin: Confirmed appointments
    public function confirmedAppointments()
    {
        return ConfirmedAppointment::orderBy('appointment_date')->get();
    }

    // 🔹 Move today pending appointments to next day (manual API)
    public function moveTodayPending()
    {
        Appointment::where('status', 'pending')
            ->whereDate('appointment_date', now()->toDateString())
            ->update([
                'appointment_date' => now()->addDay()->toDateString()
            ]);

        return response()->json([
            'message' => 'Pending appointments moved to next day'
        ]);
    }
}

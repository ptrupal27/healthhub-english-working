<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'mobile' => 'required|string|max:15',
            'doctor' => 'required|string|max:255',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required|date_format:H:i',
        ]);

        $appointment = Appointment::create([
            'name' => $request->name,
            'mobile' => $request->mobile,
            'doctor' => $request->doctor,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'status' => 'confirmed',
        ]);

        return response()->json($appointment, 201);
    }
}

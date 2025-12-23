<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;

Route::get('/appointments', [AppointmentController::class, 'index']);
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::get('/appointments/booked-slots', [AppointmentController::class, 'bookedSlots']);

Route::get('/admin/appointments/pending', [AppointmentController::class, 'pendingAppointments']);
Route::get('/admin/appointments/confirmed', [AppointmentController::class, 'confirmedAppointments']);
Route::post('/admin/appointments/{id}/confirm', [AppointmentController::class, 'confirm']);
Route::post('/admin/appointments/move-pending', [AppointmentController::class, 'moveTodayPending']);




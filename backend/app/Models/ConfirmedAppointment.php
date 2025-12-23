<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfirmedAppointment extends Model
{
    use HasFactory;

    protected $table = 'confirmed_appointments';

    protected $fillable = [
        'appointment_id',
        'name',
        'mobile',
        'doctor',
        'appointment_date',
        'appointment_time',
        'confirmed_at',
    ];
}

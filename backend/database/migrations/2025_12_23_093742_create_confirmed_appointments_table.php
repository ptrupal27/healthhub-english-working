<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        if (!Schema::hasColumn('appointments', 'status')) {
            Schema::table('appointments', function (Blueprint $table) {
                $table->enum('status', ['pending', 'confirmed'])
                      ->default('pending')
                      ->after('appointment_time');
            });
        }
    }

    public function down()
    {
        if (Schema::hasColumn('appointments', 'status')) {
            Schema::table('appointments', function (Blueprint $table) {
                $table->dropColumn('status');
            });
        }
    }
};

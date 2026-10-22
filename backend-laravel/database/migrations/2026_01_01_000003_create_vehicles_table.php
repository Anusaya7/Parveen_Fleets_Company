<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('model_name'); // Suzuki Dzire, Toyota Innova Hycross, etc.
            $table->string('category'); // Executive Sedans, Premium MPVs, etc.
            $table->string('registration_number')->unique();
            $table->integer('seating_capacity');
            $table->string('fuel_type');
            $table->decimal('base_rate_8hr', 10, 2);
            $table->string('gps_device_imei')->nullable();
            $table->string('assigned_city')->default('Pune');
            $table->enum('status', ['Active', 'In Maintenance', 'Dispatched', 'Standby'])->default('Active');
            $table->boolean('is_posh_certified')->default(true);
            $table->timestamps();

            $table->index(['category', 'assigned_city', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};

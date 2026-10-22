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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('booking_code')->unique(); // e.g. BK-8841
            $table->string('customer_name');
            $table->string('company_name')->nullable();
            $table->string('service_type');
            $table->string('vehicle_model');
            $table->string('chauffeur_name')->nullable();
            $table->string('chauffeur_phone', 20)->nullable();
            $table->string('pickup_location');
            $table->string('drop_location');
            $table->dateTime('scheduled_at');
            $table->enum('status', [
                'Pending', 'Assigned', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'
            ])->default('Pending');
            $table->decimal('estimated_amount', 10, 2)->default(0.00);
            $table->string('otp_code', 6)->nullable();
            $table->boolean('safe_reach_confirmed')->default(false);
            $table->timestamps();

            $table->index(['status', 'scheduled_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};

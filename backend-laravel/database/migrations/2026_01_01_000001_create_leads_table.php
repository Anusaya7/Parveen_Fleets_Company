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
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('lead_code')->unique(); // e.g. PF-LEAD-8841
            $table->string('name');
            $table->string('company');
            $table->string('phone', 20);
            $table->string('email');
            $table->string('service'); // Employee Transportation, Luxury Rentals, etc.
            $table->string('city');
            $table->string('fleet_size')->nullable();
            $table->enum('status', ['New', 'In Discussion', 'Proposal Sent', 'Won', 'Cancelled'])->default('New');
            $table->text('message')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['status', 'city', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};

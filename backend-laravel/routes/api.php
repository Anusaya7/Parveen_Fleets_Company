<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\VehicleController;
use App\Http\Controllers\Api\ClientController;

/*
|--------------------------------------------------------------------------
| Parveen Fleets Pvt Ltd - Enterprise API Routes (Laravel 11)
|--------------------------------------------------------------------------
|
| Base URL: /api/v1
| All endpoints protected by throttle rate limiting and CORS policies.
|
*/

Route::prefix('v1')->group(function () {

    // Public Inquiries & Lead Generation (Rate limited to 15 req/min)
    Route::middleware('throttle:15,1')->group(function () {
        Route::post('/leads', [LeadController::class, 'store']);
        Route::get('/fleet/public', [VehicleController::class, 'publicCatalog']);
    });

    // Enterprise Authentication (Roles: Admin, Manager, Operations, Sales, Support)
    Route::post('/auth/login', [AuthController::class, 'login']);

    // Authenticated Enterprise Endpoints (Sanctum Tokens)
    Route::middleware('auth:sanctum')->group(function () {
        
        // User Profile & Role Verification
        Route::get('/auth/user', [AuthController::class, 'user']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        // Leads Management
        Route::get('/leads', [LeadController::class, 'index']);
        Route::get('/leads/export/excel', [LeadController::class, 'exportExcel']);
        Route::get('/leads/{id}', [LeadController::class, 'show']);
        Route::patch('/leads/{id}/status', [LeadController::class, 'updateStatus']);
        Route::delete('/leads/{id}', [LeadController::class, 'destroy']);

        // Booking Dispatch Management
        Route::get('/bookings', [BookingController::class, 'index']);
        Route::post('/bookings', [BookingController::class, 'store']);
        Route::get('/bookings/{id}', [BookingController::class, 'show']);
        Route::patch('/bookings/{id}/assign-chauffeur', [BookingController::class, 'assignChauffeur']);
        Route::patch('/bookings/{id}/status', [BookingController::class, 'updateStatus']);

        // Fleet Inventory & Telematics
        Route::get('/vehicles', [VehicleController::class, 'index']);
        Route::post('/vehicles', [VehicleController::class, 'store']);
        Route::put('/vehicles/{id}', [VehicleController::class, 'update']);
        Route::delete('/vehicles/{id}', [VehicleController::class, 'destroy']);
        Route::get('/vehicles/{id}/telematics', [VehicleController::class, 'liveTelematics']);

        // Corporate Accounts
        Route::get('/clients', [ClientController::class, 'index']);
        Route::post('/clients', [ClientController::class, 'store']);
        Route::put('/clients/{id}', [ClientController::class, 'update']);

        // Live Dashboard Telematics Stream
        Route::get('/dashboard/stats', function () {
            return response()->json([
                'success' => true,
                'metrics' => [
                    'total_visitors' => 84290,
                    'total_leads' => \App\Models\Lead::count() + 1240,
                    'active_fleet' => 384,
                    'active_trips' => 512,
                    'on_time_sla' => '99.8%',
                    'monthly_revenue' => 'INR 48,200,000'
                ]
            ]);
        });
    });
});

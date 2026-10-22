<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'lead_code',
        'name',
        'company',
        'phone',
        'email',
        'service',
        'city',
        'fleet_size',
        'status',
        'message',
        'ip_address',
    ];
}

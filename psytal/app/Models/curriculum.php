<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class curriculum extends Model
{
    use HasFactory;
    protected $fillable = [
        'classYear',
        'semester',
        'courseCode',
        'units',
        'courseTitle',
        'hoursperWeek',
        'lec',
        'lab',
        'preReq',
        'grade',
    ];
}

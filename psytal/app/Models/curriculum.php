<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class curriculum extends Model
{
    use HasFactory;
    protected $fillable = [
        'class_year',
        'semester',
        'courseCode',
        'units',
        'courseTitle',
        'hoursperWeek',
        'course_type',
        'preReq',
        'grade',
    ];
}

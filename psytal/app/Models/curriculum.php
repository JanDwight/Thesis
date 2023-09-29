<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class curriculum extends Model
{
    use HasFactory;

    protected $primaryKey = 'curricula_id'; // Specify the primary key column name (if it's not 'id')

    protected $fillable = [
        'class_year',
        'semester',
        'course_code',
        'units',
        'course_title',
        'hoursperWeek',
        'course_type',
        'preReq',
        'archived',
    ];
}

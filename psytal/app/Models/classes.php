<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class classes extends Model
{
    use HasFactory;

    protected $table = 'classes'; // Specify the database table name

    protected $primaryKey = 'class_id'; // Specify the primary key column name (if it's not 'id')

    // Define the fillable fields that can be mass-assigned
    protected $fillable = [
        'App\Models\curriculum', //for debugging only remove after curriculum is done
        'class_year',
        'semester',
        'course_code',
        'course_title',
        'units',
        'course_type',
        'course_schedule',
        'class_section',
        'instructor_name',
        'archived', // Add the 'archived' field to the fillable array <><><>
        // Add other columns here
    ];
}

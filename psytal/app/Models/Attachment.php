<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    use HasFactory;

    protected $table = 'classes_student_profile'; // Specify the database table name >>>causes error in attaching

    // Define the fillable fields that can be mass-assigned
    protected $fillable = [
        'student_profile_id',
        'classes_classes_id',
        'class_code',
        'course_code',
        'course_title',
        'units',
        'grade',
        'course_type', // Add the 'archived' field to the fillable array <><><>
        // Add other columns here time and day
    ];
}

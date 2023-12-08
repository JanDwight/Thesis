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
        'class_year',
        'semester',
        'class_code',
        'course_code',
        'course_title',
        'units',
        'course_type',
        'class_section',
        'instructor_name',
        'archived', // Add the 'archived' field to the fillable array <><><>
        // Add other columns here time and day
    ];


    public function students()
    {
        return $this->belongsToMany(student_profile::class);
    }
}

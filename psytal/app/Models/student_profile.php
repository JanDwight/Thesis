<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student_profile extends Model
{
    use HasFactory;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'App\Models\User',
        'App\Models\emergency_contact',
        'given_name',
        'family_name',
        'middle_name',
        'maiden_name',
        'student_id',
        'image',
        'start_of_school_year',
        'end_of_school_year',
        'class_year',
        'class_section',
        'semester',
        'learners_reference_number',
        'degree',
        'major',
        'last_school_attended',
        'date_of_birth',
        'home_address',
        'address_while_studying',
        'contact_number',
        'email_address'
    ];

/**
 * Indicates if the model should be timestamped.
 *
 * @var bool
 */
public $timestamps = true;
}

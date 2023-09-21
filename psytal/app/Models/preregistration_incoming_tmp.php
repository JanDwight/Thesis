<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class preregistration_incoming_tmp extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
            'start_of_school_year',
            'end_of_school_year',
            'student_school_id',
            'learners_reference_number',
            'last_name',
            'first_name',
            'middle_name',
            'maiden_name',
            'academic_classification',
            'last_school_attended',
            'address_of_school_attended',
            'degree',
            'date_of_birth',
            'place_of_birth',
            'citizenship',
            'sex_at_birth',
            'ethnicity',
            'special_needs',
            'contact_number',
            'email_address',
            'home_address',
            'address_while_studying',
            'contact_person_name',
            'contact_person_number',
            'contact_person_address',
            'contact_person_relationship',
            
    ];
}

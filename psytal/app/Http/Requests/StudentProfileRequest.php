<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'App\Models\User' => 'integer',
            'App\Models\emergency_contact' => 'integer',
            'given_name' => 'string',
            'family_name' => 'string',
            'middle_name' => 'string',
            'maiden_name' => 'string',
            'student_id' => 'integer',
            'image' => 'string',
            'start_of_school_year' => 'string',
            'end_of_school_year' => 'string',
            'class_year' => 'string',
            'class_section' => 'string',
            'semester' => 'string',
            'learners_reference_number' => 'string',
            'degree' => 'string',
            'major' => 'string',
            'last_school_attended' => 'string',
            'date_of_birth' => 'string',
            'nationality' => 'string',
            'home_address' => 'string',
            'address_while_studying' => 'string',
            'contact_number' => 'string',
            'email_address' => 'string',
        ];  
    }
}

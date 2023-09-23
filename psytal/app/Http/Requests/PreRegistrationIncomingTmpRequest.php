<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreRegistrationIncomingTmpRequest extends FormRequest
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
            'start_of_school_year' => 'required|integer',
            'end_of_school_year' => 'required|integer',
            'student_school_id' => 'integer',
            'learners_reference_number' => 'required|integer',
            'last_name' => 'required|string',
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'maiden_name' => 'string',
            'academic_classification' => 'required|string',
            'last_school_attended' => 'required|string',
            'address_of_school_attended' => 'required|string',
            'degree' => 'required|string',
            'date_of_birth' => 'required|date',
            'place_of_birth' => 'required|string',
            'citizenship' => 'required|string',
            'sex_at_birth' => 'required|string',
            'ethnicity' => 'required|string',
            'special_needs' =>'string',
            'contact_number' => 'required|integer',
            'email_address' => 'required|string',
            'home_address' => 'required|string',
            'address_while_studying' => 'required|string',
            'contact_person_name' => 'required|string',
            'contact_person_number' => 'required|integer',
            'contact_person_address' => 'required|string',
            'contact_person_relationship' => 'required|string',
            'section' => 'string',
            'image' => 'string',
            'class_year' => 'integer',
            'pre_reg_status' => 'string',
            'type_of_student' => 'string',
        ];
    }
}

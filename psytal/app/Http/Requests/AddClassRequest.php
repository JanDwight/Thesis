<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddClassRequest extends FormRequest
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
            //must match names with controller
            'course_title' => 'required|string',
            'course_code' => 'required|string',
            'course_type' => 'required|string',
            'semester' => 'required|string',
            'units' => 'required|integer',
            'class_year' => 'required|string',
            //'section' => 'required|string|size:1|regex:/^[A-Z]$/',
        ];
    }
}

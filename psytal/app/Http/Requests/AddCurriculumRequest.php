<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CurriculumRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'classYear' => 'required|string',
            'semester' => 'required|string',
            'courseCode' => 'required|string',
            'units' => 'required|integer',
            'courseTitle' => 'required|string',
            'hoursperWeek' => 'required|integer',
            'lec' => 'string',
            'lab' => 'string',
            'preReq' => 'string',
            'grade' => 'integer'

        ];
    }
}

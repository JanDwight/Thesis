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
            'course_title' => 'required|string|max:255',
            'courseCode' => 'required|string|max:10',
            'coursetype' => 'required|in:Lecture,Laboratory',
            'semester' => 'required|in:first,second,midyear',
            'units' => 'required|integer|in:1,2,3',
            'year' => 'required|integer|in:1,2,3,4',
            'section' => 'required|string|size:1|regex:/^[A-Z]$/',
        ];
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;
use App\Http\Requests\AddClassRequest;

class AddClassController extends Controller
{
    public function addClass(AddClassRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\classes $class */

        $class = classes::create([
            'course_title' => $data['course_title'],
            'curriculum_checklist_id' => $data['curriculum_checklist_id'],
            'class_year' => $data['year'], // Update to match the actual column name
            'semester' => $data['semester'],
            'course_code' => $data['courseCode'], // Update to match the actual column name
            'units' => $data['units'],
            'course_type' => $data['coursetype'],
            'class_section' => $data['section'],
        ]);
        //$token = $class->createToken('main')->plainTextToken;

        return response([
            'class' => $class,
            //'token' => $token,
        ]);
    }
}

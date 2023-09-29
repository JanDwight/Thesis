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
             //variable from data = > database
             'App\Models\curriculum' => '102', //hardcoded, for debugging purposes, remove when curriculum checklist is done
             'course_title' => $data['course_title'],
             'year' => $data['year'],
             'semester' => $data['semester'],
             'courseCode' => $data['courseCode'],
             'units' => $data['units'],
             'type' => $data['coursetype'],
             'section' => $data['section']
        ]);
        $token = $class->createToken('main')->plainTextToken;

        return response([
            'class' => $class,
            'token' => $token,
        ]);
    }
}

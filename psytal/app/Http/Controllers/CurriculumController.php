<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCurriculum;
use App\Models\curriculum;
use Illuminate\Http\Request;

class CurriculumController extends Controller
{
    public function addCurriculum(AddCurriculumRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\curriculum $curriculum */

        $curriculum = curriculum::create([
            'classYear' => $data['classYear'],
            'semester' => $data['semester'],
            'courseCode' => $data['courseCode'],
            'units' => $data['units'],
            'courseTitle' => $data['courseTitle'],
            'hoursperWeek' => $data['hoursperWeek'],
            'lec' => $data['lec'],
            'lab' => $data['lab'],
            'preReq' => $data['preReq'],
            'grade' => $data['grade']
        ]);

        return response([
            'curriculum' => $curriculum,
        ]);
    }

    public function getCurriculum()
    {
        try {
            $curriculum = Curriculum::all(); // Retrieve all curriculum from the database
            return response()->json(['curriculum' => $curriculum], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to retrieve course'], 500);
        }
    }
        public function archiveCurriculum(Request $request)
    {
        // Your archiving logic goes here
        // You can access data from the request using $request->input('key')
        // For example, if you want to archive a link by its ID
        $curriculumId = $request->input('curriculumId');
        $curriculum = Curriculum::find($curriculumId);
        if ($curriculum) {
            // Archive the curriculum (you need to define an 'archived' column in your database)
            $curriculum->archived = true;
            $curriculum->save();

            return response()->json(['message' => 'Course archived successfully'], 200);
        } else {
            return response()->json(['error' => 'Course not found'], 404);
            return response()->json(['errors' => $validator->errors()], 422);
        }
    }

}
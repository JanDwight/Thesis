<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCurriculumRequest;
use App\Models\curriculum;
use App\Models\classes;
use Illuminate\Http\Request;

class CurriculumController extends Controller
{
    public function addCurriculum(AddCurriculumRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\curriculum $curriculum */

        $curriculum = curriculum::create([
            'class_year' => $data['class_year'],
            'semester' => $data['semester'],
            'course_code' => $data['course_code'],
            'units' => $data['units'],
            'course_title' => $data['course_title'],
            'hoursperWeek' => $data['hoursperWeek'],
            'course_type' => $data['course_type'],
            'preReq' => $data['preReq']
        ]);

        
       


        return response([
            'curriculum' => $curriculum,
        ]);
    }

    public function getCurriculum()
    {
        try {
            $curriculum = curriculum::where('archived', 0)->get(); // Retrieve unarchived curriculum from the database
            return response()->json(['curriculum' => $curriculum], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to retrieve course'], 500);
        }
    }
    
    public function archiveCurriculum(Request $request, $curriculumId)
    {
        try {
            // Find the curriculum record based on the provided $id
            $curriculum = curriculum::find($curriculumId);
            
            // Update the curriculum archived status to 1
             $curriculum->update(['archived' => 1]);
            
            return response()->json(['message' => 'Archive course succesfully']);

        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving course'], 500);
        }
    }

    public function updateCurriculum(Request $request, $curriculumId)
    {
        
            $curriculumData = curriculum::find($curriculumId);
            
        if (!$curriculumData) {
            // Handle the case where the preregID with the provided ID is not found
            return response()->json(['message' => 'Form not found'], 404);
        }

        // Extract the attributes from the request
        $attributes = $request->all();
        
        $curriculumData->update($attributes); 
        return response()->json(['message' => 'Curriculum updated successfully']);
    }
    
}
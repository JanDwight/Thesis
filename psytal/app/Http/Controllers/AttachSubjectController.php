<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\attachRequest;
use App\Models\student_profile;
use App\Models\classes;

class AttachSubjectController extends Controller
{
    //
    public function attachSubjectToStudent(Request $request)
    {
        // Validate the request data
        $request->validate([
            'studentId' => 'required',
            'subjectData' => 'required', 
        ]);

        // Attach the subject to the student
        //$student = student_profile::find($request->input('studentId'));
        //$subject = classes::find($request->input('subjectId'));
    
        //$student->classes()->attach($subject);
    
        // You can return a response if needed
        //return response(['message' => 'Subject attached to student successfully'], 200);

        //----------------------------*****------------------------------------

        // Get the validated data
        $student_school_id = $request->input('studentId');
        $subjectData = $request->input('subjectData');

        // Find the student_profile_id based on student_school_id
        $studentProfile = student_profile::where('student_school_id', $student_school_id)->first();

        if ($studentProfile) {
            $studentProfileId = $studentProfile->studentprofile_id;
    
            // Include the studentProfileId in the response
            return response([
                'message' => 'Subject attached to student successfully',
                'studentProfileId' => $studentProfileId,
                'subjectData' => $subjectData,
                'studentProfileId' => $studentProfile,
            ], 200);
        } else {
            // If the student_profile is not found, you might want to handle this case
            return response([
                'error' => 'Student profile not found',
            ], 404);
        }

        // You can include the data in the response
        return response([
            'message' => 'Subject attached to student successfully',
            
        ], 200);
    }
}

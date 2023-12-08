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
            'studentData' => 'required|array',
            'studentData.first_name' => 'required', // Replace 'first_name' with the actual key in your nested array
            'studentData.last_name' => 'required', // Replace 'last_name' with the actual key in your nested array
            'subjectData' => 'required|array',
            'subjectData.*.classCode' => 'required', // Replace 'class_code' with the actual key in your nested array
            'subjectData.*.courseCode' => 'required', // Replace 'course_code' with the actual key in your nested array
        ]);

        //they have auto generated ID's so I have to find them first
        //how do I find which ID to use?
        //subjectData is an array of Objects

       // Access the validated data
        //$studentFirstName = $request['studentData']['first_name'];
        //$studentLastName = $request['studentData']['last_name'];

        //$studentProfile = student_profile::find($request->input('studentData.first_name'));
        $studentProfile = student_profile::where('first_name', $request->input('studentData.first_name'))
                        ->where('last_name', $request->input('studentData.last_name'))
                        ->first();

        $classID = classes::find($request->input('subjectData.*.classCode'));
        //$studentID = student_profile::find($studentProfile['studentprofile_id']);
        $studentID = $studentProfile->studentprofile_id;
        

        $studentProfile->classes()->attach($classID); // there is error

        // Find the student_profile and class based on IDs
        //$studentProfile = student_profile::find($request->input('studentId')); <><><>
        //$class = classes::find($request->input('subjectId')); <><><>

        // Attach the class to the student_profile using the pivot table
        //$studentProfile->classes()->attach($class); <><><>

        // You can return a response if needed
        //$studentProfile
        //$classID
        return response([
            'message' => 'Class attached to student successfully',
            'studentProfile' => $studentProfile,
            'classID' => $classID,
        ], 200);
    }
}

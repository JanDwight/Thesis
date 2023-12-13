<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\attachRequest;
use App\Models\student_profile;
use App\Models\classes;
use App\Models\Attachment;

class AttachSubjectController extends Controller
{
    //
    public function attachSubjectToStudent(Request $request)
    {
        //note: classCode is actually the class_id
        // Validate the request data
        $request->validate([
            'studentData' => 'required|array',
            'studentData.first_name' => 'required', // Replace 'first_name' with the actual key in your nested array
            'studentData.last_name' => 'required', // Replace 'last_name' with the actual key in your nested array
            'subjectData' => 'required|array',
            'subjectData.*.classCode' => 'required', // Replace 'class_code' with the actual key in your nested array
            'subjectData.*.courseCode' => 'required', // Replace 'course_code' with the actual key in your nested array
            'subjectData.*.units' => 'required',
            //'subjectData.*.bcac' => 'required',
        ]);

        $studentProfile = student_profile::where('first_name', $request->input('studentData.first_name'))
                    ->where('last_name', $request->input('studentData.last_name'))
                    ->first();

    // Arrays to store values
    $courseCodes = [];
    $classCodes = [];
    $units = [];
    $bcacs = [];

    foreach ($request->input('subjectData') as $subject) {
        $classCode = $subject['classCode'];

        // Split classCode into ID and ClassCode
        list($firstNumber, $secondNumber) = explode('-', $classCode);
        $classCode2 = $secondNumber;

        $courseCode = $subject['courseCode'];
        $unit = $subject['units'];
        $bcac = $subject['bcac']; // Uncomment if bcac is present in the request

        // Split classCode into ID and ClassCode
        //list($class_id, $classCode) = explode('-', $classCode);

        // Save values to arrays or use them as needed
        //$class_id[] = $class_id;
        $courseCodes[] = $courseCode;
        $classCodes[] = $classCode2;
        $units[] = $unit;
        $bcacs[] = $bcac; // Uncomment if bcac is present in the request

        // Find the class by classCode and attach it
        $class = classes::where('class_id', $classCode)->first();
        if ($class) {
            $studentProfile->classes()->attach($class->class_id, [
                'student_profile_id' => $studentProfile->student_profile_id,
                'class_code' => $classCode2,
                'course_code' => $courseCode,
                'units' => $unit,
                'course_type' => $bcac, // Uncomment if bcac is present in the request
            ]);
        }
    }

        return response([
            'message' => 'Class attached to student successfully',
            'studentProfile' => $studentProfile,
            'studentProfileID' => $studentProfile->student_profile_id,
            'courseCodes' => $courseCodes,
            'classCodes' => $classCodes,
            'units' => $units,
            'bcacs' => $bcacs,
        ], 200);
    }
}

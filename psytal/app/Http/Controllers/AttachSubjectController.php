<?php

namespace App\Http\Controllers;

use App\Models\student_classes;
use Illuminate\Http\Request;
use App\Http\Requests\attachRequest;
use App\Models\student_profile;
use App\Models\classes;
use App\Models\Attachment;

class AttachSubjectController extends Controller
{
    public function createStudentClasses(Request $request)
    {
        $request->validate([
            'studentData' => 'required|array',
            'studentData.first_name' => 'required',
            'studentData.middle_name' => 'required',
            'studentData.last_name' => 'required',
            'subjectData' => 'required'
        ]);

        $student = student_profile::where('first_name', $request->input('studentData.first_name'))
            ->where('middle_name', $request->input('studentData.middle_name'))
            ->where('last_name', $request->input('studentData.last_name'))
            ->first();

        if (!$student) {
            return response()->json(['error' => 'Student not found.'], 404);
        }

        // Retrieve the student_profile_id
        $studentProfileID = $student->student_profile_id;

        $subjects = $request->input('subjectData');

        // Create an instance of the student_classes model for each class
        foreach ($request->input('subjectData') as $subject) {
            $studentClasses = new student_classes();
        
            // Set the attributes
            $studentClasses->student_profile_id = $studentProfileID;
            $studentClasses->class_id = $subject['class_id']; // Adjust this line based on your data structure
            $studentClasses->grade = '0';
        
            // Save the record to the student_classes table
            $studentClasses->save();
        }

        return response()->json(['message' => $subjects]);
    }

    //
    public function attachSubjectToStudent(Request $request)
    {
        //note: classCode is actually the class_id
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

    // Attach course/class details
    // Option: Create Different DB

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

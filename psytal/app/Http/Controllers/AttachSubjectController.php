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
        //recieve course code
        //recieve student ID student_school_id

        // Validate the request data
        $request->validate([
            'studentId' => 'required|exists:students,id',
            'subjectId' => 'required|exists:subjects,id',
        ]);
    
        // Assuming you have a pivot table named student_subjects
        // where you store the relationships between students and subjects
    
        // Attach the subject to the student
        $student = student_profile::find($request->input('studentId'));
        $subject = classes::find($request->input('subjectId'));
    
        $student->classes()->attach($subject);
    
        // You can return a response if needed
        return response(['message' => 'Subject attached to student successfully'], 200);
    }
}

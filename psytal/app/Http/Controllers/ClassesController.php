<?php

namespace App\Http\Controllers;

use App\Models\curriculum;
use App\Models\student_classes;
use App\Models\student_profile;
use Illuminate\Http\Request;
use App\Models\classes;
use App\Http\Requests\AddClassRequest;
use App\Models\archive;
use Illuminate\Support\Facades\Auth;

class ClassesController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    //show
    public function index()
    {
        //$subjects = classes::all();
        //return response()->json($subjects); //sends ALL data from classes table
        $user = Auth::user();
        $DataBaseCleaner = student_profile::where('start_of_school_year', null);

        // Delete all records that match the condition in $DataBaseCleaner
        $DataBaseCleaner->delete();

        if($user->role === 4){
            $student = student_profile::where('archived', 0)
            ->where('user_id', $user->id)
            ->first();

            $studentSubjects = student_classes::where('archived', 0)
            ->where('ongoing', 2) //2 = ongoing, 1 = enrolled previous semester, 0 = previously enrolled subjects
            ->where('student_profile_id', $student->student_profile_id)
            ->get();

            $classDetails = [];

            foreach ($studentSubjects as $subject) {
                $classDetails[] = classes::where('archived', 0)
                ->where('class_id', $subject->class_id)->first();
            }

            return response()->json($classDetails);
        }

        $subjects = classes::where('archived', 0)->get(); // Change '0' to '1' to get archived users

        return response()->json($subjects);
    }

    public function curriculumnCheckListIndex()
    {
        $user = Auth::user();

        if($user->role === 4){
            $student = student_profile::where('archived', 0)
            ->where('user_id', $user->id)
            ->first();

            $studentSubjects = student_classes::where('archived', 0)
            ->where('ongoing', 2) //2 = ongoing, 1 = enrolled previous semester, 0 = previously enrolled subjects
            ->where('student_profile_id', $student->student_profile_id)
            ->get();

            $classDetails = [];

            foreach ($studentSubjects as $subject) {
                $classDetails[] = classes::where('archived', 0)
                ->where('class_id', $subject->class_id)->first();
            }

            return response()->json($classDetails);
        }
    }
    //add class
    public function addClass(AddClassRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\classes $class */

        $class = classes::create([
            'course_title' => $data['course_title'],
            'class_code' => $data['class_code'],
            'class_year' => $data['class_year'], // Update to match the actual column name
            'semester' => $data['semester'],
            'course_code' => $data['course_code'], // Update to match the actual column name
            'units' => $data['units'],
            'course_type' => $data['course_type'],
            'class_section' => $data['class_section'], //how to create if there is a new section???
            'instructor_name' => $data['instructor_name'],
        ]);
        //$token = $class->createToken('main')->plainTextToken;

        return response([
            'class' => $class,
            //'token' => $token,
        ]);
    }
    //update class
    public function updateClasses(Request $request, $id)
    {
        // Validate the incoming data
        $validatedData = $request->validate([
            'instructor_name' => 'required|string|max:255',
            'class_section' => 'required|string|max:255',
            'class_code' => 'required|string|max:255',
        ]);

        // Retrieve the user based on the provided ID
        $subject = classes::where('class_id', $id)->first();

        if (!$subject) {
            // Handle the case where the user with the provided ID is not found
            return response()->json(['message' => 'Class not found'], 404);
        }

        // Update the user's information with the validated data
        $subject->update($validatedData);

        // Return a success response
        return response()->json(['message' => 'Class updated successfully']);
    }
    //archive
    public function archiveclasses(Request $request, $class_id)
    {
        try {
            // Find the class by ID or fail with a 404 response if not found
            $class_id = classes::findOrFail($class_id);

            $classTableName = (new classes)->getTable(); //getting table associated w/ classes model

            $itemType = class_basename($class_id);

            // Create an Archive instance
            $archive = new archive;
            $archive->item_id = $class_id->class_id;
            $archive->item_name = $class_id->class_code;
            $archive->item_type = $itemType;
            $archive->origin_table = $classTableName;
            $archive->archiver_id = auth()->user()->id; // Assuming you have user authentication
            $archive->archiver_name = auth()->user()->name;
            $archive->archiver_role = auth()->user()->role;

            //save to archives table
            $archive->save();

            $class_id->archived = 1;
            $class_id->save();
    
            return response()->json(['message' => 'Class archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
}

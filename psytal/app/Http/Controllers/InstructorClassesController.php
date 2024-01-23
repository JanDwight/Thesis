<?php

namespace App\Http\Controllers;

use App\Models\classes;
use App\Models\student_classes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class InstructorClassesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        $studentClasses = student_classes::where('archived', 0)
            ->where('instructor_profile', $user->name)
            ->get();

        if ($studentClasses->isEmpty()) {
            return response()->json(['message' => 'No classes found for the instructor.'], 404);
        }

        $classDetails = [];

            foreach ($studentClasses as $subject) {
                $classDetails[] = classes::where('archived', 0)
                ->where('class_id', $subject->class_id)->first();
            }

        return response()->json($classDetails);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(instructor_classes $instructor_classes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(instructor_classes $instructor_classes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, instructor_classes $instructor_classes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(instructor_classes $instructor_classes)
    {
        //
    }
}

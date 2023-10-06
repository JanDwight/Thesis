<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentProfileRequest;
use App\Models\student_profile;
use Illuminate\Http\Request;

class StudentProfileController extends Controller
{
    public function createStudentProfileController(StudentProfileRequest $request)
    {
        //
        
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
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
    public function show(student_profile $student_profile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(student_profile $student_profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, student_profile $student_profile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(student_profile $student_profile)
    {
        //
    }
}

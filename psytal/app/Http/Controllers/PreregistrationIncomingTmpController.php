<?php

namespace App\Http\Controllers;

use App\Http\Requests\PreRegistrationIncomingTmpRequest;
use App\Models\preregistration_incoming_tmp;
use Illuminate\Http\Request;

class PreregistrationIncomingTmpController extends Controller
{
    public function createTmpPreReg(PreRegistrationIncomingTmpRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\User $user */

        $preRegTmpincoming = preregistration_incoming_tmp::create([
            'start_of_school_year' => $data['start_of_school_year'],
            'end_of_school_year' => $data['end_of_school_year'],
            'student_school_id' => $data['student_school_id'],
            'learners_reference_number' => $data['learners_reference_number'],
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'middle_name' => $data['middle_name'],
            'maiden_name' => $data['maiden_name'],
            'academic_classification' => $data['academic_classification'],
            'last_school_attended' => $data['last_school_attended'],
            'address_of_school_attended' => $data['address_of_school_attended'],
            'degree' => $data['degree'],
            'date_of_birth' => $data['date_of_birth'],
            'place_of_birth' => $data['place_of_birth'],
            'citizenship' => $data['citizenship'],
            'sex_at_birth' => $data['sex_at_birth'],
            'ethnicity' => $data['ethnicity'],
            'special_needs' => $data['special_needs'],
            'contact_number' => $data['contact_number'],
            'email_address' => $data['email_address'],
            'home_address' => $data['home_address'],
            'address_while_studying' => $data['address_while_studying'],
            'contact_person_name' => $data['contact_person_name'],
            'contact_person_number' => $data['contact_person_number'],
            'contact_person_address' => $data['contact_person_address'],
            'contact_person_relationship' => $data['contact_person_relationship'],
            'pre_reg_status' => $data['pre_reg_status'],
            'type_of_student' => $data['type_of_student'],
        ]);

        return response([
            'user' => $preRegTmpincoming,
        ]);
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
    public function show(preregistration_incoming_tmp $preregistration_incoming_tmp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(preregistration_incoming_tmp $preregistration_incoming_tmp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, preregistration_incoming_tmp $preregistration_incoming_tmp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(preregistration_incoming_tmp $preregistration_incoming_tmp)
    {
        //
    }
}

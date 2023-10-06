<?php

namespace App\Http\Controllers;

use App\Models\preregistration_continuing_tmp;
use Illuminate\Http\Request;

class PreregistrationContinuingTmpController extends Controller
{
    public function createTmpPreReg(PreregistrationContinuingTmpController $request)
    {
        $data = $request->validated();

        /** @var \App\Models\User $user */

        $preRegTmpincoming = preregistration_continuing_tmp::create([
            'start_of_school_year' => $data['start_of_school_year'],
            'end_of_school_year' => $data['end_of_school_year'],
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'middle_name' => $data['middle_name'],
            'maiden_name' => $data['maiden_name'],
            'type_of_student' => $data['type_of_student'],
            'degree' => $data['degree'],
            'major' => $data['major'],
            'candidate_for_graduation' => $data['candidate_for_graduation'],
            'end_of_term_to_finnish_degree' => $data['end_of_term_to_finnish_degree'],
            'last_of_term_to_finnish_degree' => $data['last_of_term_to_finnish_degree'],
            'date_of_birth' => $data['date_of_birth'],
            'place_of_birth' => $data['place_of_birth'],
            'citizenship' => $data['citizenship'],
            'ethnicity' => $data['ethnicity'],
            'contact_number' => $data['contact_number'],
            'sex_at_birth' => $data['sex_at_birth'],
            'special_needs' => $data['special_needs'],
            'email_address' => $data['email_address'],
            'home_address' => $data['home_address'],
            'address_while_studying' => $data['address_while_studying'],
            'contact_person_name' => $data['contact_person_name'],
            'contact_person_number' => $data['contact_person_number'],
            'contact_person_address' => $data['contact_person_address'],
            'contact_person_relationship' => $data['contact_person_relationship'],
            'section' => $data['section'],
            'class_year' => $data['class_year'],
            'health_facility_registered' => $data['health_facility_registered'],
            'depended_on_parents_health_facility' => $data['depended_on_parents_health_facility'],
            'vaccination_status' => $data['vaccination_status'],
            'digital_communication_and_literacy' => $data['digital_communication_and_literacy'],
            'level_of_digital_literacy' => $data['level_of_digital_literacy'],
            'avail_free_higher_education' =>$data['avail_free_higher_education'],
            'voluntarily_contribute' => $data['voluntarily_contribute'],
            'amount' => $data['amount'],
            'pre_reg_status' => $data['pre_reg_status'],
        ]);

        return response([
            'prereg' => $preRegTmpincoming,
        ]);
    }
}

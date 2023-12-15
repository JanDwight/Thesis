<?php

namespace App\Http\Controllers;

use App\Http\Requests\SemesterInformationRequest;
use App\Models\semester_information;
use Illuminate\Http\Request;

class SemesterInformationController extends Controller
{
    public function addsemesterinformation(SemesterInformationRequest $request)
    {
        $data = $request->validated();

        $semesterinformation = semester_information::create([
            'start_of_prereg' => $data['start_of_prereg'],
            'end_of_prereg' => $data['end_of_prereg'],
            'start_of_semester' => $data['start_of_semester'],
            'end_of_semester' => $data['end_of_semester'],
        ]);
        
        return response(['success' => 'Pre-Registration is now open']);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendStudentPasswordRequest;
use App\Mail\SendPassword;
use Exception;
use Illuminate\Http\Request;
use Mail;

class SendStudentAccountPasswordController extends Controller
{
    public function sendstudentaccountpassword(Request $request)
    {
        $studentInfo = $request->query();

        $data = 
        [
            'title'=>'Welcome to Psychology Department',
            'body'=> 'Congratiolations, you are now a part of Psychology Department. To login please use your full name (lastname, firstname, M.I.) and for your password "'  . $studentInfo['password'] . '". Thank you'
        ];
        try {
            Mail::to($studentInfo['email'])->send(new SendPassword($data));
            return response()->json([$studentInfo]);
        }
        catch(Exception $e)
        {
          return response()->json([$studentInfo]);
        } 
    }
}

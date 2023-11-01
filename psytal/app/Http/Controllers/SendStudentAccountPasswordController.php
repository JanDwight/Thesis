<?php

namespace App\Http\Controllers;

use App\Mail\SendPassword;
use Exception;

use Mail;
class SendStudentAccountPasswordController extends Controller
{
    public function sendstudentaccountpassword()
    {
        
        $data = 
        [
            'title'=>'Welcome to Psychology Department',
            'body'=> 'Congratiolations, you are now a part of Psychology Department'
        ];
        try {
            Mail::to('dwightheel@gmail.com')->send(new SendPassword($data));
            return response()->json(['Great! Successfully sent in your mail']);
        }
        catch(Exception $e)
        {
          return response()->json(['Sorry! Please try again latter']);
        }
    }
}

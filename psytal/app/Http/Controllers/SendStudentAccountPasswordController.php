<?php

namespace App\Http\Controllers;

use App\Mail\SendPassword;
use App\Mail\ForgotPasswordInputEmail;
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

    public function forgotpasswordsendemail(Request $request)
{
    try {
        $formData = $request->query(); // Ensure you're getting the email correctly

        $data = [
            'title' => 'Forgot Password',
            'body'  => 'Here is the code. "' . $formData['code']. '" Thank you.'
        ];

        Mail::to($formData['email'])->send(new ForgotPasswordInputEmail($data)); // Make sure the SendPassword class is correct

        // You might want to log a success message or return a different response for success
        return response()->json([
            'success' => true,
            'message' => 'Email sent successfully'
        ]);
    } catch (Exception $e) {
        return response()->json(['error' => 'Error, Please try again later']);
    }
}

public function sendnewpassword(Request $request)
    {
        $newpassword = $request->input('newpassword');

        $data = 
        [
            'title'=>'Change Password',
            'body'=> 'Here is your new Password. "'  . $newpassword['password']. '" Make sure to change it after loging into your account'
        ];
        try {
            Mail::to($newpassword['email'])->send(new SendPassword($data));
            return response()->json([$newpassword]);
        }
        catch(Exception $e)
        {
          return response()->json([$newpassword]);
        } 
    }

}

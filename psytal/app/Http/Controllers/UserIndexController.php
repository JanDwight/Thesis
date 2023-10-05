<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserIndexController extends Controller
{
    public function index()
    {
        /*$users = User::all();
        return response()->json($users); sends ALL data from users table*/

        //excludes showing archived users
        $users = User::where('archived', 0)->get(); // Change '0' to '1' to get archived users

        return response()->json($users);

    }

    public function count_students()
    {
        $studentCount = (int)User::where('role', 4)->count();
        return response()->json($studentCount);

    }

    public function count_employee()
    {
        $employeeCount = (int)User::whereIn('role', [1, 2, 3])->count();
        return response()->json($employeeCount);
    }
}

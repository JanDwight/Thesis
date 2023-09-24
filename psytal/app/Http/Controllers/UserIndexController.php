<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserIndexController extends Controller
{
    public function index()
    {
        $users = User::all(); // Replace 'Employee' with your model name
        return response()->json($users);
    }
}

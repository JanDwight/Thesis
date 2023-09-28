<?php

namespace App\Http\Controllers;

use App\Models\classes;
use Illuminate\Http\Request;

class ClassIndexController extends Controller
{
    public function index()
    {
        $subjects = classes::all();
        return response()->json($subjects); //sends ALL data from classes table
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;

class ClassIndexController extends Controller
{
    public function index()
    {
        $subjects = classes::all();
        return response()->json($subjects); //sends ALL data from classes table
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\archive;

class ArchiveController extends Controller
{
    /**
    * Display a listing of the resource.
    * rem was here
    */
   public function index()
   {
       // Retrieve all logs starting from the most recent
       $archives = archive::orderBy('created_at', 'desc')->get();
       return response()->json($archives);
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
   public function show(archive $archives)
   {
       // order by descending order (most recent first)
       // send three items only
       $archives = archive::orderBy('created_at', 'desc')->take(3)->get();
       return response()->json($archives);
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(archive $archives)
   {
       //
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, archive $archives)
   {
       //
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(archive $archives)
   {
       //
   }
}

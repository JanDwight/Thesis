<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\archive;
use Illuminate\Database\Eloquent\SoftDeletes; // Import SoftDeletes trait

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
       //$archives = archive::orderBy('created_at', 'desc')->take(3)->get();
       $archives = archive::orderBy('created_at', 'desc')->get();
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
   //permanent delete users
   public function forceDeleteUser(Request $request, $userId)
   {
   try {
       // Find the user by ID or fail with a 404 response if not found
       $user = User::findOrFail($userId);

       // Perform a true deletion
       $user->forceDelete();

       return response()->json(['message' => 'User deleted permanently']);
    } catch (\Exception $e) {
        // Handle exceptions, e.g., log the error
        return response()->json(['message' => 'Error deleting user'], 500);
    }
   }
   //restore users by id
   public function restoreUser(Request $request, $userId)
    {
        try {
            // Find the trashed user by ID or fail with a 404 response if not found
            $user = User::withTrashed()->findOrFail($userId);

            // Restore the user
            $user->restore();
    
            return response()->json(['message' => 'User restored successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error restoring user'], 500);
        }
    }
}

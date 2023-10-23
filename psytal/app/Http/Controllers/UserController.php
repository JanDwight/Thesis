<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\archive;

class UserController extends Controller
{
    //for show all users
    public function index()
    {
        /*$users = User::all();
        return response()->json($users); sends ALL data from users table*/

        //excludes showing archived users
        $users = User::where('archived', 0)->get(); // Change '0' to '1' to get archived users

        return response()->json($users);

    }
    //for dashboard count
    public function count_students()
    {
        $studentCount = (int)User::where('role', 4)->count();
        return response()->json($studentCount);

    }
    //for dashboard count
    public function count_employee()
    {
        $employeeCount = (int)User::whereIn('role', [1, 2, 3])->count();
        return response()->json($employeeCount);
    }
    //for add class instructors
    //only send id and name pending delete
    public function show_instructors()
    {
        $instructors = User::where('role', 3)
        ->where('archived', 0)
        ->select('id', 'name')
        ->get();

        return response()->json($instructors);
    }
    //for update user
    public function updateUser(Request $request, $id)
    {
        // Validate the incoming data (e.g., name, role, email, lastedit)
        $validatedData = $request->validate([
            'id' => 'required|integer',
            'name' => 'required|string|max:255',
            'role' => 'required|integer|min:1|max:4',
            'email' => 'required|email|max:255',
            'lastedit' => 'required|date', // Modify this validation rule as needed
        ]);

        // Retrieve the user based on the provided ID
        $user = User::find($id);

        if (!$user) {
            // Handle the case where the user with the provided ID is not found
            return response()->json(['message' => 'User not found'], 404);
        }

        // Update the user's information with the validated data
        $user->update($validatedData);

        // Return a success response
        return response()->json(['message' => 'User updated successfully']);
    }
    // for archive user
    public function archiveUser(Request $request, $userId)
    {
        try {
            // Find the user by ID or fail with a 404 response if not found
            $user = User::findOrFail($userId);

            $userTableName = (new User)->getTable(); //getting table associated w/ User model

            // Get the name of the current model
            $itemType = class_basename($user);

            // Create an Archive instance // make one for all archiveable items
            $archive = new archive;
            $archive->item_id = $user->id;
            $archive->item_name = $user->name;
            $archive->item_type = $itemType;
            $archive->origin_table = $userTableName;
            $archive->archiver_id = auth()->user()->id; // Assuming you have user authentication 
            $archive->archiver_name = auth()->user()->name; 
            $archive->archiver_role = auth()->user()->role; 
            //save to archives table
            $archive->save();

            $user->archived = 1;
            $user->save();
    
            return response()->json(['message' => 'User archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
    // COPY FOR ALL CONTROLLERS WITH ARCHIVE
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UpdateUserController extends Controller
{
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
}

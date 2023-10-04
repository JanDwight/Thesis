<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;

class UpdateClassController extends Controller
{
    public function updateClasses(Request $request, $id)
    {
        // Validate the incoming data
        //delete everythin make GPT do all of it
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'code' => 'required|integer|min:1|max:4',
            'instructor' => 'required|email|max:255',
            'lastedit' => 'required|date', // Modify this validation rule as needed
        ]);

        // Retrieve the user based on the provided ID
        $subject = classes::find($id);

        if (!$subject) {
            // Handle the case where the user with the provided ID is not found
            return response()->json(['message' => 'Class not found'], 404);
        }

        // Update the user's information with the validated data
        $subject->update($validatedData);

        // Return a success response
        return response()->json(['message' => 'Class updated successfully']);
    }
}

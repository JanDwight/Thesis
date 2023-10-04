<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\links;

class UpdateLinksController extends Controller
{
    public function updateLink(Request $request, $id)
    {
        // Validate the incoming data (e.g., classcode, class description, instructor name, linl, lastedit)
        $validatedData = $request->validate([
            'class_code' => 'required|string',
            'class_description' => 'required|string',
            'instructor_name' => 'required|string',
            'url' => 'required|string',
            'lastedit' => 'required|date', // Modify this validation rule as needed
        ]);

        // Retrieve the user based on the provided ID
        $link = Links::find($id);

        if (!$link) {
            // Handle the case where the user with the provided ID is not found
            return response()->json(['message' => 'User not found'], 404);
        }

        // Update the user's information with the validated data
        $link->update($validatedData);

        // Return a success response
        return response()->json(['message' => 'User updated successfully']);
    }
}

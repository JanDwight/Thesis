<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;

class ArchiveClassesController extends Controller
{
    public function archiveclasses(Request $request, $class_id)
    {
        try {
            //usused fix tables again
            // Find the user by ID or fail with a 404 response if not found
            $class_id = User::findOrFail($class_id);
    
            // Update the user's archived status to 1
            $class_id->update(['archived' => 1]);
    
            return response()->json(['message' => 'User archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
}

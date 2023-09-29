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
            // Find the class by ID or fail with a 404 response if not found
            $class_id = classes::findOrFail($class_id);
    
            // Update the class's archived status to 1
            $class_id->update(['archived' => 1]);
    
            return response()->json(['message' => 'Class archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
}

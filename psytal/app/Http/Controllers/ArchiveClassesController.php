<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;
use App\Models\archive;

class ArchiveClassesController extends Controller
{
    public function archiveclasses(Request $request, $class_id)
    {
        try {
            // Find the class by ID or fail with a 404 response if not found
            $class_id = classes::findOrFail($class_id);

            $classTableName = (new classes)->getTable(); //getting table associated w/ classes model

            // Create an Archive instance
            $archive = new archive;
            $archive->item_id = $class_id->class_id;
            $archive->item_name = $class_id->course_title;
            $archive->item_type = 'Class';
            $archive->origin_table = $classTableName;
            $archive->archiver_id = auth()->user()->id; // Assuming you have user authentication
            $archive->archiver_name = auth()->user()->name;
            $archive->archiver_role = auth()->user()->role;

            //save to archives table
            $archive->save();

            $class_id->archived = 1;
            $class_id->save();
    
            return response()->json(['message' => 'Class archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
}

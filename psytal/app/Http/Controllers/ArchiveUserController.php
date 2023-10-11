<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; // Import the DB facade
use App\Models\User;
use App\Models\archive;

class ArchiveUserController extends Controller
{
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

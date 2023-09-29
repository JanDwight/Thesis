<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ArchiveUserController extends Controller
{
    public function archiveUser(Request $request, $userId)
    {
        try {
            // Find the user by ID or fail with a 404 response if not found
            $user = User::findOrFail($userId);
    
            // Update the user's archived status to 1
            $user->update(['archived' => 1]);
    
            return response()->json(['message' => 'User archived successfully']);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving user'], 500);
        }
    }
}

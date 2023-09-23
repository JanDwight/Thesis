<?php

namespace App\Http\Controllers;

use App\Models\posts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest; // Import the custom request

class PostController extends Controller
{
    public function createPost(CreatePostRequest $request)
    {
       // Temporarily disable authentication for testing
    //auth()->loginUsingId(1);

    $data = $request->validated();

     // Get the ID of the authenticated user
     $user_id = auth()->id();

    // Create a new post
    $post = posts::create([
        'title' => $data['title'],
        'description' => $data['description'],
        'user_id' => $user_id, // Set the user ID to the authenticated user's ID
    ]);

    return response(['post' => $post]);
    }
}

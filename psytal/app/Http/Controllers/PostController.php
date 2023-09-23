<?php

namespace App\Http\Controllers;

use App\Models\post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest; // Import the custom request

class PostController extends Controller
{
    public function create(CreatePostRequest $request)
    {
        $data = $request->validated();
        // Handle image uploads if needed
        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                // Customize the image upload logic based on your requirements
                // For example, you can store images in a specific directory and save their paths in the database
                $path = $image->store('public/images');
                $imagePaths[] = $path;
            }
        }

        // Create a new post
        $post = posts::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'images' => $imagePaths, // Save image paths to the 'images' column
        ]);

        // Save the post to the database
        $post->save();

        return response()->json(['message' => 'Post created successfully'], 201);
    }
}

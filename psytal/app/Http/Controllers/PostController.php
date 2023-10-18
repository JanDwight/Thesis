<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\posts; 
use App\Models\PostImage;
use Illuminate\Support\Str;
use App\Http\Requests\CreatePostRequest;

class PostController extends Controller
{
    public function createPosts(CreatePostRequest $request)
    {
        $data = $request->validated();

        // Create a new post
        $post = auth()->user()->posts()->create([
            'title' => $data['title'],
            'description' => $data['description'],
        ]);

        if ($request->hasFile('images')) {
            $images = $request->file('images');

            foreach ($images as $image) {
                // Generate a unique filename for each image
                $filename = time() . '_' . $image->getClientOriginalName();

                // Move the image to the 'public' disk under the 'images' directory
                $image->storeAs('public/images', $filename);

                // Save the file path in the 'image_path' field in the 'post_images' table
                $imagePath = 'images/' . $filename;

                $post->images()->create(['image_path' => $imagePath]);
            }
        }

        return response(['post' => $post]);
    }
}

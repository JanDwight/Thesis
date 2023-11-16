<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\posts; 
use App\Models\PostImage;
use Illuminate\Support\Str;
use App\Http\Requests\CreatePostRequest;
use App\Models\archive;


class PostController extends Controller
{
    public function createPosts(CreatePostRequest $request)
    {
        $data = $request->validated();
    
        // Create a new post
        $post = new posts([
            'title' => $data['title'],
            'description' => $data['description'],
        ]);
    
        // Manually set the user_id
        $post->user_id = auth()->id();
    
        // Save the post (including slug generation)
        $post->save();
    
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
    

    public function getPosts()
    {
        $posts = posts::with('images')
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->select('posts.*', 'users.name as author_name')
            ->orderBy('posts.created_at', 'desc')
            ->get();

        return response()->json($posts);
    }

    public function update(Request $request, $id)
    {
        \Log::info('Request Data: ' . json_encode($request->all()));
        $post = posts::findOrFail($id);
    
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Update title and description
        $post->update($request->only('title', 'description'));
    
        // Handle image uploads
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                if (isset($request->existingImages[$index])) {
                    $postImage = PostImage::findOrFail($request->existingImages[$index]);
                    $postImage->update(['image_path' => $image->store('images')]);
                } else {
                    $post->images()->create(['image_path' => $image->store('images')]);
                }
            }
        }
    
        // Refresh the post instance to get the updated data
        $post->refresh();
    
        return response()->json(['post' => $post]);
    }
    
    public function archive(Request $request, $postId)
{

    if (!$postId) {
        return response(['error' => 'Invalid post ID'], 400);
    }

    try {
        // Find the post to archive
        $post = posts::with('images')->findOrFail($postId);

        // Archive the post itself
        $post->archived = true;
        $post->save();

        $postTableName = $post->getTable(); // Getting the table associated with the Post model

        // Get the name of the current model
        $itemType = class_basename($post);

        // Create a new archive entry
        $archive = new archive;
        $archive->item_id = $post->id;
        $archive->item_name = $post->title; // Use 'title' as the item name
        $archive->item_type = $itemType;
        $archive->origin_table = $postTableName;
        $archive->archiver_id = auth()->user()->id; // Assuming you have user authentication
        $archive->archiver_name = auth()->user()->name;
        $archive->archiver_role = auth()->user()->role;

        // Save to archives table
        $archive->save();

        foreach ($post->images as $image) {
            $image->archived = true;
            $image->save();
        }
        dd('Reached the archive method');
        return response(['message' => 'Post archived successfully'], 204); // Use 204 No Content status code
    } catch (\Exception $e) {
        return response(['error' => 'Error archiving the post'], 500);
    }
}


    
       //count for dashboard
       public function count_posts()
       {
           $postCount = posts::count();
   
       return $postCount;
       }
}    
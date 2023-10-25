<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\posts; 
use App\Models\PostImage;
use App\Models\User;
use App\Models\archive;
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

    public function getPostsWithUsers()
    {
        $posts = posts::with('images')
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->select('posts.*', 'users.name as author_name')
            ->orderBy('posts.created_at', 'desc')
            ->get();

        return response()->json($posts);
    }

    public function update(Request $request, $postId)
    {
        try {
            // Find the post to update
            $post = posts::findOrFail($postId);
    
            // Update the post fields if they are present in the request
            if ($request->has('title')) {
                $post->title = $request->input('title');
            }
    
            if ($request->has('description')) {
                $post->description = $request->input('description');
            }
    
            // Handle image update if new images are uploaded
            if ($request->hasFile('image')) {
                // Assuming the input field for the image is named 'image'
                $image = $request->file('image');
    
                $filename = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/images', $filename);
                $imagePath = 'images/' . $filename;
    
                // Check if the post has an associated image
                if ($post->postImage) {
                    // Update the existing image record
                    $post->postImage->image_path = $imagePath;
                    $post->postImage->save();
                } else {
                    // Create a new image record
                    $postImage = new PostImage(['image_path' => $imagePath]);
                    $post->postImage()->save($postImage);
                }
            }
    
            // Save the changes to the post
            $post->save();
    
            return response(['message' => 'Post updated successfully', 'post' => $post]);
        } catch (\Exception $e) {
            return response(['error' => 'Error updating the post.'], 500);
        }
    }
    

    public function archive(Request $request, $postId)
    {
        // Find the post to archive
        $post = posts::findOrFail($postId);

        // Archive the post itself
        $post->archived = true;
        $post->save();

        $postTableName = (new posts)->getTable(); // Getting the table associated with the Post model

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

        return response(['message' => 'Archive post successfully']);
    }

    //count for dashboard
    public function count_posts()
    {
        $postCount = posts::count();

    return $postCount;
    }
}

<?php
namespace App\Http\Controllers;
use App\Models\posts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest; 
class PostController extends Controller
{
    //CREATE NEW POSTS
    public function createPost(CreatePostRequest $request)
    {
        $data = $request->validated();

        // Create the post
        $post = auth()->user()->posts()->create([
            'title' => $data['title'],
            'description' => $data['description'],
        ]);

        if ($request->hasFile('images')) {
            // Handle image uploads
            foreach ($request->file('images') as $image) {
                $filename = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/images', $filename);

                $imagePath = 'images/' . $filename;
                $post->images()->create(['image_path' => $imagePath]);
            }
        }

        return response(['post' => $posts]);
    }


    //DISPLAY POSTS
    public function getPosts()
    {
        // Retrieve posts from the database, including the author's name and associated images
        $posts = Post::select('posts.*', 'users.name as author_name') //join posts table and users table
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->with('images') // Load associated images
            ->get();
    
        return response()->json($posts);
    }
    
    
   
   // Update the post
   public function update(Request $request, $postId)
   {
       $post = Post::find($postId);
   
       if (!$post) {
           return response(['error' => 'Post not found'], 404);
       }
   
       // Validate and update the post data
       $data = $request->validate([
           'title' => 'required|string',
           'description' => 'required|string',
       ]);
   
       $post->title = $data['title'];
       $post->description = $data['description'];
   
       if ($request->hasFile('images')) {
           $images = $request->file('images');
   
           foreach ($images as $image) {
               // Handle image update or addition
               if ($image) {
                   // If an image is provided, process it
                   $filename = time() . '_' . $image->getClientOriginalName();
                   $image->storeAs('public/images', $filename);
   
                   // Save the file path in the 'image' field in the 'posts' table
                   $imagePath = 'images/' . $filename;
   
                   // Check if there are existing images for the post
                   if ($post->images->count() > 0) {
                       // Update the first existing image with the new image path
                       $existingImage = $post->images->first();
                       $existingImage->image_path = $imagePath;
                       $existingImage->save();
                   } else {
                       // If no existing image, create a new one
                       $post->images()->create(['image_path' => $imagePath]);
                   }
               }
           }
       }
   
       $post->save();
   
       return response(['post' => $post]);
   }
   

    //ARCHIVE POSTS
    public function archivePost($postId)
    {
    $post = Post::find($postId);

    if (!$post) {
        return response(['error' => 'Post not found'], 404);
    }

    // Archive the post
    $post->archived = true;
    $post->save();

    // Archive associated images if needed
    $images = $post->images;

    foreach ($images as $image) {
        $image->archived = true; // Set an 'archived' field in the images table
        $image->save();
    }

    return response(['message' => 'Post and associated images archived successfully']);
}



}
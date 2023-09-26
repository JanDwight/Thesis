<?php
namespace App\Http\Controllers;
use App\Models\posts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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

        if ($request->hasFile('image')) {
            $image = $request->file('image');
    
            // Generate a unique filename for the image
            $filename = time() . '_' . $image->getClientOriginalName();
    
            // Move the image to the 'public' disk under the 'images' directory
            $image->storeAs('public/images', $filename);
    
            // Save the file path in the 'image' field in the 'posts' table
            $post->image = 'images/' . $filename;
            $post->save();
        }
        
        return response(['post' => $post]);
    }

    public function getPosts()
    {
        // Retrieve posts from the database, including the author's name
        $posts = posts::select('posts.*', 'users.name as author_name')
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->get();
    
        return response()->json($posts);
    }
    
}
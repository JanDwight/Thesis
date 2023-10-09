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
       
    $data = $request->validated();

    // $post = auth()->user()->posts()->create([
    //    'title' => $data['title'],
    //    'description' => $data['description'],

    // Create a new post
    $post = auth()->user()->posts()->create([
        'title' => $data['title'],
        'description' => $data['description'],
    ]);

    return response(['post' => $post]);
    
    }

    public function index()
    {
       // Retrieve all logs
        $posts = posts::all();

        return response()->json($posts);
       
    }

    public function count_posts()
    {
        $postCount = (int)posts::count();
        return response()->json($postCount);
    }
}

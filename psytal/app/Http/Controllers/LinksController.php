<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Links; // Import the Link model


class LinksController extends Controller
{
     public function addlink()
    {
        return view('links.addlink'); // Display the form to add links
    }
    public function store(Request $request)
    {
        // Validate the form input (e.g., URL and description)
        $validatedData = $request->validate([
            'class_code' => 'required|string',
            'class_description' => 'required|max:255',
            'instructor_name' => 'required|string',
            'url' => 'required|url',
        ]);

         // Create a new link using the Link model
         $link = new Links();
         $link->url = $validatedData['url'];
         $link->class_description = $validatedData['class_description'];
         $link->instructor_name = $validatedData['instructor_name'];
         $link->save();

        return response()->json(['message' => 'Link added successfully'], 200);
    }

    public function getLinks()
    {
        try {
            $links = Links::all(); // Retrieve all links from the database
            return response()->json(['links' => $links], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to retrieve links'], 500);
        }
    }
        public function archiveLink(Request $request)
    {
        // Your archiving logic goes here
        // You can access data from the request using $request->input('key')
        // For example, if you want to archive a link by its ID
        $linkId = $request->input('linkId');
        $link = Links::find($linkId);
        if ($link) {
            // Archive the link (you need to define an 'archived' column in your database)
            $link->archived = true;
            $link->save();

            return response()->json(['message' => 'Link archived successfully'], 200);
        } else {
            return response()->json(['error' => 'Link not found'], 404);
            return response()->json(['errors' => $validator->errors()], 422);
        }
    }
}

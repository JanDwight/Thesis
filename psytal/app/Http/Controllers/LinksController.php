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
            'url'=>'required|url'
        ]);

        // Create a new link using the Link model
        $link = new links();
        $link->url = $validatedData['url'];
        $link->description = $validatedData['class_description'];
        $link->name = $validatedData['instructor_name'];
        $link->save();

        return redirect()->route('links.addlink')->with('success', 'Link added successfully');
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
        try {
            $linkId = $request->input('link_id'); //change this
            $link = Links::find($linkId);

            if (!$link) {
                return response()->json(['error' => 'Link not found'], 404);
            }

            // Implement your logic to archive the link here (e.g., update its status) //to be updated

            return response()->json(['message' => 'Link archived successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to archive link'], 500);
        }
    
    }
    
}

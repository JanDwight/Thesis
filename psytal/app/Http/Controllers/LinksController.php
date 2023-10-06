<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\links;
use Illuminate\Http\Request;
use App\Http\Requests\LinksRequest;


class LinksController extends Controller
{
     public function addLink(LinksRequest $request)
    {
        $data = $request->validated();

         /** @var \App\Models\links $links */

         $links = links::create([
            'class_code' => $data['class_code'],
            'class_description' => $data['class_description'],
            'instructor_name' => $data['instructor_name'],
            'url' => $data['url'],

        ]);
        return response([
            'links' => $links,
        ]);
    }

    public function getLinks()
    {
        try {
            $links = Links::where('archived', 0)->get(); // Retrieve all links from the database
            return response()->json(['links' => $links], 200);
            $link -> update(['archive'=>1]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to retrieve links'], 500);
        }
    }


        public function archiveLink(Request $request,$linkId)
    {
        $link = Links::find($linkId);
        try {
            $link->update(['archived' => 1]);
            return response()->json(['message' => $link], 200);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error archiving course'], 500);
        }

       
    }
}

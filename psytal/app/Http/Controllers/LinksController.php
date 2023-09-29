<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\addLinkRequest;


class LinksController extends Controller
{
     public function addLink(LinksRequest $request)
    {
        $data = $request->validated();

         /** @var \App\Models\curriculum $curriculum */

         $links = links::create([
            'class_year' => $data['class_year'],
            'semester' => $data['semester'],
            'course_code' => $data['course_code'],
            'units' => $data['units'],
            'course_title' => $data['course_title'],
            'hoursperWeek' => $data['hoursperWeek'],
            'course_type' => $data['course_type'],
            'preReq' => $data['preReq']
        ]);
        return response([
            'links' => $links,
        ]);
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

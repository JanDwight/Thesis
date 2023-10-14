<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\archive;

class ArchiveController extends Controller
{
    /**
    * Display a listing of the resource.
    * rem was here
    */
   public function index()
   {
       // Retrieve all logs starting from the most recent
       $archives = archive::orderBy('created_at', 'desc')->get();
       return response()->json($archives);
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
       //
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
       //
   }

   /**
    * Display the specified resource.
    */
   public function show(archive $archives)
   {
       // order by descending order (most recent first)
       // send three items only
       //$archives = archive::orderBy('created_at', 'desc')->take(3)->get();
       $archives = archive::orderBy('created_at', 'desc')->get();
       return response()->json($archives);
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(archive $archives)
   {
       //
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, archive $archives)
   {
       //
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(archive $archives)
   {
       //
   }
   // DELETE DELETE DELETE
   public function deleteArchive(Request $request)
   {
        try {
            // Retrieve the array of selected item IDs from the request payload
            $selectedItems = $request->input('selectedItems');
    
            // Query the archives table to select specific columns
            $archivedItems = archive::whereIn('id', $selectedItems)
                ->select('id', 'item_id', 'item_name', 'item_type', 'origin_table')
                ->get();
    
            // Process the archived items and restore them to their source tables
            foreach ($archivedItems as $archivedItem) {
                // Determine the source model class based on 'item_type' and 'origin_table'
                $modelClass = 'App\\Models\\' . ucfirst($archivedItem->item_type);
    
                // Check if the model class exists
                if (class_exists($modelClass)) {
                    // Use 'item_id' to find the item in the source table
                    $sourceItem = $modelClass::find($archivedItem->item_id);
    
                    // If the source item is found, you can update it as needed
                    if ($sourceItem) {
                        // Update the 'archived' column to 0 in the source item
                        $sourceItem->delete();
                    }
                }
            }

            // Force delete the selected items from the 'archives' table
            archive::whereIn('id', $selectedItems)->forceDelete();
            return response()->json(['message' => 'Items deleted successfully', 'data' => $archivedItems]);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error deleting items'], 500);
        }
   }
   // RESTORE RESTORE RESTORE
   public function returnArchive(Request $request)
    {
        try {
            // Retrieve the array of selected item IDs from the request payload
            $selectedItems = $request->input('selectedItems');
    
            // Query the archives table to select specific columns
            $archivedItems = archive::whereIn('id', $selectedItems)
                ->select('id', 'item_id', 'item_name', 'item_type', 'origin_table')
                ->get();
    
            // Process the archived items and restore them to their source tables
            foreach ($archivedItems as $archivedItem) {
                // Determine the source model class based on 'item_type' and 'origin_table'
                $modelClass = 'App\\Models\\' . ucfirst($archivedItem->item_type);
    
                // Check if the model class exists
                if (class_exists($modelClass)) {
                    // Use 'item_id' to find the item in the source table
                    $sourceItem = $modelClass::find($archivedItem->item_id);
    
                    // If the source item is found, you can update it as needed
                    if ($sourceItem) {
                        // Update the 'archived' column to 0 in the source item
                        $sourceItem->update(['archived' => 0]);
                    }
                }
            }

            // Force delete the selected items from the 'archives' table
            archive::whereIn('id', $selectedItems)->forceDelete();
    
            // After processing the selectedItems, return a response indicating success
            return response()->json(['message' => 'Items restored successfully', 'data' => $archivedItems]);
        } catch (\Exception $e) {
            // Handle exceptions, e.g., log the error
            return response()->json(['message' => 'Error restoring items'], 500);
        }
    }
}

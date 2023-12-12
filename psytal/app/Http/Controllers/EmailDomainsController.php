<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmailDomains;
use App\Models\email_domains;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailDomainsController extends Controller
{
    public function index(Request $request)
    {
        // Retrieve all records from the database using the model
        $items = email_domains::all();

        // Pass the retrieved data to the view
        return response([$items]);         
    }
    public function addEmailDomain(EmailDomains $request)
    {
        $data = $request->validated();

        /** @var \App\Models\curriculum $curriculum */

        $emailDomains = email_domains::create([
            'email_domains' => $data['email_domains']
        ]);

        return response([
            'Success' => 'Email Domain Added',
        ]);
    }
}

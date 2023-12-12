<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmailDomains;
use App\Models\email_domains;
use Illuminate\Http\Request;

class EmailDomainsController extends Controller
{
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddClassController extends Controller
{
    public function adduser(AddUserRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\User $user */

        $user = User::create([
            'name' => $data['name'],
            'password' => bcrypt($data['password']),
            'role' => $data['role'],
            'email' => $data['email']
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }
}

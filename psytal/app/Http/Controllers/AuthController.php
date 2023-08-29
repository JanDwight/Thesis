<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUserRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
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

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        $role = $user->role;

        return response([
            'user' => $user,
            'token' =>$token,
            'role' =>$role
        ]);
    }

    public function logout(Request $request)
    {

        /** @var User $user */

        $user = Auth::user();
        //Revoke the token that was used to authenticate the current request

        $user->currentAccessToken()->delete();

        return response([
            'succes' => true
        ]);
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUserRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function getUserDetails() {
        // Retrieve the authenticated user
        $user = Auth::user();

        if ($user) {
            // User details found
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
    }

    public function addUser(AddUserRequest $request) {
        $data = $request->validated();

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

    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        $role = $user->role;
        $userName = $user->name;

        return response([
            'user_name' => $userName,
            'token' => $token,
            'role' => $role
        ]);
    }

    public function logout(Request $request) {
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}

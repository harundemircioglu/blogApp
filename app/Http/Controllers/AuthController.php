<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                'user' => $user,
                'message' => 'Login success'
            ]);
        } else {
            return response()->json([
                'message' => 'Login error'
            ], 401);
        }
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone' => 'required|string|unique:users',
            'password' => 'required|string|min:6',
            'profileImage' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Örnek dosya türü ve boyutu
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);

        if ($user) {
            // Profil resmini yükleme
            if ($request->hasFile('profileImage')) {
                $imagePath = $request->file('profileImage')->store('profile_images');
                $user->update(['profileImage' => $imagePath]);
            }

            Auth::login($user); // Oturum açma
            return response()->json([
                'user' => $user,
                'message' => 'Register success'
            ]);
        } else {
            return response()->json([
                'message' => 'Register error'
            ], 401);
        }
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'message' => 'Logout success',
        ]);
    }
}

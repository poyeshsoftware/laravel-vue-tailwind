<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function index(Request $request)
    {

    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!auth::guard()->attempt($request->only('email', 'password'))) {
            throw new AuthenticationException();
        }

        return auth()->guard()->user();
    }

    public function api_login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken('token-' . $user->id)->plainTextToken;
        // return ['token' => $token->plainTextToken];
    }

    public function logout()
    {
        auth()->guard()->logout();
    }

    public function me()
    {
        return auth()->guard()->user();
    }

}



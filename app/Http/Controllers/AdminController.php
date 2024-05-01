<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        $role = Auth::user()->role;
        if($role === 'super-admin'){
            return Inertia::render('Admin/Admin', [
                'users' => User::latest()->get(),
            ]);
        } else {
            return abort(403);
        }
    }

    public function store(Request $request): RedirectResponse
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);

        $user->save();

        return redirect(route('beranda'));        
    }

    public function update(Request $request): RedirectResponse
    {
        $user = User::where('id', $request->id);
        if(!empty($request->password)) {
            $user->update(
                [
                    'name' => $request->name,
                    'email' => $request->email,
                    'role' => $request->role,
                    'password' => Hash::make($request->password),
                ]
            );
        } else {
            $user->update(
                [
                    'name' => $request->name,
                    'email' => $request->email,
                    'role' => $request->role,
                ]
            );
        }

        return redirect(route('admin.index'));
    }

    public function destroy($id): RedirectResponse
    {
        $user = User::where('id', $id)->first();
        $user->delete();
        return redirect(route('admin.index'));
    }
}

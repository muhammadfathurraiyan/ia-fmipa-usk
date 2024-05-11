<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Berita;

class ProfileController extends Controller
{
    
    public function index()
    {
        return Redirect::to('/');
    }

    public function sejarah(): Response
    {
        return Inertia::render('Profile/Sejarah',  [
            // 'berita' => Berita::where('id', 12)->first()
        ]);
    }

    public function strukturOrganisasi(): Response
    {
        return Inertia::render('Profile/StrukturOrganisasi',  [
            // 'berita' => Berita::where('id', 12)->first()
        ]);
    }

    public function profilePimpinan(): Response
    {
        return Inertia::render('Profile/ProfilePimpinan', [
            // 'berita' => Berita::where('id', 12)->first()
        ]);
    }
}

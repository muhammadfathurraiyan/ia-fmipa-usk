<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BerandaController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Beranda', [
            'berita' => Berita::where('category', 'berita')->latest()->take(4)->get(),
        ]);
    }
}

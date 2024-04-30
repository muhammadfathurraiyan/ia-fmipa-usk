<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Berita;

class LayananController extends Controller
{
    public function index()
    {
        return redirect('/');
    }

    public function ult(): Response
    {
        return Inertia::render('Layanan/ULT');
    }

    public function loker(): Response
    {
        return Inertia::render('Layanan/Loker', [
            'berita'=>Berita::where('category', 'loker')->get()
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Layanan/Detail', [
            'berita' => Berita::where('id', $id)->first(),
        ]);
    }
}

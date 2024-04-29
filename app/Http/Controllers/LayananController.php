<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

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
        return Inertia::render('Layanan/Loker');
    }
}

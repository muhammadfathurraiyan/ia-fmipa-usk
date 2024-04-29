<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Berita/Berita', [
            'berita' => Berita::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       //   
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $berita = new Berita;
        $berita->title = $request->title;
        $berita->category = $request->category;
        $berita->image = $request->img;
        $berita->content = $request->content;

        $berita->save();

        return redirect(route('berita.index'));     
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Berita/Detail', [
            'berita' => Berita::where('id', $id)->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Berita $berita)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Berita::where('id', $request->id);
        $user->update(
            [
                'title' => $request->title,
                'category' => $request->category,
                'image' => $request->img,
                'content' => $request->content,
            ]
        );

        return redirect(route('berita.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Berita::where('id', $id)->first();
        $user->delete();
        return redirect(route('berita.index'));
    }
}

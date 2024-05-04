<?php

namespace App\Http\Controllers;

use App\Models\Database;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DatabaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Database/Database', [
            'data' => Database::latest()->get(),
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
        $database = new Database;
        $database->name = $request->name;
        $database->title = $request->title;
        $database->prodi = $request->prodi;
        $database->angkatan = $request->angkatan;
        $database->lulusan = $request->lulusan;
        $database->telepon = $request->telepon;
        $database->email = $request->email;
        $database->sosmed = $request->sosmed;
        $database->image = $request->img;
        $database->description = $request->description;

        $database->save();

        return redirect(route('database.index'));     
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Database/Detail', [
            'data' => Database::where('id', $id)->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Database $database)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Database $database)
    {
        $database = Database::where('id', $request->id);
        $database->update(
            [
                'name' => $request->name,
                'title' => $request->title,
                'prodi' => $request->prodi,
                'angkatan' => $request->angkatan,
                'lulusan' => $request->lulusan,
                'telepon' => $request->telepon,
                'email' => $request->email,
                'sosmed' => $request->sosmed,
                'image' => $request->img,
                'description' => $request->description,
            ]
        );

        return redirect(route('database.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $database = Database::where('id', $id)->first();
        $database->delete();
        return redirect(route('database.index'));
    }
}

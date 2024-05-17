<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [BerandaController::class, 'index'])->name('beranda');

Route::prefix('profile')->group(function(){ 
    Route::get('/', [ProfileController::class, 'index']);
    Route::get('/sejarah', [ProfileController::class, 'sejarah'])->name('sejarah');
    Route::get('/struktur-organisasi', [ProfileController::class, 'strukturOrganisasi'])->name('struktur-organisasi');
    Route::get('/profile-pimpinan', [ProfileController::class, 'profilePimpinan'])->name('profile-pimpinan');
});

Route::prefix('layanan')->group(function(){ 
    Route::get('/', [LayananController::class, 'index']);
    Route::get('/unit-layanan-terpadu', [LayananController::class, 'ult'])->name('ult');
    Route::get('/lowongan-pekerjaan', [LayananController::class, 'loker'])->name('loker');
    Route::get('/lowongan-pekerjaan/{id}', [LayananController::class, 'show'])->name('loker.show');
});

Route::get('/kontak', function () {
    return Inertia::render('Kontak', []);
})->name('kontak');
    
Route::get('/berita/{id}', [BeritaController::class, 'show'])->name('berita.show');
Route::get('berita', [BeritaController::class, 'index'])->name('berita.index');

Route::get('/database', [DatabaseController::class, 'index'])->name('database.index');
Route::get('/database/{id}', [DatabaseController::class, 'show'])->name('database.show');


Route::middleware('auth')->group(function () {
    Route::post('/database', [DatabaseController::class, 'store'])->name('database.store');
    Route::post('/database', [DatabaseController::class, 'import'])->name('database.import');
    Route::patch('/database', [DatabaseController::class, 'update'])->name('database.update');
    Route::delete('/database/delete/{id}', [DatabaseController::class, 'destroy'])->name('database.destroy');

    Route::post('/berita', [BeritaController::class, 'store'])->name('berita.store');
    Route::patch('/berita', [BeritaController::class, 'update'])->name('berita.update');
    Route::delete('/berita/delete/{id}', [BeritaController::class, 'destroy'])->name('berita.destroy');

    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    Route::post('/admin', [AdminController::class, 'store'])->name('admin.store');
    Route::patch('/admin', [AdminController::class, 'update'])->name('admin.update');
    Route::delete('/admin/delete/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');
});


require __DIR__.'/auth.php';

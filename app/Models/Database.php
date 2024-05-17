<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Database extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'npm',
        'title',
        'prodi',
        'angkatan',
        'lulusan',
        'telepon',
        'email',
        'instagram',
        'linkedin',
        'twitter',
        'other',
        'image',
        'description',
    ];
}

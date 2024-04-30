<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'sabirin',
            'email' => 'sabirin@usk.ac.id',
            'role' => 'super-admin',
            'password' => Hash::make('sabirin@usk.ac.id'),
        ]);
    }
}

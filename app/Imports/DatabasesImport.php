<?php

namespace App\Imports;

use App\Models\Database;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class DatabasesImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Database([
            'name' => $row["nama"],
            // 'npm' => $row[1],
            // 'title' => $row[2],
            'prodi' => $row["prodi"],
            'angkatan' => $row["angkatan"],
            // 'lulusan' => $row[5],
            // 'telepon' => $row[6],
            // 'email' => $row[7],
            // 'instagram' => $row[8],
            // 'linkedin' => $row[9],
            // 'twitter' => $row[10],
            // 'other' => $row[11],
            // 'image' => $row[12],
            // 'description' => $row[13],
        ]);
    }
}

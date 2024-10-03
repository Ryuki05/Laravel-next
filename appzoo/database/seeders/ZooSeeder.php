<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Zoo;

class ZooSeeder extends Seeder
{
    public function run()
    {
        // 10件のフェイクデータを生成
        Zoo::factory()->count(50)->create();
    }
}

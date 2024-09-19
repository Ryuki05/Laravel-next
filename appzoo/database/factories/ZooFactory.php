<?php

namespace Database\Factories;

use App\Models\Zoo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ZooFactory extends Factory
{
    protected $model = Zoo::class;

    public function definition()
    {
        return [
            'name' => $this->faker->company, // 会社名などのフェイクデータを生成
            'location' => $this->faker->city, // ランダムな都市名
            'description' => $this->faker->paragraph, // ランダムなパラグラフ
        ];
    }
}

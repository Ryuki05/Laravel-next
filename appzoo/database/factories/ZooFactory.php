<?php

namespace Database\Factories;

use App\Models\Zoo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ZooFactory extends Factory
{
    protected $model = Zoo::class;

    public function definition()
    {
        $faker = \Faker\Factory::create('ja_JP');
        return [
            'name' => $faker->company, // 会社名などのフェイクデータを生成
            'location' => $faker->city, // ランダムな都市名
            'description' => $faker->randomFloat(2,1,9999999), // ランダムなパラグラフ
        ];
    }
}

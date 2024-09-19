<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateZoosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zoos', function (Blueprint $table) {
            $table->bigIncrements('id'); // bigintのIDカラム
            $table->string('name'); // Zooの名前
            $table->string('location'); // Zooの所在地
            $table->text('description')->nullable(); // Zooの説明（任意）
            $table->timestamps(); // created_at と updated_at タイムスタンプ
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('zoos');
    }
}

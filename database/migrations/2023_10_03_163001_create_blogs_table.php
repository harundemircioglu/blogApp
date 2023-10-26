<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string("blogHeader");
            $table->string("blogInfo");
            $table->string("blogDetail");
            $table->string("blogImage")->nullable();
            $table->integer("blogLike")->nullable();
            $table->integer("blogView")->nullable();
            $table->integer("blogPopularity")->nullable();
            $table->integer("userId");
            $table->integer("topicId");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};

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
        Schema::create('semester_information', function (Blueprint $table) {
            $table->id();
            $table->string('start_of_prereg');
            $table->string('end_of_prereg');
            $table->string('start_of_semester');
            $table->string('end_of_semester');
            $table->boolean('open_pre_reg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('semester_information');
    }
};

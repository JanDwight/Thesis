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
        Schema::create('student_classes', function (Blueprint $table) {
            $table->id('student_class_id');
            $table->foreignId(\App\Models\student_profile::class, 'student_profile_id');
            $table->foreignId(\App\Models\classes::class, 'class_id');
            $table->integer('student_id');
            $table->string('class_year');
            $table->string('class_section');
            $table->string('semester');
            $table->string('class_code');
            $table->string('course_code');
            $table->string('course_title');
            $table->smallInteger('units');
            $table->string('course_type');
            $table->string('course_schedule');
            $table->string('instructor_name');
            $table->string('course_grade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_classes');
    }
};

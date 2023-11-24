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
        Schema::create('student_subject', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('studentprofile_id')->unsigned()->index(); // Use the custom foreign key name
            $table->bigInteger('class_id')->unsigned()->index(); // Use the custom foreign key name
            // Add any other columns you may need in this table
            $table->string('course_code'); // Adjust the data type accordingly
            $table->integer('units');
            $table->integer('grade'); //change data type based on what is needed
            $table->string('course_type')->default('n/a'); //back course (bc), advanced course (ac) or n/a

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subject_student');
    }
};

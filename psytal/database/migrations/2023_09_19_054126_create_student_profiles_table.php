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
        Schema::create('student_profiles', function (Blueprint $table) {
            $table->id('student_profile_id');
            $table->foreignId(\App\Models\User::class, 'user_id');
            $table->foreignId(\App\Models\emergency_contact::class, 'emergency_contact_id');
            $table->string('given_name');
            $table->string('family_name');
            $table->string('middle_name');
            $table->string('maiden_name')->nullable();
            $table->integer('student_id');
            $table->string('image');
            $table->year('start_of_school_year');
            $table->year('end_of_school_year');
            $table->string('class_year');
            $table->string('class_section');
            $table->string('semester');
            $table->integer('learners_reference_number');
            $table->string('degree');
            $table->string('major');
            $table->string('last_school_attended');
            $table->date('date_of_birth');
            $table->string('nationality');
            $table->string('home_address');
            $table->string('address_while_studying');
            $table->integer('contact_number');
            $table->string('email_address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_profiles');
    }
};

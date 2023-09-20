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
        Schema::create('emergency_contacts', function (Blueprint $table) {
            $table->id('emergency_contact_id');
            $table->foreignId(\App\Models\student_profile::class, 'student_profiles');
            $table->integer('student_id');
            $table->string('contact_name');
            $table->string('contact_address');
            $table->integer('contact_number');
            $table->string('contact_email');
            $table->string('relationship');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('emergency_contacts');
    }
};

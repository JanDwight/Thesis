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
        Schema::create('preregistration_incoming_tmps', function (Blueprint $table) {
            $table->id('student_profile_id');
            $table->integer('start_of_school_year');
            $table->integer('end_of_school_year');
            $table->bigInteger('student_school_id')->nullable();
            $table->bigInteger('learners_reference_number');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('maiden_name')->nullable();
            $table->string('academic_classification');
            $table->string('last_school_attended');
            $table->string('address_of_school_attended');
            $table->string('degree');
            $table->date('date_of_birth');
            $table->string('place_of_birth');
            $table->string('citizenship');
            $table->string('sex_at_birth');
            $table->string('ethnicity');
            $table->string('special_needs')->nullable();
            $table->bigInteger('contact_number');
            $table->string('email_address');
            $table->string('home_address');
            $table->string('address_while_studying');
            $table->string('contact_person_name');
            $table->bigInteger('contact_person_number');
            $table->string('contact_person_address');
            $table->string('contact_person_relationship');
            $table->string('section')->nullable();
            $table->integer('class_year')->nullable();
            $table->timestamps();
            $table->string('pre_reg_status')->nullable();
            $table->string('type_of_student')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('preregistration_incoming_tmps');
    }
};

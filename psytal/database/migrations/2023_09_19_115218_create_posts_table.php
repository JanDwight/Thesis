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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(); // Assuming a foreign key relationship with the 'users' table
            $table->string('title');
            $table->text('description'); // Changed to 'text' for longer descriptions
            $table->string('slug')->unique(); // Unique slug for each post
            $table->timestamps();
            $table->boolean('archived')->default(false);
        });

        // Create a new table for storing post images
        Schema::create('post_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained();
            $table->string('image_path');
            $table->timestamps();
            $table->boolean('archived')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_images');
        Schema::dropIfExists('posts');
    }
};

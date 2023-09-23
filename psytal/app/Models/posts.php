<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

    // Define the boot method to automatically set the user_id
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            if (auth()->check()) {
                $post->user_id = auth()->id();
            }
        });
    }
}

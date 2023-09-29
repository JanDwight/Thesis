<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

    // defaul id = user
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            if (auth()->check()) {
                $post->user_id = auth()->id();
            }

            // Generate a slug from the title
            $post->slug = Str::slug($post->title);
        });
    }
}

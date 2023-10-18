<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

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

    public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = Str::slug($value);
    }

    public function images()
    {
        return $this->hasMany(PostImage::class, 'post_id');
    }
}

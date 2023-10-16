<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['image_path'];

    public function post()
    {
        return $this->belongsTo(posts::class);
    }
}

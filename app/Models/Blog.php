<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = "blogs";

    protected $fillable = [
        'blogHeader',
        'blogDetail',
        'blogImage',
        'blogLike',
        'blogView',
        'blogPopularity',
        'userId',
        'topicId',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function topic()
    {
        return $this->belongsTo(Topic::class, 'topicId');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'blogId');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $table = "topics";

    protected $fillable = [
        'topicName',
        'topicPopularity',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'topicId');
    }
}

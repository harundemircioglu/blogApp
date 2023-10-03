<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new Comment());
    }
}

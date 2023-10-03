<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new Blog());
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new Blog());
    }

    function blogDetail($id)
    {
        $blog = Blog::find($id);

        return response()->json($blog);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new Topic());
    }
}

<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource("user", [UserController::class]); // USER CRUD

Route::resource("blog", [BlogController::class]); // BLOG CRUD

Route::resource("comment", [CommentController::class]); // COMMENT CRUD

Route::resource("topic", [TopicController::class]); // TOPIC CRUD

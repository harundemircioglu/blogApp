<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//AUTH SECTION

Route::post('login', [AuthController::class, 'login']); // USER LOGIN

Route::post('register', [AuthController::class, 'register']); // USER REGISTER

Route::post('logout', [AuthController::class, 'logout']); // USER LOGOUT

//BASE CRUD SECTION

Route::resource('user', UserController::class); // USER CRUD

Route::resource('blog', BlogController::class); // BLOG CRUD

Route::resource('comment', CommentController::class); // COMMENT CRUD

Route::resource('topic', TopicController::class); // TOPIC CRUD

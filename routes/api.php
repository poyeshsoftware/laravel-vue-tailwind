<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\FileController;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {

    Route::post('/sign-in', [AuthController::class, 'login']);

    Route::post('/sign-out', [AuthController::class, 'logout']);

    Route::any('/me', [AuthController::class, 'me'])->middleware('auth');

});


// protected rules
Route::middleware('auth')->group(function () {

    Route::get('/categories', [CategoryController::class, 'index'])->name('admin.categories');

    Route::post('/categories', [CategoryController::class, 'store']);

    Route::post('/categories/resort', [CategoryController::class, 'resort']);

    Route::post('/categories/update', [CategoryController::class, 'update']);

    Route::post('/categories/remove', [CategoryController::class, 'remove']);

    Route::get('/books', [BookController::class, 'index'])->name('admin.books');

    Route::post('/books', [BookController::class, 'store']);

    Route::post('/books/resort', [BookController::class, 'resort']);

    Route::post('/books/update', [BookController::class, 'update']);

    Route::post('/books/remove', [BookController::class, 'remove']);

//Route::get('/files/file-upload', [FileController::class, 'index']);

    Route::post('/files/image/file-upload', [FileController::class, 'storeImage']);

    Route::post('/files/image/file-upload/update', [FileController::class, 'updateImage']);

    Route::post('/files/image/file-upload/remove', [FileController::class, 'removeImage']);
});

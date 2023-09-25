<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PreregistrationIncomingTmpController;
use App\Http\Controllers\TmpPreregistrationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserIndexController;
use App\Http\Controllers\UpdateUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/adduser', [AuthController::class, 'adduser']);
    Route::post('/createposts', [PostController::class, 'createPost']);
    Route::get('/users', [UserIndexController::class, 'index']); //<><><> index users
    Route::put('/updateuser/{id}', [UpdateUserController::class, 'updateUser']); //<><><> update
    //delete
    
});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/preregincommingtmp', [PreregistrationIncomingTmpController::class, 'createTmpPreReg']);

<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\PreregistrationIncomingTmpController;
use App\Http\Controllers\TmpPreregistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinksController;

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
    
});

Route::post('/addlink', [LinksController::class, 'store']);
Route::get('/getlinks', [LinksController::class, 'getLinks']);
Route::post('/archivelink', [LinksController::class, 'archiveLink']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/preregincommingtmp', [PreregistrationIncomingTmpController::class, 'createTmpPreReg']);

Route::post('/addcurriculum', [CurriculumController::class, 'addCurriculum']);
Route::get('/getcurriculum', [CurriculumController::class, 'getCurriculum']);
Route::post('/archivecurriculum', [CurriculumController::class, 'archiveCurriculum']);
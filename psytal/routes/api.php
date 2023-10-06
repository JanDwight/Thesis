<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\LinksController;
use App\Http\Controllers\PreregistrationIncomingTmpController;
use App\Http\Controllers\TmpPreregistrationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserIndexController;
use App\Http\Controllers\UpdateUserController;
use App\Http\Controllers\ArchiveUserController;
use App\Http\Controllers\ClassIndexController;
use App\Http\Controllers\UpdateClassController;
use App\Http\Controllers\ArchiveClassesController;
use App\Http\Controllers\AddClassController;
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
    Route::post('/createposts', [PostController::class, 'createPosts']);
    Route::get('/posts', [PostController::class, 'getPosts']); 

    //manage users tab
    Route::post('/adduser', [AuthController::class, 'adduser']);
    Route::get('/users', [UserIndexController::class, 'index']); //<><><> index users
    Route::put('/updateuser/{id}', [UpdateUserController::class, 'updateUser']); //<><><> update user
    Route::put('/archiveuser/{id}', [ArchiveUserController::class, 'archiveUser']); //<><><> archive user
    //classes tab
    Route::post('/addclass', [AddClassController::class, 'addClass']); // <><><> add classes
    Route::get('/classes', [ClassIndexController::class, 'index']); //<><><> index classes
    Route::put('/updateclasses/{id}', [UpdateClassController::class],'updateClasses'); //<><><> update user
    Route::put('/archiveclasses/{id}', [ArchiveClassesController::class, 'archiveclasses']); //<><><> archive class
    //Routes for PreregistrationIncomingTmpController
    Route::get('/listpreregincoming', [PreregistrationIncomingTmpController::class, 'index']);
    Route::put('/preregcheck/{id}', [PreregistrationIncomingTmpController::class, 'update']);
    
    Route::post('/addcurriculum', [CurriculumController::class, 'addCurriculum']);
});

Route::post('/addlink', [LinksController::class, 'addLink']);
Route::get('/getlinks', [LinksController::class, 'getLinks']);
Route::post('/archivelink', [LinksController::class, 'archiveLink']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/preregincommingtmp', [PreregistrationIncomingTmpController::class, 'createIncomingPreReg']);
Route::post('/preregcontinuingtmp', [PreregistrationIncomingTmpController::class, 'createContinuingPreReg']);

Route::get('/getcurriculum', [CurriculumController::class, 'getCurriculum']);
Route::put('/archivecurriculum/{id}', [CurriculumController::class, 'archiveCurriculum']);
Route::post('/archivecurriculum', [CurriculumController::class, 'archiveCurriculum']);
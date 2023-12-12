<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\EmailDomainsController;
use App\Http\Controllers\LinksController;
use App\Http\Controllers\PreregistrationIncomingTmpController;
use App\Http\Controllers\StudentProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UpdateLinksController;
use App\Http\Controllers\LogsController;
use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\AttachSubjectController; //<><><>
use App\Http\Controllers\SendStudentAccountPasswordController;
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

    //Email Domains
    Route::post('/addemaildomains', [EmailDomainsController::class, 'addEmailDomain']);
    Route::get('/emaildomainindex', [EmailDomainsController::class, 'index']);
    
    Route::post('/createposts', [PostController::class, 'createPosts']);
    Route::get('/posts', [PostController::class, 'getPosts']); 
    Route::put('/posts/{postId}', [PostController::class, 'update']);
    Route::put('/posts/archive/{postId}', [PostController::class, 'archive']);

    //manage users tab
    Route::post('/adduser', [AuthController::class, 'adduser']);
    Route::get('/users', [UserController::class, 'index']); //<><><> index users
    Route::put('/updateuser/{id}', [UserController::class, 'updateUser']); //<><><> update user
    Route::put('/archiveuser/{id}', [UserController::class, 'archiveUser']); //<><><> archive user
    Route::get('/getuserdetails', [AuthController::class, 'getuserdetails']);

    //classes tab
    Route::post('/addclass', [ClassesController::class, 'addClass']); // <><><> add classes
    Route::get('/classes', [ClassesController::class, 'index']); //<><><> index classes
    Route::put('/updateclasses/{id}', [ClassesController::class, 'updateClasses']); //<><><> update user
    Route::put('/archiveclasses/{id}', [ClassesController::class, 'archiveclasses']); //<><><> archive class

    //edit/add class modal
    Route::get('/show_instructors', [UserController::class, 'show_instructors']); //<><><><><><><>
    Route::get('/show_curriculum', [CurriculumController::class, 'show_curriculum']); //<><><><><><><>
    Route::get('/get_selected/{id}', [CurriculumController::class, 'get_selected']); //<><><><><><><>

    //dashboard tab
    Route::get('/show_logs', [LogsController::class, 'index']); //<><><> show for logs
    Route::get('/show_archives', [ArchiveController::class, 'index']); //<><><> show for archives
    Route::post('/return_archives', [ArchiveController::class, 'returnArchive']);//<><><> archive restore
    Route::post('/backup_archives', [ArchiveController::class, 'backupArchive']);//<><><> archive delete but store to file
    Route::get('/count_posts', [PostController::class, 'count_posts']); //<><><> counting posts
    Route::get('/count_students', [UserController::class, 'count_students']); //<><><> count students from users table
    Route::get('/count_employee', [UserController::class, 'count_employee']); //<><><> count employees from users table

    ////Routes for Pre-Registration Checking
    Route::post('/preregcontinuingtmp', [PreregistrationIncomingTmpController::class, 'createContinuingPreReg']);

    //Routes for Pre-Registration Checking
    Route::get('/listpreregincoming', [PreregistrationIncomingTmpController::class, 'index']);
    Route::put('/preregcheck/{id}', [PreregistrationIncomingTmpController::class, 'update']);
    Route::post('/createstudentprofile', [StudentProfileController::class, 'create']);

    //pre-reg courses to be enrolled + section
    Route::get('/show_classes', [ClassesController::class, 'index']); //<><><> show for logs

    //pre-reg attach subjects to student
    Route::post('/student_subject', [AttachSubjectController::class, 'attachSubjectToStudent']);
    
    //curriculum tab
    Route::post('/addcurriculum', [CurriculumController::class, 'addCurriculum']);
    Route::get('/getcurriculum', [CurriculumController::class, 'getCurriculum']);
    Route::put('/updatecurriculum/{id}', [CurriculumController::class, 'updateCurriculum']);
    Route::put('/archivecurriculum/{id}', [CurriculumController::class, 'archiveCurriculum']); 

    //Routes for LinksController //moved to authenticate to avoid errors in archive, archive restore, and archive delete
    Route::post('/addlink', [LinksController::class, 'addLink']);
    Route::get('/getlinks', [LinksController::class, 'getLinks']);
    Route::put('/archivelink/{id}', [LinksController::class, 'archiveLink']);
    Route::put('/updatelink/{id}', [LinksController::class, 'updateLink']);

    //Routes for Sending Emails
    Route::get('/sendstudentaccountpassword', [SendStudentAccountPasswordController::class,'sendstudentaccountpassword']);
});
   

Route::post('/login', [AuthController::class, 'login']);

//Routes for Pre-Registration Form submition
Route::post('/preregincommingtmp', [PreregistrationIncomingTmpController::class, 'createIncomingPreReg']);

//Forgot Password
Route::get('/forgotpasswordsendemail', [SendStudentAccountPasswordController::class,'forgotpasswordsendemail']);
Route::put('/changepassword', [UserController::class,'changepassword']);
Route::get('/sendnewpassword', [SendStudentAccountPasswordController::class,'sendnewpassword']);

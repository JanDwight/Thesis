<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\LinksController;
use App\Http\Controllers\PreregistrationIncomingTmpController;
use App\Http\Controllers\StudentProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UpdateLinksController;
use App\Http\Controllers\LogsController;
use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClassesController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/createposts', [PostController::class, 'createPosts']);
    Route::get('/posts', [PostController::class, 'getPosts']);

    // Manage users tab
    Route::post('/adduser', [AuthController::class, 'addUser']); // Use 'addUser' instead of 'adduser'
    Route::get('/users', [UserController::class, 'index']);
    Route::put('/updateuser/{id}', [UserController::class, 'updateUser']);
    Route::put('/archiveuser/{id}', [UserController::class, 'archiveUser']);
    Route::get('/getuserdetails', [AuthController::class, 'getUserDetails']); // Use 'getUserDetails' instead of 'getuserdetails'

    //classes tab
    Route::post('/addclass', [ClassesController::class, 'addClass']); // <><><> add classes
    Route::get('/classes', [ClassesController::class, 'index']); //<><><> index classes
    Route::put('/updateclasses/{id}', [ClassesController::class, 'updateClasses']); //<><><> update user
    Route::put('/archiveclasses/{id}', [ClassesController::class, 'archiveclasses']); //<><><> archive class

    //edit class modal
    Route::get('/show_instructors', [UserController::class, 'show_instructors']); //<><><><><><><>

    //dashboard tab
    Route::get('/show_logs', [LogsController::class, 'index']); //<><><> show for logs
    Route::get('/show_archives', [ArchiveController::class, 'index']); //<><><> show for archives
    Route::post('/return_archives', [ArchiveController::class, 'returnArchive']);//<><><> archive restore
    Route::post('/delete_archives', [ArchiveController::class, 'deleteArchive']);//<><><> archive delete [permanent]
    //Route::get('/posts', [PostController::class, 'index']); //<><><> index for posts (unused but don't delete)
    Route::get('/count_posts', [PostController::class, 'count_posts']); //<><><> counting posts
    Route::get('/count_students', [UserController::class, 'count_students']); //<><><> count students from users table
    Route::get('/count_employee', [UserController::class, 'count_employee']); //<><><> count employees from users table
    // Classes tab
    Route::post('/addclass', [ClassesController::class, 'addClass']);
    Route::get('/classes', [ClassesController::class, 'index']); 
    Route::put('/updateclasses/{id}', [ClassesController::class, 'updateClasses']);
    Route::put('/archiveclasses/{id}', [ClassesController::class, 'archiveClasses']);

    // Dashboard tab
    Route::get('/show_logs', [LogsController::class, 'index']);
    Route::get('/show_archives', [ArchiveController::class, 'index']);
    Route::post('/return_archives', [ArchiveController::class, 'returnArchive']);
    Route::post('/delete_archives', [ArchiveController::class, 'deleteArchive']);
    Route::get('/count_posts', [PostController::class, 'countPosts']); // Use 'countPosts' instead of 'count_posts'
    Route::get('/count_students', [UserController::class, 'countStudents']); // Use 'countStudents' instead of 'count_students'
    Route::get('/count_employee', [UserController::class, 'countEmployee']); // Use 'countEmployee' instead of 'count_employee'

    // Routes for Pre-Registration Checking
    Route::get('/listpreregincoming', [PreregistrationIncomingTmpController::class, 'index']);
    Route::put('/preregcheck/{id}', [PreregistrationIncomingTmpController::class, 'update']);
    Route::post('/createstudentprofile', [StudentProfileController::class, 'create']);

    // Curriculum tab
    Route::post('/addcurriculum', [CurriculumController::class, 'addCurriculum']);
    Route::get('/getcurriculum', [CurriculumController::class, 'getCurriculum']);
    Route::put('/updatecurriculum/{id}', [CurriculumController::class, 'updateCurriculum']);
    Route::put('/archivecurriculum/{id}', [CurriculumController::class, 'archiveCurriculum']);

    // Routes for LinksController (moved to 'authenticate' to avoid errors in archive, archive restore, and archive delete)
    Route::post('/addlink', [LinksController::class, 'addLink']);
    Route::get('/getlinks', [LinksController::class, 'getLinks']);
    Route::put('/archivelink/{id}', [LinksController::class, 'archiveLink']);
    Route::put('/updatelink/{id}', [LinksController::class, 'updateLink']);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/preregincommingtmp', [PreregistrationIncomingTmpController::class, 'createIncomingPreReg']);
Route::post('/preregcontinuingtmp', [PreregistrationIncomingTmpController::class, 'createContinuingPreReg']);

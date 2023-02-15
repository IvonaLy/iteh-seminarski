<?php

use App\Http\Controllers\AutfController;
use App\Http\Controllers\DogadjajController;
use App\Http\Controllers\KartaController;
use App\Http\Controllers\MestoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




 Route::get("/dogadjaji",[DogadjajController::class,'index']);
 Route::get("/dogadjaji/{id}",[DogadjajController::class,'show']);




 Route::post("/register",[AutfController::class,'register']);
 Route::post("/login",[AutfController::class,'login']);

 Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get("/karte",[KartaController::class,'index']);
    Route::get("/karte",[KartaController::class,'index']);


    Route::get("/mesto",[MestoController::class,'index']);
    Route::get("/mesto/{id}",[MestoController::class,'show']);
    Route::post("/logout",[AutfController::class,'logout']);

});


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){ //ako je ulogovan admin



    Route::post("/dogadjaji",[DogadjajController::class,'store']);
    Route::put("/dogadjaji/{id}",[DogadjajController::class,'update']);
    Route::delete("/dogadjaji/{id}",[DogadjajController::class,'destroy']);
    Route::post("/logout",[AutfController::class,'logout']);



});

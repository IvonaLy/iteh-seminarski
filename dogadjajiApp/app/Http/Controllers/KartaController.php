<?php

namespace App\Http\Controllers;

use App\Http\Resources\KartaResource;
use App\Models\Karta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KartaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return KartaResource::collection(Karta::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            
            'dogadjaj_id'=>'required|integer|exists:dogadjajs,id',
            'user_id'=>'required|integer|exists:users,id',
        

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Karta::create([
            'dogadjaj_id' => $request->dogadjaj_id, 
            'user_id' => $request->user_id, 
        

        ]);
        $d->save();
        return response()->json([' kreirano!', $d]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Karta  $karta
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return new KartaResource(Karta::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Karta  $karta
     * @return \Illuminate\Http\Response
     */
    public function edit(Karta $karta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Karta  $karta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Karta $karta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Karta  $karta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Karta $karta)
    {
        //
    }
}

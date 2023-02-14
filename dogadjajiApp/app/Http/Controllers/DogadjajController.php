<?php

namespace App\Http\Controllers;

use App\Models\Dogadjaj;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DogadjajController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Dogadjaj::all();
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
            'naziv' => 'required|string|max:100',
            'vreme' => 'required|string', 
            'datum' => 'required|string',
            'kategorija_id'=>'required',
            'mesto_id'=>'required',
             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Dogadjaj::create([
            'naziv' => $request->naziv, 
            'vreme' => $request->vreme, 
            'datum' => $request->datum,
            'kategorija_id' => $request->kategorija_id,
            'mesto_id' => $request->mesto_id,  
        ]);
        $d->save();
        return response()->json(['Dogadjaj kreiran!', $d]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dogadjaj  $dogadjaj
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Dogadjaj::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dogadjaj  $dogadjaj
     * @return \Illuminate\Http\Response
     */
    public function edit(Dogadjaj $dogadjaj)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dogadjaj  $dogadjaj
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'string|max:100',
            'vreme' => 'string', 
            'datum' => 'string',
            'kategorija_id'=>'',
            'mesto_id'=>'',
           
             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Dogadjaj::find($id);

        if( $d){
            $d->naziv=$request->naziv;
            $d->vreme=$request->vreme;
            $d->datum=$request->datum;
            $d->kategorija_id=$request->kategorija_id;
            $d->mesto_id=$request->mesto_id; 

            $d->save();
            return response()->json(['Uspesno izmenjeno!',  $d]);

        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dogadjaj  $dogadjaj
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $d = Dogadjaj::find($id);
        if($d){
            $d->delete();
            return response()->json(['Uspesno obrisano!', $d]);
        
        }
           
       return response()->json('Trazeni objekat ne postoji u bazi');
    }
}

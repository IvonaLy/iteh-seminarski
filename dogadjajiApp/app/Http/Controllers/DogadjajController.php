<?php

namespace App\Http\Controllers;

use App\Http\Resources\DogadjajResource;
use App\Models\Dogadjaj;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;
class DogadjajController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DogadjajResource::collection(Dogadjaj::all());
    }

    public function indexNas()
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer WQP3XGV66PP6FM26EHFV' 
        ])->get('https://www.eventbriteapi.com/v3/events/551359951457',[
            
        ]);
        return $response->json();
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
            'kategorija_id'=>'required|integer|exists:kategorijas,id',
            'mesto_id'=>'required|integer|exists:mestos,id',
             
            'slika' => 'required|string', 

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Dogadjaj::create([
            'naziv' => $request->naziv, 
            'vreme' => $request->vreme, 
            'datum' => $request->datum,
            'omiljen' =>0,
            'kategorija_id' => $request->kategorija_id,
            'mesto_id' => $request->mesto_id,  
           
            'slika' => $request->slika,  

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
        return new DogadjajResource(Dogadjaj::find($id));
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
            'naziv' => 'required|string|max:100',
            'vreme' => 'required|string', 
            'datum' => 'required|string',
            'kategorija_id'=>'required|integer|exists:kategorijas,id',
            'mesto_id'=>'required|integer|exists:mestos,id',
         
            'slika' => 'required|string', 

             
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
            
            $d->slika=$request->slika; 
             
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

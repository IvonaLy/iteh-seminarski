<?php

namespace App\Http\Resources;

use App\Models\Dogadjaj;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class KartaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return   
        [    'id' => $this->resource->id,
         
             
            'dogadjaj' => new DogadjajResource(Dogadjaj::find($this->resource->dogadjaj_id)),
          
            'user' => User::find($this->resource->user_id), 
       

            
        ];
    }
}

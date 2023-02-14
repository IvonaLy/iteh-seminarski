<?php

namespace App\Http\Resources;

use App\Models\Kategorija;
use App\Models\Mesto;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class DogadjajResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'vreme' => $this->resource->vreme,
            'datum' => $this->resource->datum,
            'kategorija' => Kategorija::find($this->resource->kategorija_id),
            'mesto' => Mesto::find($this->resource->mesto_id),
            'user' => User::find($this->resource->user_id), 
            'slika' => $this->resource->slika,
            'omiljen' => $this->resource->omiljen,

            
        ];
    }
}

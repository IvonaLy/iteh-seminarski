<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dogadjaj extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'naziv',
        'vreme',
        'datum',
        'kategorija_id',
        'mesto_id',
        'user_id',
        'slika'
    ];

    public function mesto()
    {
        return $this->belongsTo(Mesto::class);
    }
    public function kategorija()
    {
        return $this->belongsTo(Kategorija::class);
    }

}

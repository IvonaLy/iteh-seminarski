<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mesto extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'naziv_mesta',
        'kapacitet', 
        'adresa'
    ];
    public function dogadjaj()
    {
        return $this->hasMany(Dogadjaj::class);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Mesto;
use Illuminate\Database\Seeder;

class MestoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $m1 = new Mesto();
         $m1->naziv_mesta="Institut Servantes";
         $m1->kapacitet=100;
         $m1->adresa="Čika-Ljubina 19";
         $m1->save();

         $m1 = new Mesto();
         $m1->naziv_mesta="Galerija Haos";
         $m1->kapacitet=50;
         $m1->adresa="Dositejeva 3";
         $m1->save();


         $m1 = new Mesto();
         $m1->naziv_mesta="Savski park";
         $m1->kapacitet=55;
         $m1->adresa="Savski park";
         $m1->save();


         $m1 = new Mesto();
         $m1->naziv_mesta="Institut za transfuziju krvi";
         $m1->kapacitet=15;
         $m1->adresa="Svetog Save 39";
         $m1->save();

         $m1 = new Mesto();
         $m1->naziv_mesta="Stark arena";
         $m1->kapacitet=20000;
         $m1->adresa="Bulevar Arsenija Carnojevica 58";
         $m1->save();

    }
}

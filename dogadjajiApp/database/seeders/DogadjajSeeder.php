<?php

namespace Database\Seeders;

use App\Models\Dogadjaj;
use Illuminate\Database\Seeder;

class DogadjajSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $d1 = new Dogadjaj();
        $d1->naziv="Benito Roman";
        $d1->vreme="10:00";
        $d1->datum="2023-02-20";
        $d1->kategorija_id=5;
       
        $d1->mesto_id=1;
        $d1->slika="https://belgrade-beat.rs/photos/activities/3353/t-1669822980.jpg";
        $d1->save();


        $d1 = new Dogadjaj();
        $d1->naziv="Radovi na papiru";
        $d1->vreme="12:00";
        $d1->datum="2023-02-20";
        $d1->kategorija_id=4;
       
        $d1->mesto_id=1;
        $d1->slika="https://belgrade-beat.rs/photos/activities/3426/t-1673982062.jpg";
        $d1->save();

        $d1 = new Dogadjaj();
        $d1->naziv="Ledeno carstvo";
        $d1->vreme="14:00";
        $d1->datum="2023-02-20";
        $d1->kategorija_id=3;
      
        $d1->mesto_id=3;
        $d1->slika="https://belgrade-beat.rs/photos/activities/3445/t-1674316371.jpg";
        $d1->save();


        $d1 = new Dogadjaj();
        $d1->naziv="Dajte krv";
        $d1->vreme="8:00";
        $d1->datum="2023-02-20";
        $d1->kategorija_id=4;
      
        $d1->mesto_id=4;
        $d1->slika="https://belgrade-beat.rs/photos/activities/2380/t-1580465238.jpg";
        $d1->save();


        $d1 = new Dogadjaj();
        $d1->naziv="MMA spektakl";
        $d1->vreme="Ceo dan";
        $d1->datum="2023-02-15";
        $d1->kategorija_id=6;
       
        $d1->mesto_id=5;
        $d1->slika="https://belgrade-beat.rs/photos/activities/3453/t-1676045368.jpg";
        $d1->save();






    }
     
}

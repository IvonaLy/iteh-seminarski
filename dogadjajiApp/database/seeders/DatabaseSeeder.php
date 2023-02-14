<?php

namespace Database\Seeders;

use App\Models\Dogadjaj;
use App\Models\Kategorija;
use App\Models\Mesto;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::truncate();
        Dogadjaj::truncate();
        Kategorija::truncate();
        Mesto::truncate();
        


        User::factory(10)->create();

        (new KategorijaSeeder())->run();
        (new MestoSeeder())->run();
        (new DogadjajSeeder())->run();

    }
}

<?php

namespace Database\Seeders;

use App\Models\Dogadjaj;
use App\Models\Kategorija;
use App\Models\Mesto;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
        $user = User::create([
            'name' => 'pera', 
            'email' => 'pera@gmail.com', 
            'password' => Hash::make('pera')]);

            $user = User::create([
                'name' => 'admin', 
                'email' => 'admin@gmail.com', 
                'admin' => 1, 
                'password' => Hash::make('admin')]);

        (new KategorijaSeeder())->run();
        (new MestoSeeder())->run();
        (new DogadjajSeeder())->run();
        (new KartaSeeder())->run();

    }
}

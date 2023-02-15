<?php

namespace Database\Seeders;

use App\Models\Karta;
use Illuminate\Database\Seeder;

class KartaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Karta::factory(10)->create();
        
    }
}

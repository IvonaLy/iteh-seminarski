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
        Mesto::factory(5)->create();
    }
}

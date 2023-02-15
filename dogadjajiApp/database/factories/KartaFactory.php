<?php

namespace Database\Factories;

use App\Models\Dogadjaj;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class KartaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => random_int(1,User::count()),
            'dogadjaj_id' => random_int(1,Dogadjaj::count()),
          
        ];
    }
}

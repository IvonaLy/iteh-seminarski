<?php

namespace Database\Factories;

use App\Models\Kategorija;
use App\Models\Mesto;
use Illuminate\Database\Eloquent\Factories\Factory;

class DogadjajFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'naziv' => $this->faker->unique()->word(),
            'vreme' => $this->faker->time($format = 'H:i', $max = 'now') ,
            'datum' => $this->faker->date($format = 'Y-m-d', $max = 'now') ,
            'kategorija_id' => $this->faker->numberBetween($min = 1, $max = Kategorija::count()) ,
            'mesto_id' =>  $this->faker->numberBetween($min = 1, $max = Mesto::count()) ,

            
        ];
    }
}

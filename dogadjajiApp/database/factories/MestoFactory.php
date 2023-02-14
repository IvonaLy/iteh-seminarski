<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MestoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'naziv_mesta' => $this->faker->unique()->word(),
            'kapacitet' => $this->faker->numberBetween($min = 50, $max = 30000) ,
            'adresa' => $this->faker->address(),
            
        ];
    }
}

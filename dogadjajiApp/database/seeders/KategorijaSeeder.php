<?php

namespace Database\Seeders;

use App\Models\Kategorija;
use Illuminate\Database\Seeder;

class KategorijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $k1=new Kategorija();
        $k1->naziv="Zabava";
        $k1->save();

        $k2=new Kategorija();
        $k2->naziv="Koncert";
        $k2->save();

        $k3=new Kategorija();
        $k3->naziv="Za decu";
        $k3->save();

        $k4=new Kategorija();
        $k4->naziv="Aktivnost i dozivljaj";
        $k4->save();
    }
}

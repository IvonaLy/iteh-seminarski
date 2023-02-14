<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PreimenujKolonuNaziv extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mestos', function (Blueprint $table) {
           
            $table->renameColumn('naziv','naziv_mesta');
           
             
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mestos', function (Blueprint $table) {
           
            $table->renameColumn('naziv_mesta','naziv'); 
        });
    }
}

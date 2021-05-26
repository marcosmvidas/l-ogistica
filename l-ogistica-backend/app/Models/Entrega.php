<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entrega extends Model
{
    protected $fillable = [
        'cliente', 
        'dta_entrega', 
        'end_origem', 
        'end_destino',
        'lat_origem',
        'lng_origem',
        'lat_destino',
        'lng_destino',
        'status'
    ];
}

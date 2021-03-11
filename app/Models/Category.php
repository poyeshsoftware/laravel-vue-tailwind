<?php

namespace App\Models;

use App\Models\Traits\IsOrderable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use IsOrderable;

    protected $fillable = ['name','image', 'order_num'];
}

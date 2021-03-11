<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait IsOrderable
{
    public function scopeOrdered(Builder $builder, $column = 'order_num', $direction = 'asc')
    {
        $builder->orderBy($column, $direction);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    protected $guarded = [
        'id', 'created_at', 'updated_at'
    ];

    public function Order(){
        $this->hasOne(Order::class,'subId','id');
    }
}

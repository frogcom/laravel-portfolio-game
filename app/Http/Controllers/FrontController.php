<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{
    //
    public function Index()
    {
        $index = view('welcome');
        $index->test = 'aaaaa';

        return $index;
    }
    public function camera()
    {
        return view('camera');
    }
}

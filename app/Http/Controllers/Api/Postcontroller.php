<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;


class Postcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()

    {
        
        



        //modo senza la paginate
       // $posts = Post::with(['category','tags'])->get();
       $posts = Post::with(['category','tags'])->paginate(2);


        return response()->json([
                                    'success'=>true,
                                    'results'=>$posts
                                 ]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

}
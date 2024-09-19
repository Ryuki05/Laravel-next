<?php

namespace App\Http\Controllers;

use App\Models\Zoo;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreZooRequest;
use App\Http\Requests\UpdateZooRequest;

class ZooController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreZooRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Zoo $zoo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Zoo $zoo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateZooRequest $request, Zoo $zoo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Zoo $zoo)
    {
        //
    }
}

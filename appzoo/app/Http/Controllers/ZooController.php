<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Zoo;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreZooRequest;
use App\Http\Requests\UpdateZooRequest;

class ZooController extends Controller
{
    public function index()
    {
        $animals = Zoo::all();
        return response()->json($animals);
    }

    public function create()
    {
        return response()->json(['message' => 'Ready to create a new zoo']);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        $zoo = Zoo::create($validatedData);
        return response()->json($zoo, 201);
    }

    public function show($id)
    {
        $zoo = Zoo::findOrFail($id); // Zooを取得、見つからない場合は404エラーを返す
        return response()->json($zoo);
    }

    public function edit($id)
    {
        $zoo = Zoo::findOrFail($id);
        return response()->json($zoo);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        $zoo = Zoo::findOrFail($id);
        $zoo->update($validatedData);
        return response()->json($zoo);
    }

    public function destroy($id)
    {
        $zoo = Zoo::findOrFail($id);
        $zoo->delete();
        return response()->json($zoo); //202 No Content
    }
}

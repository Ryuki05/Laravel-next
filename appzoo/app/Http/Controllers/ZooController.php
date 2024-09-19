<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
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
        //inndexは一覧取得するメソッド
        //Zooはモデル名
        $animals = Zoo::all();

        //json形式で$animalsをレスポンス
        return response()->json($animals);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //Apiの場合特に何も返さないことが多い
        return response()->json(['message' => 'Ready to create a new zoo']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreZooRequest $request)
    {
        //バリデーション
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        //新しいZooを作成して保存
        $zoo = Zoo::create($validatedData);

        //成功した場合のレスポンス
        return response()->json($zoo,201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $zoo = Zoo::findOrFail($id);

        return response()->json($zoo);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $zoo = Zoo::findOrFail($id); //リソースが見つからない場合は404エラーを返す

        return response()->json($zoo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //バリデーション
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        $zoo = Zoo::findOrFail($id); //リソースが見つからない場合は404エラーを返す
        $zoo->update($validatedData);

        return response()->json($zoo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $zoo = Zoo::findOrFail($id); //リソースが見つからない場合は404エラーを返す
        $zoo->delete(); //データを削除

        return response()->json($zoo); //202 No Content
    }
}

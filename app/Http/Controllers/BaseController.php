<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return $this->model->all();
    }

    public function show($id)
    {
        return $this->model->find($id);
    }

    public function store(Request $request)
    {
        return $this->model->create($request->all());
    }

    public function update(Request $request, $id)
    {
        $item = $this->model->find($id);
        $item->update($request->all());

        return $item;
    }

    public function destroy($id)
    {
        $item = $this->model->find($id);
        $item->delete();

        return response()->json(['message' => 'Item deleted'], 204);
    }
}

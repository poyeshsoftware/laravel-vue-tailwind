<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{

    public function __construct()
    {
        //$this->middleware('admin');
    }

    public function index()
    {
        return CategoryResource::collection(Category::ordered()->get());
    }

    public function store(CategoryRequest $request)
    {
        if ($request->image == null) {
            $request->image = "";
        }

        $new_eq = Category::create($request->validated());

        $new_eq->order_num = $new_eq->id;
        $new_eq->save();

        return new CategoryResource($new_eq);
    }

    public function resort(Request $request, Category $category)
    {
        $rules = [
            'id' => 'required|integer',
            'order_num' => 'required|integer',
        ];

        $data = json_decode($request->getContent(), true);
        $eq = Category::all();
        foreach ($data as $item) {
            $validator = Validator::make($item, $rules);
            if ($validator->passes()) {
                $update_eq = $eq->where('id', $item['id'])->first();
                if ($update_eq) {
                    $update_eq->order_num = $item['order_num'];
                    $update_eq->save();
                }

            }
        }

        return CategoryResource::collection($category->ordered()->get());
    }

    public function update(CategoryRequest $request)
    {
        if ($request->image == null) {
            $request->image = "";
        }

        $eq = Category::find($request->id);
        if ($eq) {
            $eq->image = trim($request->image);
            $eq->name = $request->name;
            $eq->save();
            return new CategoryResource($eq);
        }
    }

    public function remove(Request $request)
    {
        $this->validate($request, [
            'id' => 'required|integer',
        ]);

        $eq = Category::find($request->id);
        if ($eq) {
            $eq->delete();
            return new CategoryResource($eq);
        }
    }
}

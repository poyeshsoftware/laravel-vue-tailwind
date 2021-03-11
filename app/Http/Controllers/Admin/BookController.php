<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{

    public function __construct()
    {
        //$this->middleware('admin');
    }

    public function index(Book $book)
    {
        return BookResource::collection($book->ordered()->get());
    }

    public function store(BookRequest $request)
    {
        $new_book = Book::create($request->validated());

        $new_book->order_num = $new_book->id;
        $new_book->save();

        return new BookResource($new_book);
    }

    public function resort(Request $request, Book $book)
    {
        $rules = [
            'id' => 'required|integer',
            'order_num' => 'required|integer',
        ];

        $data = json_decode($request->getContent(), true);
        $books = Book::all();
        foreach ($data as $item) {

            $validator = Validator::make($item, $rules);

            if ($validator->passes()) {

                $update_eq = $books->where('id', $item['id'])->first();

                if ($update_eq) {

                    $update_eq->order_num = $item['order_num'];
                    $update_eq->save();
                }

            }
        }

        return BookResource::collection($book->ordered()->get());
    }

    public function update(BookRequest $request)
    {
        if ($request->image == null) {
            $request->image = "";
        }

        $book = Book::find($request->id);

        if ($book) {

            $book->name = $request->name;
            $book->image = trim($request->image);
            $book->save();

            return new BookResource($book);
        }
    }

    public function remove(Request $request)
    {
        $this->validate($request, [
            'id' => 'required|integer',
        ]);

        $book = Book::find($request->id);

        if ($book) {

            $book->delete();

            return new BookResource($book);
        }
    }
}

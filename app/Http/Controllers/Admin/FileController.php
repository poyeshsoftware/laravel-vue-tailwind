<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\FileSetting;
use App\Http\Controllers\Controller;
use App\Http\Requests\ImageRequest;
use App\Http\Resources\FileResource;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{

    public function index(Request $request)
    {

    }

    public function storeImage(ImageRequest $request)
    {
        if (!($request->from == FileSetting::SRC_BOOKS ||
            $request->from == FileSetting::SRC_CATEGORIES)) {
            return response()->json(['error' => "file source does not exist !"], 400);
        }

        $files = [];
        if ($request->hasfile('image')) {
            $counter = 0;
            foreach ($request->file('image') as $file) {
                $imageName = time() . md5($file->getClientOriginalName())
                    . '.' . $file->getClientOriginalExtension();

                $src = $file->storeAs(trim(strtolower($request->from)), $imageName);

                $newFile = File::create([
                    'type' => 'image',
                    'name' => ($counter > 0) ? $request->name . ' ' . $counter : $request->name,
                    'src' => $src,
                ]);

                $newFile->save();
                $counter++;
                $files[] = $newFile;
            }
        }
        return FileResource::collection(collect($files));
    }

    public function updateImage(Request $request)
    {

    }

    public function removeImage(Request $request)
    {

    }
}

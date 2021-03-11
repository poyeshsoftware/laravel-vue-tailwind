<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExerciseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|integer',
            'type' => 'required|integer',
            'difficulty' => 'required|integer',
            'calc_type' => 'required|integer',
            'order_num' => 'integer',
            'update_num' => 'integer',
            'exercise_names.*' => 'string',
            'exercise_images.*' => 'string',
            'exercise_videos.*' => 'string',
            'exercise_info.*' => 'string',
            'primaryMuscles.*' => 'integer',
            'secondaryMuscles.*' => 'integer',
            'otherMuscles.*' => 'integer',
            'exercise_equipment.*' => 'integer',
            'imageCustomization' => 'nullable|boolean',
            'imageSplitOrientation' => 'nullable|integer',
            'imageEqualSplitNumber' => 'nullable|integer',
        ];
    }
}

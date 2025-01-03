import { Category, ICategoryListAPI } from '@/domain/interfaces/category.api.interface';
import { initialState } from './../../slices/categories/categories.slice';
import { PayloadAction } from "@reduxjs/toolkit";  

export function GET_CATEGORIES_SUCCESS_REDUCER(state: ICategoryListAPI, action: PayloadAction<Category[]>) {
    const result = {
        ...state,
        categories: action.payload
    };

    return result;
}

export function GET_CATEGORY_FAIL_REDUCER(state: ICategoryListAPI) {
    return {
        ...state,
        categories: initialState.categories
    };
}
  
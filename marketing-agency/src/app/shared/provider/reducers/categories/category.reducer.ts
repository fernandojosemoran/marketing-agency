import { Category, ICategoryListAPI } from '@/domain/interfaces/category.api.interface';
import { PayloadAction } from "@reduxjs/toolkit";  

export function GET_CATEGORIES_SUCCESS_REDUCER(state: ICategoryListAPI, action: PayloadAction<Category[]>) {
    return {
        ...state,
        categories: action.payload
    };
}

export function GET_CATEGORY_FAIL_REDUCER(state: ICategoryListAPI, action: PayloadAction<[]>) {
    return {
        ...state,
        categories: action.payload
    };
}
  
import { createSlice } from '@reduxjs/toolkit';
import { GET_CATEGORIES_SUCCESS_REDUCER, GET_CATEGORY_FAIL_REDUCER } from '../../reducers/index';
import { ICategoryListAPI } from '@/domain/interfaces/category.api.interface';

export const initialState: ICategoryListAPI = {
  categories: []
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    GET_CATEGORIES_SUCCESS: GET_CATEGORIES_SUCCESS_REDUCER,
    GET_CATEGORY_FAIL: GET_CATEGORY_FAIL_REDUCER
  }
});

export const { GET_CATEGORIES_SUCCESS, GET_CATEGORY_FAIL } = categoriesSlice.actions;

export default categoriesSlice.reducer;

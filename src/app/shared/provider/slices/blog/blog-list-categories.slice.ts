import { createSlice } from '@reduxjs/toolkit';
import { GET_BLOG_LIST_CATEGORIES_REDUCER } from '../../reducers/index';
import { IPostApi } from '@/domain/interfaces/blog.api.interface';

export interface IBlogListCategoriesState {
  blogListCategories: IPostApi[]
}

const initialState: IBlogListCategoriesState = {
  blogListCategories: []
};

export const blogListCategoriesSlice = createSlice({
  initialState,
  name: 'blogListCategoriesPage',
  reducers: {
    BLOG_LIST_CATEGORIES: GET_BLOG_LIST_CATEGORIES_REDUCER
  }
});

export const { BLOG_LIST_CATEGORIES } = blogListCategoriesSlice.actions;
export default blogListCategoriesSlice.reducer;

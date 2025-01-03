import { createSlice } from '@reduxjs/toolkit';
import { GET_BLOG_LIST_CATEGORIES_PAGE_REDUCER } from '../../reducers/index';
import { IBlogPostAPI } from '@/domain/interfaces/blog.api.interface';

export interface IBlogListCategoriesPageState {
    blogListCategoriesPage: IBlogPostAPI
}

const initialState: IBlogListCategoriesPageState = {
  blogListCategoriesPage: { } as IBlogPostAPI
};

export const blogListCategoriesPageSlice = createSlice({
  initialState,
  name: 'blogListCategoriesPage',
  reducers: {
    GET_BLOG_LIST_CATEGORIES_PAGE: GET_BLOG_LIST_CATEGORIES_PAGE_REDUCER
  }
});

export const { GET_BLOG_LIST_CATEGORIES_PAGE } = blogListCategoriesPageSlice.actions;
export default blogListCategoriesPageSlice.caseReducers;

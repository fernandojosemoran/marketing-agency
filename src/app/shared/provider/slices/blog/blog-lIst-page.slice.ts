import { createSlice } from '@reduxjs/toolkit';
import { GET_BLOG_LIST_PAGE_REDUCER } from '../../reducers/index';
import { IBlogPostAPI } from '@/domain/interfaces/blog.api.interface';

export interface IBlogListPageState {
    blogListPage: IBlogPostAPI
}

const initialState: IBlogListPageState = {
  blogListPage: {} as IBlogPostAPI
};

export const blogListPageSlice = createSlice({
  initialState,
  name: 'blogListPage',
  reducers: {
    blogListPage: GET_BLOG_LIST_PAGE_REDUCER
  }
});

export const { blogListPage } = blogListPageSlice.actions;
export default blogListPageSlice.caseReducers;

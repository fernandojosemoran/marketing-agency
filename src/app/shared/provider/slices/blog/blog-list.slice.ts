import { createSlice } from '@reduxjs/toolkit';
import { BLOG_LIST_REDUCER } from '../../reducers/index';
import { IPostApi } from '@/domain/interfaces/blog.api.interface';

export interface IBlogListState {
  blogList: IPostApi[]
}

const initialState: IBlogListState  = {
  blogList: []
};

export const blogListSlice = createSlice({
  initialState,
  name: 'blogList',
  reducers: {
    BLOG_LIST: BLOG_LIST_REDUCER
  }
});

export const { BLOG_LIST } = blogListSlice.actions;
export default blogListSlice.reducer;

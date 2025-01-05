import { createSlice } from '@reduxjs/toolkit';
import { BLOG_SEARCH_REDUCER } from '../../reducers/index';
import { IPostApi } from '@/domain/interfaces/blog.api.interface';

export interface IBlogSearchState {
    blogSearch: IPostApi[]
}

const initialState: IBlogSearchState = {
  blogSearch: []
};

export const blogSearchSlice = createSlice({
  initialState,
  name: 'blogSearch',
  reducers: {
    BLOG_SEARCH: BLOG_SEARCH_REDUCER
  }
});

export const { BLOG_SEARCH } = blogSearchSlice.actions;
export default blogSearchSlice.reducer;

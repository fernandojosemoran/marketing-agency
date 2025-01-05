import { createSlice } from '@reduxjs/toolkit';
import { GET_PAGE_SEARCH_REDUCER } from '../../reducers/index';

export interface IBlogPageSearchState {
    blogPageSearch: []
}

const initialState: IBlogPageSearchState = {
  blogPageSearch: []
};

export const blogPageSearchSlice = createSlice({
  initialState,
  name: 'blogPageSearch',
  reducers: {
    blogPageSearch: GET_PAGE_SEARCH_REDUCER
  }
});

export const { blogPageSearch } = blogPageSearchSlice.actions;
export default blogPageSearchSlice.reducer;

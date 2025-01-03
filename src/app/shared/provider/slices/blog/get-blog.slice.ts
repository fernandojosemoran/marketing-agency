import { IDetailPostApi } from "@/domain/interfaces/blog.api.interface";
import { createSlice } from "@reduxjs/toolkit";
import { GET_BLOG_REDUCER } from "../../reducers/blog/get-blog.reducer";

export interface IBlogState {
    blog: IDetailPostApi;
}

const initialState: IBlogState = {
    blog: {} as IDetailPostApi
};

export const getBlogSlice = createSlice({
    initialState,
    name: "getBlog",
    reducers: {
        GET_BLOG: GET_BLOG_REDUCER
    }
});

export const { GET_BLOG } = getBlogSlice.actions;

export default getBlogSlice.reducer;
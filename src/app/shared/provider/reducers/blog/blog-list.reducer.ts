import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogListState } from "../../slices/blog/blog-list.slice";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";

export const BLOG_LIST_REDUCER = (state: IBlogListState, action: PayloadAction<IPostApi[]>) => {
    return {
      ...state,
      blogList: action.payload
    };
  };
  
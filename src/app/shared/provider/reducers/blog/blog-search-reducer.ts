import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogSearchState } from "../../slices/blog/blog-search.slice";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";

export const BLOG_SEARCH_REDUCER = (state: IBlogSearchState, action: PayloadAction<IPostApi[]>) => {
    return {
      ...state,
      blogSearch: action.payload
    };
  };
  
import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogListPageState } from "../../slices/blog/blog-lIst-page.slice";
import { IBlogPostAPI } from "@/domain/interfaces/blog.api.interface";

export const GET_BLOG_LIST_PAGE_REDUCER = (state: IBlogListPageState, action: PayloadAction<IBlogPostAPI>) => {
    return {
      ...state,
      blogListPage: action.payload
    };
  };
  
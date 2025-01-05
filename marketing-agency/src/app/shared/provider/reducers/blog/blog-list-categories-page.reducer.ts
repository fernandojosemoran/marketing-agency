import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogListCategoriesPageState } from "../../slices/blog/blog-list-categories-page.slice";
import { IBlogPostAPI } from "@/domain/interfaces/blog.api.interface";

export const GET_BLOG_LIST_CATEGORIES_PAGE_REDUCER = (state: IBlogListCategoriesPageState, action: PayloadAction<IBlogPostAPI>) => {
    return {
      ...state,
      blogListCategoriesPage: action.payload
    };
  };
  
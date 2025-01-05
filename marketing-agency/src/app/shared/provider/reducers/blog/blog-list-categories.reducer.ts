import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogListCategoriesState } from "../../slices/blog/blog-list-categories.slice";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";

export const GET_BLOG_LIST_CATEGORIES_REDUCER = (state: IBlogListCategoriesState, action: PayloadAction<IPostApi[]>) => {
    return {
      ...state,
      blogListCategories: action.payload
    };
  };
  
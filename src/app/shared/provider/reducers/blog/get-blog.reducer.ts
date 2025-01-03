import { IDetailPostApi } from "@/domain/interfaces/blog.api.interface";
import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogState } from "../../slices/blog/get-blog.slice";

export const GET_BLOG_REDUCER = (state: IBlogState, action: PayloadAction<IDetailPostApi>) => {
    return {
      ...state,
      blog: action.payload
    };
  };
  
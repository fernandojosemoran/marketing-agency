import { PayloadAction } from "@reduxjs/toolkit";
import { IBlogPageSearchState } from "../../slices/blog/blog-page-search.slice";

export const GET_PAGE_SEARCH_REDUCER = (state: IBlogPageSearchState, action: PayloadAction<[]>) => {
    return {
      ...state,
      pageSearch: action.payload
    };
  };
  
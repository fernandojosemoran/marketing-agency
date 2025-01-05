import { combineReducers } from "@reduxjs/toolkit";
import { blogListCategoriesPageSlice } from "./blog/blog-list-categories-page.slice";
import { blogSearchSlice } from "./blog/blog-search.slice";
import { blogListPageSlice } from "./blog/blog-lIst-page.slice";
import { blogListCategoriesSlice } from "./blog/blog-list-categories.slice";
import { blogPageSearchSlice } from "./blog/blog-page-search.slice";
import { blogListSlice } from "./blog/blog-list.slice";
import { getBlogSlice } from "./blog/get-blog.slice";

import categoriesSlice from "./categories/categories.slice";


export const blog = combineReducers({
    blogListCategoriesPage: blogListCategoriesPageSlice.reducer,
    blogSearch: blogSearchSlice.reducer,
    blogListPage: blogListPageSlice.reducer,
    blogList: blogListSlice.reducer,
    getBlog: getBlogSlice.reducer,
    blogListCategories: blogListCategoriesSlice.reducer,
    blogPageSearch: blogPageSearchSlice.reducer,
});

export const category = combineReducers({
    categories: categoriesSlice,
});
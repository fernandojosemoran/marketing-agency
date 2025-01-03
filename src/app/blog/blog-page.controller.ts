import { ICategoryListAPI } from "@/domain/interfaces/category.api.interface";
import { Dispatch } from "@reduxjs/toolkit";
import { GET_CATEGORIES_SUCCESS } from "../shared/provider/slices/categories/categories.slice";

import CategoryService from "../shared/services/category.service";
import BlogService from "../shared/services/blog.service";

class BlogPageController {
    public constructor(
        private readonly categoryService: CategoryService,
        private readonly blogService: BlogService
    ) {}

    public getCategories(dispatch: Dispatch): void {
        this.categoryService.getCategories()
        .then((response: ICategoryListAPI) => dispatch(GET_CATEGORIES_SUCCESS(response.categories)))
        .catch(error => console.log(error));
    }

    public getBlogList(dispatch: Dispatch): void {
        this.blogService.getBlogList(dispatch);
    }

    public getBlogListPage(page: number, dispatch: Dispatch): void {
        this.blogService.getBlogListPage(page, dispatch);
    }
}

export default BlogPageController;
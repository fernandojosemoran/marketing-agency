import { ICategoryListAPI } from "@/domain/interfaces/category.api.interface";
import { Dispatch } from "@reduxjs/toolkit";
import { GET_CATEGORIES_SUCCESS } from "../shared/provider/slices/categories/categories.slice";
import { IBlogPostAPI, IPostApi } from "@/domain/interfaces/blog.api.interface";

import CategoryService from "../shared/services/category.service";
import BlogService from "../shared/services/blog.service";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";

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

    public getBlogList(): Promise<IPostApi[]> {
        return this.blogService.getBlogList();
    }

    public getBlogListPage(page: number): Promise<IBlogPostAPI> {
        return this.blogService.getBlogListPage(page);
    }
}

const repository: BlogRepositoryImpl = new BlogRepositoryImpl(
    new BlogDataSourceImpl()
);
  
const blogPageController: BlogPageController = new BlogPageController(
    new CategoryService(),
    new BlogService(repository)
);

export default blogPageController;
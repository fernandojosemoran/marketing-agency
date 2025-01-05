import { Dispatch } from '@reduxjs/toolkit';
import { GET_CATEGORIES_SUCCESS } from '../../../shared/provider/slices/categories/categories.slice';

import BlogService from '../../../shared/services/blog.service';
import CategoryService from '../../../shared/services/category.service';
import { IBlogPostAPI, IPostApi } from '@/domain/interfaces/blog.api.interface';

class CategorySlugPageController { 
    public constructor(
        private readonly blogService: BlogService,
        private readonly categoryService: CategoryService
    ) {}

    public get_categories(dispatch: Dispatch): void {
        this.categoryService.getCategories()
        .then(categories => dispatch(GET_CATEGORIES_SUCCESS(categories.categories)))
        .catch(error => console.error(error));
    }

    public get_blog_list_category(slug: string): Promise<IPostApi[]> {
        return this.blogService.get_blog_list_category(slug);
    }

    public getBlogListPage(page: number): Promise<IBlogPostAPI> {
        return this.blogService.getBlogListPage(page);
    }

    public getBlogList(): Promise<IPostApi[]> {
        return this.blogService.getBlogList();
    }
}

export default CategorySlugPageController;
import { Dispatch } from '@reduxjs/toolkit';
import { GET_CATEGORIES_SUCCESS } from '../../../shared/provider/slices/categories/categories.slice';

import BlogService from '../../../shared/services/blog.service';
import CategoryService from '../../../shared/services/category.service';

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

    public get_blog_list_category(slug: string, dispatch: Dispatch): void {
        this.blogService.get_blog_list_category(slug, dispatch);
    }
}

export default CategorySlugPageController;
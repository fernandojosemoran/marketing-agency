import { Dispatch } from "@reduxjs/toolkit";
import CategoryService from "./shared/services/category.service";
import { GET_CATEGORIES_SUCCESS } from "./shared/provider/slices/categories/categories.slice";

class PageController {
    public constructor(
        private readonly categoryService: CategoryService
    ) {}

    public getCategories(dispatch: Dispatch): void {
        this.categoryService.getCategories()
        .then(categories => dispatch(GET_CATEGORIES_SUCCESS(categories.categories)));
    }
}

export default PageController;
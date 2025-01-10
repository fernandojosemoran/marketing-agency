import { Dispatch } from "@reduxjs/toolkit";
import { GET_CATEGORIES_SUCCESS } from "./shared/provider/slices/categories/categories.slice";

import CategoryService from "./shared/services/category.service";

class PageController {
    public constructor(
        private readonly categoryService: CategoryService
    ) {}

    public getCategories(dispatch: Dispatch): void {
        this.categoryService.getCategories()
        .then(categories => dispatch(GET_CATEGORIES_SUCCESS(categories.categories)));
    }
}

const controller = new PageController(new CategoryService());

export default controller;
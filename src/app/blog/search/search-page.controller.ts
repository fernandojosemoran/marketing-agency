import BlogService from "@/app/shared/services/blog.service";
import { Dispatch } from "@reduxjs/toolkit";

class SearchPageController {

    public constructor(
        private readonly blogService: BlogService
    ) {}

    public BlogSearch(slug: string, dispatch: Dispatch): void {
        this.blogService.search_blog(slug, dispatch);
    }

}

export default SearchPageController;
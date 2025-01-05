import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import BlogService from "@/app/shared/services/blog.service";

class SearchPageController {

    public constructor(
        private readonly blogService: BlogService
    ) {}

    public BlogSearch(slug: string): Promise<IPostApi[]> {
        return this.blogService.search_blog(slug);
    }

}

export default SearchPageController;
import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import BlogService from "@/app/shared/services/blog.service";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";

class SearchPageController {

    public constructor(
        private readonly blogService: BlogService
    ) {}

    public BlogSearch(slug: string): Promise<IPostApi[]> {
        return this.blogService.search_blog(slug);
    }
}

const blogRepository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);
const blogService: BlogService = new BlogService(blogRepository);
const searchPageController: SearchPageController = new SearchPageController(blogService);

export default searchPageController;
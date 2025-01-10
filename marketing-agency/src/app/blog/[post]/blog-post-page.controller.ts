import { IDetailPostApi } from "@/domain/interfaces/blog.api.interface";
import BlogService from "@/app/shared/services/blog.service";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";

class BlogPostPageController {
    public constructor(
        private readonly blogService: BlogService
    ) {}

    public getBlog(post: string): Promise<IDetailPostApi> {
        return this.blogService.getBlog(post);
    }
}

const blogRepository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);

const blogService: BlogService = new BlogService(blogRepository);
const blogPostPageController: BlogPostPageController = new BlogPostPageController(
  blogService
);

export default blogPostPageController;
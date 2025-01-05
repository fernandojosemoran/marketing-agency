import { IDetailPostApi } from "@/domain/interfaces/blog.api.interface";
import BlogService from "@/app/shared/services/blog.service";

class BlogPostPageController {
    public constructor(
        private readonly blogService: BlogService
    ) {}

    public getBlog(post: string): Promise<IDetailPostApi> {
        return this.blogService.getBlog(post);
    }
}

export default BlogPostPageController;
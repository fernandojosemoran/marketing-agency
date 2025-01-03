import BlogService from "@/app/shared/services/blog.service";
import { Dispatch } from "@reduxjs/toolkit";

class BlogPostPageController {
    public constructor(
        private readonly blogService: BlogService
    ) {}

    public getBlog(post: string, dispatch: Dispatch): void {
        this.blogService.getBlog(post, dispatch);
    }
}

export default BlogPostPageController;
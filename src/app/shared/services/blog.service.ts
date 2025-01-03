import { Dispatch } from '@reduxjs/toolkit';
import { IBlogPostAPI, IDetailPostApi, IPostApi } from '@/domain/interfaces/blog.api.interface';

import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";

interface IBlogService {
    getBlogList(dispatch: Dispatch): void;
    get_blog_list_category( slug: string, dispatch: Dispatch): void;
    search_blog(slug: string, dispatch: Dispatch): void;
}

class BlogService implements IBlogService {
    public constructor(
        private readonly blogRepository: BlogRepositoryImpl
    ) {}

    public getBlogList(): Promise<IPostApi[]> {
        return this.blogRepository.getBlogList();

        // dispatch(BLOG_LIST(blogs))
    }

    public get_blog_list_category(slug: string): Promise<IPostApi[]> {
        return this.blogRepository.getBlogListCategories(slug);

        // dispatch(BLOG_LIST_CATEGORIES(posts))
    }

    public search_blog(slug: string): Promise<IPostApi[]> {
        return this.blogRepository.searchBlog(slug);

        // dispatch(BLOG_SEARCH(posts))
    }

    public getBlogListPage(page: number): Promise<IBlogPostAPI> {
        return this.blogRepository.getBlogListPage(page);

        // GET_BLOG_LIST_CATEGORIES_PAGE(posts))
    }

    public getBlog(slug: string): Promise<IDetailPostApi> {
        return this.blogRepository.getBlog(slug);

        // GET_BLOG(blog))
    }
}


export default BlogService;
import { Dispatch } from '@reduxjs/toolkit';

import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";

import { BLOG_LIST } from '../provider/slices/blog/blog-list.slice';
import { BLOG_LIST_CATEGORIES } from '../provider/slices/blog/blog-list-categories.slice';
import { BLOG_SEARCH } from '../provider/slices/blog/blog-search.slice';
import { GET_BLOG_LIST_CATEGORIES_PAGE } from '../provider/slices/blog/blog-list-categories-page.slice';
import { GET_BLOG } from '../provider/slices/blog/get-blog.slice';

interface IBlogService {
    getBlogList(dispatch: Dispatch): void;
    get_blog_list_category( slug: string, dispatch: Dispatch): void;
    search_blog(slug: string, dispatch: Dispatch): void;
}

class BlogService implements IBlogService {
    public constructor(
        private readonly blogRepository: BlogRepositoryImpl
    ) {}

    public getBlogList(dispatch: Dispatch): void {
        this.blogRepository.getBlogList()
        .then(blogs => dispatch(BLOG_LIST(blogs)))
        .catch(error => console.error(error));
    }

    public get_blog_list_category(slug: string, dispatch: Dispatch) {
        this.blogRepository.getBlogListCategories(slug)
        .then(posts => dispatch(BLOG_LIST_CATEGORIES(posts)))
        .catch(error => console.error(error));
    }

    public search_blog(slug: string, dispatch: Dispatch): void {
        this.blogRepository.searchBlog(slug)
        .then(posts => dispatch(BLOG_SEARCH(posts)))
        .catch(error => console.error(error));
    }

    public getBlogListPage(page: number, dispatch: Dispatch): void {
        this.blogRepository.getBlogListPage(page)
        .then(posts => dispatch(GET_BLOG_LIST_CATEGORIES_PAGE(posts)))
        .catch(error => console.error(error));
    }

    public getBlog(slug: string, dispatch: Dispatch): void {
        this.blogRepository.getBlog(slug)
        .then(blog => dispatch(GET_BLOG(blog)))
        .catch(error => console.error(error));
    }
}


export default BlogService;
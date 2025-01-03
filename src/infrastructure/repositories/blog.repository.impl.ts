import { IBlogPostAPI, IDetailPostApi, IPostApi } from "@/domain/interfaces/blog.api.interface";
import { ICategoryListAPI } from "@/domain/interfaces/category.api.interface";

import BlogRepository from "@/domain/repositories/blog.repository";
import BlogDataSourceImpl from "../datasources/blog.datasource.impl";

class BlogRepositoryImpl implements BlogRepository {
    public constructor(
        private readonly dataSource: BlogDataSourceImpl
    ) {}

    public getBlogList(): Promise<IPostApi[]> {
        return this.dataSource.getBlogList();
    }

    public getBlogListPage(page: number): Promise<IBlogPostAPI> {
        return this.dataSource.getBlogListPage(page);
    }

    public getBlogListCategories(slug: string): Promise<IPostApi[]> {
        return this.dataSource.getBlogListCategories(slug);
    }

    public getBlogListCategoriesPage(slug: string, page: number): Promise<ICategoryListAPI> {
        return this.dataSource.getBlogListCategoriesPage(slug, page);
    }

    public getBlog(slug: string): Promise<IDetailPostApi> {
        return this.dataSource.getBlog(slug);
    }

    public searchBlog(searchTerm: string): Promise<IPostApi[]> {
        return this.dataSource.searchBlog(searchTerm);
    }

    public searchBlogPage(searchTerm: string, page: number): Promise<IPostApi[]> {
        return this.dataSource.searchBlogPage(searchTerm, page);
    }
}

export default BlogRepositoryImpl;
import { IBlogPostAPI, IPostApi } from "../interfaces/blog.api.interface";
import { ICategoryListAPI } from "../interfaces/category.api.interface";

abstract class BlogDataSource {
    abstract getBlogList(): Promise<IPostApi[]>;
    abstract getBlogListPage(page: number): Promise<IBlogPostAPI>;
    abstract getBlogListCategories(slug: string): Promise<IPostApi[]>;
    abstract getBlogListCategoriesPage(slug: string, page: number): Promise<ICategoryListAPI>;
    abstract getBlog(slug: string): Promise<IPostApi>;
    abstract searchBlog(searchTerm: string): Promise<IPostApi[]>;
    abstract searchBlogPage(searchTerm: string, page: number): Promise<IPostApi[]>;
}

export default BlogDataSource;
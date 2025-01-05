import { IBlogPostAPI, IDetailPostApi, IPostApi, IPostApiResults } from "@/domain/interfaces/blog.api.interface";
import { ICategoryListAPI } from "@/domain/interfaces/category.api.interface";
import { Env } from "../constants";
import { ISearchBlogAPI } from "@/domain/interfaces/blog-search.api.interface";

import axios, { AxiosRequestConfig } from "axios";

import BlogDataSource from "@/domain/datasources/blog.datasource";

// hidden dependencies
const REACT_APP_API_URL: string = Env.REACT_APP_API_URL;

class BlogDataSourceImpl implements BlogDataSource {
    private readonly config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    public async getBlogList(): Promise<IPostApi[]> {
        const response = await axios.get<IBlogPostAPI>(`${REACT_APP_API_URL}/blog/blog_list`, this.config);
        
        if (response.status !== 200) throw 'Blogs not found';
    
        return Promise.resolve(response.data.results.posts);
    }

    public async getBlogListPage(page: number): Promise<IBlogPostAPI> {
        const response = await axios.get<IBlogPostAPI>(`${REACT_APP_API_URL}/blog/blog_list?p=${page}`, this.config);

        if (response.status !== 200) throw 'Blogs not found';
        
        return Promise.resolve(response.data);
    }

    public async getBlogListCategories(slug: string): Promise<IPostApi[]> {
        const response = await axios.get<IBlogPostAPI>(`${REACT_APP_API_URL}/blog/by_categories?slug=${slug}`, this.config);
        
        if (response.status !== 200) throw "Categories not found";
    
        return Promise.resolve(response.data.results.posts);
    }

    public async getBlogListCategoriesPage(slug: string, page: number): Promise<ICategoryListAPI> {
        const response = await axios.get<ICategoryListAPI>(`${REACT_APP_API_URL}/blog/by_categories?slug=${slug}&p=${page}`, this.config);

        if (response.status !== 200) throw 'Categories not found';
        
        return Promise.resolve(response.data);
    }

    public async getBlog(slug: string): Promise<IDetailPostApi> {
        const response = await axios.get<IPostApiResults>(`${REACT_APP_API_URL}/blog/detail/${slug}`, this.config);

        if (response.status !== 200) throw 'Blog not found';
    
        return Promise.resolve(response.data.post);
    }

    public async searchBlog(searchTerm: string): Promise<IPostApi[]> {
        const response = await axios.get<ISearchBlogAPI>(`${REACT_APP_API_URL}/blog/search?s=${searchTerm}`, this.config);

        if (response.status !== 200) throw 'Blog not found';
    
        return Promise.resolve(response.data.results.post_filtered);
    }

    public async searchBlogPage(searchTerm: string, page: number): Promise<IPostApi[]> {
        const response = await axios.get<ISearchBlogAPI>(`${REACT_APP_API_URL}/blog/search?s=${searchTerm}&p=${page}`, this.config);
    
        if (response.status === 200) throw 'Blogs not found';

        return Promise.resolve(response.data.results.post_filtered);
    }
}

export default BlogDataSourceImpl;
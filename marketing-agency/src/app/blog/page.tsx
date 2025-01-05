"use client";

import { useEffect } from "react";
import { Category } from "@/domain/interfaces/category.api.interface";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useSearchParams } from "next/navigation";
import { GET_BLOG_LIST_CATEGORIES_PAGE } from "../shared/provider/slices/blog/blog-list-categories-page.slice";
import { IBlogPostAPI } from "@/domain/interfaces/blog.api.interface";

import CategoriesHeader from "./components/categories-header/CategoriesHeader";
import BlogPageController from "./blog-page.controller";
import CategoryService from "../shared/services/category.service";
import BlogService from "../shared/services/blog.service";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";
import BlogList from "./components/blog-list/BlogList";
import CircleLoader from "../shared/loaders/CircleLoader";
import dynamic from "next/dynamic";

const repository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);

const controller: BlogPageController = new BlogPageController(
  new CategoryService(),
  new BlogService(repository)
);

function BlogPage() {
  const dispatch = useAppDispatch();

  const params = useSearchParams();
  const page: number = Number(params.get("p")) || 1;

  const categories: Category[] = useAppSelector(
    (state) => state.category.categories.categories
  );
  
  const posts: IBlogPostAPI = useAppSelector(
    (state) => state.blog.blogListCategoriesPage.blogListCategoriesPage
  );

  const get_blog_list_page = (page: number) => {
    controller.getBlogListPage(page)
    .then((posts) => dispatch(GET_BLOG_LIST_CATEGORIES_PAGE(posts)))
    .catch(error => console.error(error));
  };

  useEffect(() => {
    toggleDarkMode();
    controller.getCategories(dispatch);
    get_blog_list_page(page);
  }, [dispatch]);

  return (
    <div className="pt-10 overflow-x-hidden">
      {
        true
        ?
        <>
          <CategoriesHeader categories={categories ?? []} />
          <div className="mx-auto max-w-6xl my-10">
            <BlogList
              posts={posts.results?.posts ?? []}
              get_blog_list_page={get_blog_list_page}
              count={posts.count}
            />
          </div>
        </>
        : 
        <div className="absolute bg-[#0c0101be] flex flex-col justify-center items-center w-full h-screen z-50">
          <CircleLoader /> 
        </div>
      }
    </div>
  );
}

export default dynamic(() => Promise.resolve(BlogPage), { ssr: false });
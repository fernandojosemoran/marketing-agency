"use client";

import { useEffect } from "react";
import { Category } from "@/domain/interfaces/category.api.interface";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { IBlogPostAPI } from "@/domain/interfaces/blog.api.interface";

import CategoriesHeader from "./components/categories-header/CategoriesHeader";
import BlogPageController from "./blog-page.controller";
import CategoryService from "../shared/services/category.service";
import BlogService from "../shared/services/blog.service";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";
import BlogList from "./components/blog-list/BlogList";
import useLoading from "../shared/hooks/useLoading";
import CircleLoader from "../shared/loaders/CircleLoader";
import { useSearchParams } from "next/navigation";

const repository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);

const controller: BlogPageController = new BlogPageController(
  new CategoryService(),
  new BlogService(repository)
);

export default function BlogPage() {
  const dispatch = useAppDispatch();

  const params = useSearchParams();
  const page: number = Number(params.get("p")) || 1;

  const categories: Category[] = useAppSelector(
    (state) => state.category.categories.categories
  );
  
  const posts: IBlogPostAPI = useAppSelector(
    (state) => state.blog.blogListCategoriesPage.blogListCategoriesPage
  );

  const { loading: loadingCategories } = useLoading({ data: { type: "object|list", data: categories } });
  const { loading: loadingPosts } = useLoading({ data: { type: "object|list", data: posts } });

  useEffect(() => {
    toggleDarkMode();
    controller.getCategories(dispatch);
    controller.getBlogListPage(page, dispatch);
  }, [dispatch]);

  return (
    <div className="pt-10 overflow-x-hidden">
      {
        loadingPosts && loadingCategories
        ?
        <div className="absolute bg-[#0c0101be] flex flex-col justify-center items-center w-full h-screen z-50">
          <CircleLoader /> 
        </div>
        : 
        <>
          <CategoriesHeader categories={categories ?? []} />
          <div className="mx-auto max-w-6xl my-10">
            <BlogList
              posts={posts.results?.posts ?? []}
              get_blog_list_page={(page: number) =>
                controller.getBlogListPage(page, dispatch)
              }
              count={posts.count}
            />
          </div>
        </>
      }
    </div>
  );
}

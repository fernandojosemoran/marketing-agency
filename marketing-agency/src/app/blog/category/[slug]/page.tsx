"use client";

import { useEffect } from "react";
import type { Category } from "@/domain/interfaces/category.api.interface";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks";
import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { BLOG_LIST_CATEGORIES } from "@/app/shared/provider/slices/blog/blog-list-categories.slice";
import { GET_BLOG_LIST_CATEGORIES_PAGE } from "@/app/shared/provider/slices/blog/blog-list-categories-page.slice";

import CategoriesHeader from "../../components/categories-header/CategoriesHeader";
import BlogList from "../../components/blog-list/BlogList";
import controller from "./category-slug-page.controller";


function SlugPage() {
  const { slug } = useParams();

  const dispatch = useAppDispatch();

  const categories: Category[] = useAppSelector(
    (state) => state.category.categories.categories
  );

  const posts: IPostApi[] = useAppSelector(
    (state) => state.blog.blogListCategories.blogListCategories
  );

  const get_blog_list_page = (page: number) => {
    controller.getBlogListPage(page)
    .then((posts) => dispatch(GET_BLOG_LIST_CATEGORIES_PAGE(posts)))
    .catch(error => console.error(error));
  };

  useEffect(() => {
    if (!slug) redirect("blog");
    toggleDarkMode();

    window.scrollTo(0, 0);

    controller.get_categories(dispatch);
    
    controller.get_blog_list_category(slug.toLocaleString())
    .then((posts) => dispatch(BLOG_LIST_CATEGORIES(posts)))
    .catch(error => console.error(error));
  }, [dispatch, slug]);

  return (
    <div className="pt-24">
      <CategoriesHeader categories={categories ?? []} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl my-10">
          <BlogList posts={posts} get_blog_list_page={get_blog_list_page} count={4} />
        </div>
      </div>
    </div>
  );
}

export default SlugPage;

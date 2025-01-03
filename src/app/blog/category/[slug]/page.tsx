"use client";

import { useEffect } from "react";
import type { Category } from "@/domain/interfaces/category.api.interface";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks";
import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";

import CategorySlugPageController from "./category-slug-page.controller";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";
import BlogService from "@/app/shared/services/blog.service";
import CategoriesHeader from "../../components/categories-header/CategoriesHeader";
import BlogList from "../../components/blog-list/BlogList";
import CategoryService from "@/app/shared/services/category.service";

const blogRepository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);

const blogService: BlogService = new BlogService(blogRepository);
const categoryService: CategoryService = new CategoryService();

const controller: CategorySlugPageController = new CategorySlugPageController(
  blogService,
  categoryService
);

function SlugPage() {
  const { slug } = useParams();

  const dispatch = useAppDispatch();

  const categories: Category[] = useAppSelector(
    (state) => state.category.categories.categories
  );

  const posts: IPostApi[] = useAppSelector(
    (state) => state.blog.blogListCategories.blogListCategories
  );

  useEffect(() => {
    if (!slug) redirect("blog");
    toggleDarkMode();

    window.scrollTo(0, 0);

    controller.get_categories(dispatch);
    controller.get_blog_list_category(slug.toLocaleString(), dispatch);
  }, [dispatch, slug]);

  return (
    <div className="pt-24">
      <CategoriesHeader categories={categories ?? []} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl my-10">
          <BlogList posts={posts} get_blog_list_page={(page) => page} count={4} />
        </div>
      </div>
    </div>
  );
}

export default SlugPage;

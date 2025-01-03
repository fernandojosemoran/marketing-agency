"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";

import SearchPageController from "./search-page.controller";
import BlogService from "@/app/shared/services/blog.service";
import BlogRepositoryImpl from "@/infrastructure/repositories/blog.repository.impl";
import BlogDataSourceImpl from "@/infrastructure/datasources/blog.datasource.impl";

const blogRepository: BlogRepositoryImpl = new BlogRepositoryImpl(
  new BlogDataSourceImpl()
);
const blogService: BlogService = new BlogService(blogRepository);
const controller: SearchPageController = new SearchPageController(blogService);

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("s");
  const dispatch = useAppDispatch();
  const posts: IPostApi[] = useAppSelector(
    (state) => state.blog.blogSearch.blogSearch
  );

  useEffect(() => {
    controller.BlogSearch(searchQuery!, dispatch);
  }, []);

  return (
    <ul>
      {posts.map((post, index) => {
        return <li key={index}>{post.title}</li>;
      })}
    </ul>
  );
};

export default SearchPage;

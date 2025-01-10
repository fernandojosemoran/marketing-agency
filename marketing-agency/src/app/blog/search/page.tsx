"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { BLOG_SEARCH } from "@/app/shared/provider/slices/blog/blog-search.slice";

import dynamic from "next/dynamic";
import controller from "./search-page.controller";


const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("s");
  const dispatch = useAppDispatch();
  const posts: IPostApi[] = useAppSelector(
    (state) => state.blog.blogSearch.blogSearch
  );

  useEffect(() => {
    controller.BlogSearch(searchQuery!)
    .then((posts) => dispatch(BLOG_SEARCH(posts)))
    .catch(error => console.error(error));
  }, [dispatch]);

  return (
    <ul>
      {posts.map((post, index) => {
        return <li key={index}>{post.title}</li>;
      })}
    </ul>
  );
};

export default dynamic(() => Promise.resolve(SearchPage), { ssr: false });

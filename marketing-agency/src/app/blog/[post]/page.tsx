"use client";

import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useEffect, useState } from "react";
import { IDetailPostApi } from "@/domain/interfaces/blog.api.interface";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks";
import { GET_BLOG } from "@/app/shared/provider/slices/blog/get-blog.slice";
import { useParams } from "next/navigation";

import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import DOMPurify from 'dompurify';
import controller from "./blog-post-page.controller";

const Post = ({ post }: {post: IDetailPostApi}) => {
  return (
    <div className="mt-28 overflow-x-hidden">
        <div className="mx-auto w-8/12 bg-lm-primary dark:bg-dm-primary">
          <div className="inset-0 relative">
            <Image
              width={800}
              height={800}
              className="object-cover mx-auto"
              src={post.thumbnail}
              alt={post.title}
            />
            <div
              className="inset-0 bg-gray-200 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:pt-32 sm:pb-20 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-dm-primary-text sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="min-w-0 flex-1 p-4 pt-8">
              <div className="">
                <span className=" hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 font-medium text-gray-800 dark:text-dm-third-text text-sm ">
                  <Link href={`/blog/category/${post.category.slug}`}>
                    {post.category.name}
                  </Link>
                </span>{" "}
                <span className="text-gray-300">&middot;</span>
                <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 dark:text-dm-third-text text-sm">
                  {moment(post.published).format("LL")}
                </span>{" "}
                <span className="text-gray-300">&middot;</span>
                <span className="mt-2 mx-2 font-medium text-gray-800 dark:text-dm-third-text text-sm">
                  {post.time_stamp} min read
                </span>
                <p className="mt-4 text-lg font-regular text-gray-800 dark:text-dm-secondary-text leading-8">
                  {post.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-lm-primary dark:text-dm-secondary-text dark:bg-dm-primary">
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} />
          </div>
        </div>
      </div>
  );
};

const BlogPostPage = () => {
  const { post } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const postState: IDetailPostApi = useAppSelector((state) => state.blog.getBlog.blog);

  useEffect(() => {
    toggleDarkMode();

    controller.getBlog(post.toLocaleString())
    .then(post => dispatch(GET_BLOG(post)))
    .catch(err => console.log(err));

    setInterval(() => {
      if (!postState) return;

      setIsLoading(true);
    }, 300);

  }, [dispatch, postState]);

  return (
    <div className="mt-20">
      {
        isLoading
        ? 
          <Post post={postState}/>
        :
          <span>Loading...</span>
      }
    </div>
  );
};

export default BlogPostPage;

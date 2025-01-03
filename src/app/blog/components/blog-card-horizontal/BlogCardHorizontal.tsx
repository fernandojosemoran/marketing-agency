"use client";

import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; 

import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardHorizontalProps {
  post: IPostApi;
  index: number;
}

function BlogCardHorizontal({ post, index }: IBlogCardHorizontalProps) {

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const { push } = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);

  const blogSlugPath: string = `/blog/${post.slug}`;

  const handlerMouseLeave = () => {
    setIsHover(false);
    paragraphRef?.current?.classList.remove("text-indigo-400");
  };
  
  const handlerMouseEnter = () => {
    setIsHover(true);
    paragraphRef?.current?.classList.add("text-indigo-400");
  };

  return (
    <div
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
      onClick={() => push(blogSlugPath)}
      className="block relative cursor-pointer hover:shadow-card dark:hover:shadow-dm-third p-5 dark:hover:bg-dm-third dark:bg-dm-secondary bg-lm-secondary rounded-md transition duration-300 ease-in-out"
    >
      <div className="flex items-center">
        <div className="lg:flex min-w-0 lg:flex-1 items-center">
          <figure className="lg:flex-shrink-0">
            <Link href={blogSlugPath}>
              <Image
                key={index}
                width={288}
                height={288}
                priority
                className="max-h-72 lg:w-96 rounded"
                src={post.thumbnail}
                alt={post.title}
                style={{
                  objectFit: isHover ? "cover" : "fill"
                }}
              />
            </Link>
          </figure>
          <div className="min-w-0 flex-1 px-8 p-4 text-dm-secondary-text">
            <p
              ref={paragraphRef}
              id={`title` + post.id}
              className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out"
            >
              {post.title.length > 80 ? post.title.slice(0, 79) : post.title}
            </p>
            <div className="lg:absolute lg:top-28">
              <span 
                className=" hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 dark:text-dm-secondary-text font-medium text-dm-third text-sm " 
                onClick={(event) => event.stopPropagation()}
              >
                <Link
                  href={`/blog/category/${post.category.slug}`}
                  passHref
                  legacyBehavior
                >
                  {post.category.name}
                </Link>
              </span>{" "}
              <span className="dark:bg-inherit dark:text-dm-secondary-text bg-lm-secondary text-lm-third-text">
                &middot;
              </span>
              <span className="mt-2 ml-2 mr-1 font-medium text-lm-third-text text-sm dark:text-dm-secondary-text">
                {moment(post.published).format("LL")}
              </span>{" "}
              <span className="text-gray-300">&middot;</span>
              <span className="mt-2 mx-2 font-medium text-lm-third-text text-sm">
                {post.time_stamp} min read
              </span>
              <p className="mt-4 text-lg text-balance font-regular text-lm-third-text leading-8 dark:text-dm-secondary-text">
                {post.description.length > 150
                  ? post.description.slice(0, 149)
                  : post.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardHorizontal;

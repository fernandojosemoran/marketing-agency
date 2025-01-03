import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { useRef } from "react";

import moment from "moment";
import Link from "next/link";

interface IBlogCardSearchProps {
  data: IPostApi;
  index: number;
}

function BlogCardSearch({ data }: IBlogCardSearchProps) {
  const titleRef = useRef<HTMLParagraphElement>(null);

  return (
    <li>
      <Link
        href={`/blog/${data.slug}`}
        onMouseEnter={() => {
          // const img = document.getElementById(index)
          // img.classList.add('object-fill')
          titleRef.current!.classList.add("text-indigo-400");
        }}
        onMouseLeave={() => {
          // const img = document.getElementById(index)
          // img.classList.remove('object-fill')
          titleRef.current!.classList.remove("text-indigo-500");
        }}
        className="block transition duration-300 ease-in-out"
      >
        <div className="flex items-center   my-10 ">
          <div className="lg:flex min-w-0 lg:flex-1 items-center">
            <div className="min-w-0 flex-1 px-8 p-4 ">
              <p
                ref={titleRef}
                className="  leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out"
              >
                {data.title.length > 80 ? data.title.slice(0, 79) : data.title}
              </p>
              <div className="">
                <span className=" hover:text-indigo-500 dark:hover:text-indigo-400  mx-1 font-medium text-lm-third-text dark:text-dm-secondary-text text-sm ">
                  <Link href={`/category/${data.category.slug}`}>
                    {data.category.name}
                  </Link>
                </span>{" "}
                <span className="text-lm-secondary">&middot;</span>
                <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">
                  {moment(data.published).format("LL")}
                </span>{" "}
                <span className="text-lm-secondary">&middot;</span>
                <span className="mt-2 mx-2 font-medium text-lm-third-text dark:text-dm-secondary-text text-sm">
                  {data.time_stamp} min read
                </span>
                <p className="mt-4 text-lg font-regular text-lm-third-text leading-8">
                  {data.description.length > 150
                    ? data.description.slice(0, 149)
                    : data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default BlogCardSearch;

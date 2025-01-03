"use client";

import { postsSoftware as posts } from "@/app/shared/data/posts";

import Image from "next/image";

function ServiceCard() {
  // const handlerMouseEnter = () => {
  //   const $titleElement = document.getElementById("notice-message");
  //   $titleElement?.classList.add("text-orange-500");
  //   $titleElement?.classList.remove("text-gray-900");
  // };

  // const handlerMouseLeave = () => {
  //   const $titleElement = document.getElementById("notice-message");
  //   $titleElement?.classList.remove("text-orange-500");
  //   $titleElement?.classList.add("text-gray-900");
  // };

  return (
    <div className="flex w-full gap-5 drop-shadow-sm outline-slate-400">
      {posts.map((element, index) => {
        return (
          <div
            key={index}
            className="w-full relative p-8 h-96 lg:h-[200pm] bg-lm-primary dark:bg-dm-secondary hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <div className="w-full">
              <Image
                width={40}
                height={40}
                src={element.img!}
                alt={element.title}
              />
              <h2 className="text-xl font-semibold text-lm-third-text dark:text-dm-primary-text pt-8">
                {element.title}
              </h2>
              <p className="text-lg font-regular text-lm-primary-text dark:text-dm-secondary-text pt-4">
                {element.title}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 p-8">
              <button
                id="notice-message"
                // onMouseEnter={handlerMouseEnter}
                // onMouseLeave={handlerMouseLeave}
                className="items-end text-xl font-semibold text-lm-third-text dark:text-dm-third-text pt-8 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ServiceCard;

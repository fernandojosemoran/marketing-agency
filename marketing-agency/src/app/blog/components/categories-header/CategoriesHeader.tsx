"use client";

import "./categories-header.css";

import { useRouter, usePathname } from "next/navigation";
import { Category } from "@/domain/interfaces/category.api.interface";
import { useState } from "react";

import FormTextField from "@/app/shared/components/form/FormTextField";

interface ICategoriesHeaderProps {
  categories: Category[];
}

function CategoriesHeader({ categories }: ICategoriesHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [term, setTerm] = useState<string>("");

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term.trim().length === 0) return;
    router.push(`/blog/search?s=${encodeURIComponent(term)}`);
  };

  const tailwindClasses = (slug: string): string => {
    return pathname === `/${slug}` ? "text-indigo-500" : "text-gray-900";
  };

  return (
    <div className="w-full mt-8 bg-lm-primary dark:bg-dm-primary py-8">
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-12 md:grid-rows-1">
        <div className="col-span-10">
          <div className="space-x-8 px-2 md:px-12">
            <div className="relative">
              <nav className="relative -mb-6 w-full pb-6">
                <ul
                  role="list"
                  className="mx-2 md:mx-4 flex scrollbar-x space-x-8 sm:mx-6 lg:mx-0 lg:gap-x-8 lg:space-x-0"
                >
                  {categories.map((element: Category, index: number) => {
                    return (
                      <button
                        key={index}
                        className={`${tailwindClasses(element.slug)} 
                          py-2 px-6 bg-lm-primary text-lm-third-text dark:bg-dm-secondary dark:text-dm-secondary-text hover:opacity-80 hover:text-indigo-500 dark:hover:text-indigo-300 text-md rounded-md md:text-lg font-regular`}
                      >
                        {element.name}
                      </button>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <form
          className="flex relative justify-center mr-10 mt-1 col-span-2"
          onSubmit={handlerSubmit}
        >
          <FormTextField
            name="search"
            content="Search"
            type="search"
            color="#818cf8"
            onChange={(event) => setTerm(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default CategoriesHeader;

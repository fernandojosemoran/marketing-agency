// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { Category } from "@/domain/interfaces/category.api.interface";

import Link from "next/link";

interface ICategoriesHeaderProps {
  categories: Category[];
}

function CategoriesHeader({ categories }: ICategoriesHeaderProps) {
  const pathName = usePathname();
  const router = useRouter();

  const [term, setTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => router.push("/s=" + term), 300);
    setTerm("");
  };

  return (
    <div className="w-full bg-gray-100 py-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="space-x-8 px-6">
            <div className="relative">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul role="list" className="mx-4 inline-flex space-x-6 sm:mx-6 ">
                  <Link
                    href="/blog"
                    className={`${
                      pathName === "/blog"
                        ? "text-indigo-500 dark:text-indigo-400 bg-lm-primary"
                        : "text-lm-third-text dark:text-dm-secondary-text hover:text-indigo-500 dark:hover:text-indigo-400 border border-lm-primary hover:border-lm-secondary"
                    } py-2 px-6   rounded-md text-lg font-regular`}
                  >
                    All
                  </Link>
                  {categories &&
                    categories.map((category, index) => (
                      <Link
                        href={`/category/${category.slug}`}
                        key={index}
                        className={`${
                          pathName === `/category/${category.slug}`
                            ? "text-indigo-500 dark:text-indigo-400 bg-lm-primary"
                            : "text-lm-third-text border border-lm-secondary hover:border-lm-third"
                        } py-2 px-6 rounded-md text-lg font-regular`}
                      >
                        {category.name}
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative col-span-3 mr-8"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="bx bx-search-alt text-xl text-lm-third-text"></i>
          </div>
          <input
            id="search"
            name="search"
            value={term}
            onChange={(e) => handleChange(e)}
            type="search"
            className={`
                            py-2.5 pl-10 pr-3 
                            block w-full rounded-md
                            border border-gray-200
                            focus:border-gray-200 focus:ring-gray-200
                            focus:outline-none focus:ring-1
                            placeholder-gray-600 focus:placeholder-gray-500
                        `}
          />
        </form>
      </div>
    </div>
  );
}
export default CategoriesHeader;

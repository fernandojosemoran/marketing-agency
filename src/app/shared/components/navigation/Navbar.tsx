"use client";

import { Modal } from "../Modal";
import { Menu } from "../../icons";
import { useState } from "react";

import Link from "next/link";
import useModal from "@/app/shared/hooks/useModal";
import CloseIcon from "../../icons/Close";

interface INavbarRoots {
  id: number;
  url: string;
  urlName: string;
  classUrl: string;
}

const navbarRoots: INavbarRoots[] = [
  {
    id: 1,
    url: "/cases",
    urlName: "Cases",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500 transition duration-300 ease-in-out",
  },
  {
    id: 2,
    url: "/services",
    urlName: "Services",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500 transition duration-300 ease-in-out",
  },
  {
    id: 3,
    url: "/about",
    urlName: "About",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500 transition duration-300 ease-in-out",
  },
  {
    id: 4,
    url: "/careers",
    urlName: "Careers",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500 transition duration-300 ease-in-out",
  },
  {
    id: 5,
    url: "/blog",
    urlName: "Blog",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500 transition duration-300 ease-in-out",
  },
  {
    id: 6,
    url: "/contact",
    urlName: "Contact",
    classUrl:
      "text-lg font-medium border-white leading-6 text-gray-900 dark:text-dm-secondary-text dark:border-none hover:underline hover:underline-offset-4 select-none mx-4 border-b-2 hover:border-orange-500",
  },
];

const menuStyles = {
  close: "hidden ml-4 mt-2 flex-shrink-0 md:flex flex-row items-center",
  open: "absolute top-0 right-0 left-0 bottom-0 w-screen h-screen transition duration-500 bg-black opacity-opacity-55 flex flex-col justify-center items-center gap-2",
};

const Navbar = () => {
  const { closeModal, isOpen, openModal } = useModal();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handlerOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="bg-lm-primary text-gray-700 dark:bg-dm-secondary border-b-gray-500 dark:text-dm-secondary-text w-full py-2 my-0 transition duration-300 ease-in-out shadow-navbarShadow fixed top-0 flex flex-col justify-center z-50">
      <ol className="border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2 ">
          <li className="ml-4 mt-2">
            <Link href="/" className="text-lg font-medium leading-6">
              Epic Strategy
            </Link>
          </li>

          <ul className={isOpenMenu ? menuStyles.open : menuStyles.close}>
            <CloseIcon
              className={`
                ${isOpenMenu ? "visible" : "hidden"} 
                fixed top-5 right-5 hover:cursor-pointer hover:opacity-50`}
              onClick={() => setIsOpenMenu(false)}
            />
            {navbarRoots.map((element) => (
              <Link
                href={element.url}
                className={element.classUrl}
                key={element.id}
                onClick={() => setIsOpenMenu(false)}
              >
                {element.urlName}
              </Link>
            ))}

            <button
              type="button"
              className="md:ml-10 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={openModal}
            >
              Login
            </button>
            <Modal closeModal={closeModal} isOpen={isOpen} />
          </ul>
          <Menu
            className="md:hidden pr-4 hover:cursor-pointer"
            onClick={handlerOpenMenu}
          />
        </div>
      </ol>
    </nav>
  );
};

export default Navbar;

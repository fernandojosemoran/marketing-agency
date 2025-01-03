"use client";

import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useEffect } from "react";
import {
  CareersFeatures,
  CareersHeader,
  PositionsList,
  Testimonial,
} from "./components";

import Image from "next/image";

export default function CareersPage() {
  useEffect(() => toggleDarkMode());

  return (
    <>
      <div className="pt-28 bg-lm-primary dark:bg-dm-primary">
        <CareersHeader />
        <Testimonial />
        <div className="">
          <div className=" mx-auto lg:mx-12 pt-24 pb-12">
            <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-lm-third-text dark:text-dm-primary-text">
              Work with top notch companies
            </h3>
          </div>
          <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="max-h-12 max-w-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image
                  width={48}
                  height={48}
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="max-h-12 max-w-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image
                  width={48}
                  height={48}
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="max-h-12 max-w-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image
                  width={48}
                  height={48}
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="max-h-12 max-w-12 col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image
                  width={48}
                  height={48}
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="max-h-12 max-w-12 col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <Image
                  width={48}
                  height={48}
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
        <CareersFeatures />
        <CareersFeatures />
        <PositionsList />
      </div>
    </>
  );
}

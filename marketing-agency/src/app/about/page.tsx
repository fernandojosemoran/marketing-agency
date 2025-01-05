"use client";

import {
  AboutFeatures,
  AboutHeader,
  AboutImages,
  AboutTeam,
  Clients,
} from "./components";

import Image from "next/image";
import TestStats from "./components/test-stats/TestStats";
import gitlab from "@/assets/logos/gitlab.svg";
import nextjs from "@/assets/logos/nextjs.svg";
import typescript from "@/assets/logos/typescript.svg";
import Link from "next/link";
import { useEffect } from "react";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";

export default function AboutPage() {
  useEffect(() => toggleDarkMode());

  return (
    <div className="pt-28">
      <AboutHeader />
      <TestStats />
      <AboutImages />
      <Clients />
      <div className="bg-lm-primary dark:bg-dm-primary">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 px-20">
            <div className="relative h-12 w-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image width={48} height={48} src={gitlab} alt="gitlab" />
            </div>
            <div className="relative h-12 w-12 col-span-1 bg-lm-third rounded-[400px] flex justify-center md:col-span-2 lg:col-span-1">
              <Image width={48} height={48} src={nextjs} alt="nextjs" />
            </div>
            <div className="relative h-12 w-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image width={48} height={48} src={typescript} alt="typescript" />
            </div>
            <div className="relative h-12 w-12 col-span-1 bg-lm-third rounded-[400px] flex justify-center md:col-span-3 lg:col-span-1">
              <Image width={48} height={48} src={nextjs} alt="next js" />
            </div>
            <div className="relative h-12 w-12 col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <Image width={48} height={48} src={gitlab} alt="gitlab" />
            </div>
          </div>
        </div>
      </div>
      <AboutFeatures />
      <AboutTeam />
      <div className="bg-lm-primary dark:bg-dm-third">
        <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600 dark:text-indigo-400">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

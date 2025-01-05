"use client";

import { useEffect } from "react";

import {
  BlogList,
  CallToAction,
  Cases,
  Features,
  Header,
  Incentives,
  LogoCloud,
} from "./home/components";

import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import PageController from "./page.controller";
import CategoryService from "./shared/services/category.service";
import { useAppDispatch } from "./shared/hooks";

const controller: PageController = new PageController(new CategoryService());

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    toggleDarkMode();
    controller.getCategories(dispatch);
  });

  return (
    <div className="pt-28">
      <Header />
      <Incentives />
      <Cases />
      <Features />
      <CallToAction />
      <LogoCloud />
      <BlogList />
    </div>
  );
}

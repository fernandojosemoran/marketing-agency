"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { postsSoftware as posts } from "@/app/shared/data/posts";

import Carousel from "react-slick";
import CaseCard from "./CaseCard";
import { IPost } from "../interfaces/posts.interface";

function CasesList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28 dark:dark:bg-dm-third">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-lm-primary dark:bg-dm-third sm:h-2/3" />
      </div>

      <div className="relative mx-auto max-w-3xl drop-shadow-sm border-slate-600">
        <Carousel {...settings}>
          {posts.map((element: IPost, index: number) => (
            <CaseCard key={index} index={index} data={element} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CasesList;

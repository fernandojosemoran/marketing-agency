"use client";

import React, { useEffect } from "react";
import { ServiceHeader, ServiceList } from "./components";
import { postsDesign, postsSoftware } from "../shared/data/posts";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";

export default function ServicePage() {
  useEffect(() => toggleDarkMode());

  return (
    <>
      <ServiceHeader />
      <div className="py-12 mt-40 bg-gray-50 dark:bg-dm-third">
        <ServiceList
          posts={postsSoftware}
          sectionTitle={"Software and Product Development"}
        />
        <ServiceList posts={postsDesign} sectionTitle={"Design Services"} />
      </div>
    </>
  );
}

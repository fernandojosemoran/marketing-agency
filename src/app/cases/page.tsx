"use client";

import { useEffect } from "react";
import { CasesHeader, CasesList } from "./components";
import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";

export default function CasesPage() {
  useEffect(() => toggleDarkMode());

  return (
    <div className="pt-28 dark:bg-dm-primary overflow-x-hidden">
      <CasesHeader />
      <CasesList />
    </div>
  );
}

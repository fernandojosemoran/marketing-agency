"use client";

import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => toggleDarkMode());

  return <div className="pt-28">Contact</div>;
}

import { useEffect } from "react";
import darkMode from "./utilities/dark-mode";

interface IGlobalLayoutProps {
    children: React.ReactNode;
}

function GlobalLayout({ children }: IGlobalLayoutProps) {
  useEffect(() => darkMode(), []);  

  return (
    <div className="dark:bg-secondary dark:text-backgroundLight bg-backgroundLight text-secondary w-screen h-screen overflow-x-hidden">
        { children }
    </div>
  );
}

export default GlobalLayout;
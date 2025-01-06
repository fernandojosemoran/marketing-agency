import { useEffect } from "react";
import darkMode from "./utilities/dark-mode";
import Footer from "./components/footer/Footer";

interface IGlobalLayoutProps {
    children: React.ReactNode;
}

function GlobalLayout({ children }: IGlobalLayoutProps) {
  useEffect(() => darkMode(), []);  

  return (
    <div className="w-screen h-screen overflow-x-hidden">
        { children }
        <Footer />
    </div>
  );
}

export default GlobalLayout;
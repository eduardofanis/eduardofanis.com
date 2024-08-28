import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LanguageSelector from "./components/language-selector";
import Sidebar from "./components/sidebar";
import ThemeToggle from "./components/theme-toggle";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import { ThemeProvider } from "./providers/theme-provider";

export default function App() {
  const [sidebarRef, setSidebarRef] =
    React.useState<React.RefObject<HTMLDivElement> | null>(null);
  const [headerRef, setHeaderRef] =
    React.useState<React.RefObject<HTMLDivElement> | null>(null);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const ref = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);

  const sidebarWidth = sidebarRef?.current?.clientWidth || 0;
  const headerHeight = headerRef?.current?.clientHeight || 0;

  React.useEffect(() => {
    setSidebarRef(ref);
    setHeaderRef(ref2);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Sidebar sidebarRef={ref} />
      <div className="flex flex-col items-center">
        <Header headerRef={ref2} />
        <div
          className="flex flex-col items-center"
          style={{
            marginLeft: sidebarWidth,
            marginTop: headerHeight,
            marginBottom: 80,
          }}
        >
          <main className="px-5 max-w-[800px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/stack" element={<Stack />} />
            </Routes>
          </main>
        </div>

        <div className="fixed hidden top-5 right-5 xl:flex gap-2">
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

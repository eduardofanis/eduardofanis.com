import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import Sidebar from "./components/sidebar";
import ThemeToggle from "./components/theme-toggle";
import { cn } from "./lib/utils";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import { ThemeProvider } from "./providers/theme-provider";

export default function App() {
  const [sidebarRef, setSidebarRef] =
    React.useState<React.RefObject<HTMLDivElement> | null>(null);

  const ref = React.useRef<HTMLDivElement>(null);

  const sidebarWidth = sidebarRef?.current?.clientWidth || 0;

  React.useEffect(() => {
    setSidebarRef(ref);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className={cn("flex")}>
        <Sidebar sidebarRef={ref} />
        <div
          className="w-full flex flex-col items-center mt-6"
          style={{
            marginLeft: sidebarWidth,
            marginBottom: 80,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </div>

        <div className={cn("fixed top-5 right-5 flex gap-2")}>
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

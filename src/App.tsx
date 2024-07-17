import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import Sidebar from "./components/sidebar";
import ThemeToggle from "./components/theme-toggle";
import { cn } from "./lib/utils";
import Home from "./pages/Home";
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
          className="w-full"
          style={{
            marginLeft: sidebarWidth + 300,
            marginRight: 300,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <div className={cn("absolute top-5 right-5 flex gap-2")}>
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

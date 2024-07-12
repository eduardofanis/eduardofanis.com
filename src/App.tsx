import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import Sidebar from "./components/sidebar";
import ThemeToggle from "./components/theme-toggle";
import { cn } from "./lib/utils";
import Home from "./pages/Home";
import { ThemeProvider } from "./providers/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className={cn("flex")}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className={cn("absolute top-5 right-5 flex gap-2")}>
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

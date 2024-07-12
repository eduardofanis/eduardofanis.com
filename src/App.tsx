import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";
import ThemeToggle from "./components/ThemeToggle";
import { cn } from "./lib/utils";
import { ThemeProvider } from "./providers/theme-provider";

export default function Home() {
  const [t] = useTranslation("global");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div>
        {t("sidebar.projects")}

        <div className={cn("absolute top-5 right-5 flex gap-2")}>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </ThemeProvider>
  );
}

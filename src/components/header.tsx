import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageSelector from "./language-selector";
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";

export default function Header({
  headerRef,
}: {
  headerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <header
      ref={headerRef}
      className="xl:hidden items-center fixed p-4 flex w-full max-w-[800px] justify-between bg-background z-50"
    >
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <Sidebar onHeader={true} />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}

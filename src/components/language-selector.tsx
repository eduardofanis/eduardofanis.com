import { getUserLocale } from "get-user-locale";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function LanguageSelector() {
  const [, i18n] = useTranslation("global");

  function handleChangeLanguage(lang: string) {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  }

  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : getUserLocale();

  const defaultLanguage =
    language == "en-US" ? "en-US" : language == "pt-BR" ? "pt-BR" : "en-US";

  return (
    <Select onValueChange={handleChangeLanguage} defaultValue={defaultLanguage}>
      <SelectTrigger className="w-[80px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectItem value="en-US">
            <img src="/us.svg" className={cn("w-6")} />
          </SelectItem>
          <SelectItem value="pt-BR">
            <img src="/br.svg" className={cn("w-6")} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

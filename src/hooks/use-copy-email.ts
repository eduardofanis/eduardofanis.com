import { toast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
import { TFunction } from "i18next";

export function handleCopyEmail(t: TFunction) {
  copy("eduardo.fanis@hotmail.com");
  toast({
    title: t("toasts.copyEmail.label"),
    description: t("toasts.copyEmail.description"),
  });
}

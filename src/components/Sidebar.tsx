import copy from "copy-to-clipboard";
import { ArrowUpRight, ClipboardCopy, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getMenuList } from "../lib/menu-list";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "./ui/use-toast";

export default function Sidebar() {
  const [t] = useTranslation("global");
  const { pathname } = useLocation();

  const menuList = getMenuList(pathname, t);

  function handleCopyEmail() {
    copy("eduardo.fanis@hotmail.com");
    toast({
      title: t("toasts.copyEmail.label"),
      description: t("toasts.copyEmail.description"),
    });
  }

  return (
    <div className={cn("w-72 p-5 flex flex-col border-r  h-screen fixed")}>
      <div className="flex gap-3">
        <img src="/me.jpg" className="size-12 rounded-md" />
        <div className="flex flex-col justify-center">
          <h1 className="font-medium">Eduardo Fanis</h1>
          <p className="text-xs dark:text-zinc-400 light:text-zinc-800">
            Front-end Developer
          </p>
        </div>
      </div>
      <Separator className={cn("my-5")} />

      {menuList.map(({ groupLabel, menus }, index) => (
        <div className="flex flex-col" key={index}>
          {groupLabel ? (
            <h3 className="mt-6 mb-2 ml-4 font-medium dark:text-zinc-300 text-zinc-700 text-sm">
              {groupLabel}
            </h3>
          ) : (
            <></>
          )}
          {menus.map(({ label, icon: Icon, href, active, externalLink }, i) => (
            <Button
              variant={"ghost"}
              className={cn(
                `${externalLink ? "justify-between" : "justify-start"} ${
                  active && "dark:bg-zinc-800 bg-zinc-100"
                }`
              )}
              key={i}
              asChild
            >
              <Link to={href} target={externalLink ? "_blank" : "_self"}>
                <div className="flex items-center">
                  <Icon className={cn("size-4 mr-4")} />
                  {label}
                </div>
                {externalLink ? (
                  <ArrowUpRight className={cn("size-4")} />
                ) : (
                  <></>
                )}
              </Link>
            </Button>
          ))}
        </div>
      ))}

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button
              onClick={() => handleCopyEmail()}
              variant={"ghost"}
              className={cn("flex justify-between w-full")}
            >
              <div className={`flex items-center`}>
                <Mail className={cn("size-4 mr-4")} />
                Email
              </div>

              <ClipboardCopy className={cn("size-4")} />
            </Button>
          </TooltipTrigger>
          <TooltipContent align="end">
            <p>eduardo.fanis@hotmail.com</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="h-full flex flex-col justify-end ">
        <p className="text-sm dark:text-zinc-700 text-zinc-400">
          © 2024 Eduardo Fanis
        </p>
      </div>
    </div>
  );
}

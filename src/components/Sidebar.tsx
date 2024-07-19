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
import { animated, useTransition } from "@react-spring/web";
import React from "react";
import { toast } from "./ui/use-toast";

export default function Sidebar({
  sidebarRef,
}: {
  sidebarRef: React.RefObject<HTMLDivElement>;
}) {
  const [t] = useTranslation("global");
  const { pathname } = useLocation();
  const [emailIsHovered, setEmailIsHovered] = React.useState(false);

  const menuList = getMenuList(pathname, t);

  function handleCopyEmail() {
    copy("eduardo.fanis@hotmail.com");
    toast({
      title: t("toasts.copyEmail.label"),
      description: t("toasts.copyEmail.description"),
    });
  }

  const avatarIsVisible = pathname !== "/" && pathname !== "/aboutme";

  const avatarRef = React.useRef(null);

  const transition = useTransition(avatarIsVisible, {
    from: { y: -100 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
    to: { y: 0 },
  });

  return (
    <div
      ref={sidebarRef}
      className={cn("w-72 p-5 flex flex-col border-r  h-screen fixed")}
    >
      {transition((style, isVisible) =>
        isVisible ? (
          <div ref={avatarRef}>
            <animated.div style={style} className="flex gap-3">
              <img src="/me.jpg" className="size-12 rounded-md" />
              <div className="flex flex-col justify-center">
                <h1 className="font-medium">Eduardo Fanis</h1>
                <p className="text-xs dark:text-zinc-400 light:text-zinc-800">
                  Front-end Developer
                </p>
              </div>
            </animated.div>
            <Separator className={cn("my-5")} />
          </div>
        ) : (
          ""
        )
      )}

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
                } font-medium`
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
              onMouseEnter={() => setEmailIsHovered(true)}
              onMouseLeave={() => setEmailIsHovered(false)}
              onClick={() => handleCopyEmail()}
              variant={"ghost"}
              className={cn("flex justify-between w-full font-medium")}
            >
              <div className={`flex items-center`}>
                <Mail className={cn("size-4 mr-4")} />
                {emailIsHovered ? t("sidebar.copyEmail") : "Email"}
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

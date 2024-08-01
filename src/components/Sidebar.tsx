import { ArrowUpRight, Copy, Mail } from "lucide-react";
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
import { handleCopyEmail } from "@/hooks/use-copy-email";
import { useDefaultFontSize } from "@/hooks/use-default-fontsize";
import useWindowDimensions from "@/hooks/use-window-dimensions";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

export default function Sidebar({
  sidebarRef,
}: {
  sidebarRef: React.RefObject<HTMLDivElement>;
}) {
  const [t] = useTranslation("global");
  const { pathname } = useLocation();
  const [emailIsHovered, setEmailIsHovered] = React.useState(false);
  const [avatarRef, setAvatarRef] =
    React.useState<React.RefObject<HTMLDivElement> | null>(null);
  const [height, setHeight] = React.useState(0);

  const { width } = useWindowDimensions();

  const isLargerDisplay = width >= 1280;

  const menuList = getMenuList(pathname, t);

  const avatarIsVisible = pathname !== "/" && pathname !== "/aboutme";
  const ref = React.useRef<HTMLDivElement>(null);

  const [style, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const defaultFontSize = useDefaultFontSize() ?? 16;

  React.useEffect(() => {
    setAvatarRef(ref);
    setHeight(avatarRef?.current!.clientHeight ?? 0);
    function handleDeslocate() {
      api.start({
        from: {
          y: avatarIsVisible ? -(height + 1.25 * defaultFontSize) : 0,
        },
        to: {
          y: avatarIsVisible ? 0 : -(height + 1.25 * defaultFontSize),
        },
      });
    }

    handleDeslocate();
  }, [api, avatarIsVisible, avatarRef, height, defaultFontSize]);

  return (
    <div
      ref={sidebarRef}
      className="lg:w-[88px] xl:w-72 xl:fixed p-5 xl:flex hidden flex-col border-r h-screen fixed transition-all overflow-hidden truncate"
    >
      <animated.div style={style}>
        <div
          ref={ref}
          className={`${
            !avatarIsVisible ? "opacity-0" : ""
          } transition-opacity`}
        >
          <div className="flex gap-3">
            <img src="/me.jpg" className="size-12 rounded-md" />
            <div className="flex flex-col justify-center">
              <h1 className="font-medium hidden xl:block">Eduardo Fanis</h1>
              <p className="text-xs dark:text-zinc-400 light:text-zinc-800 hidden xl:block">
                Front-end Developer
              </p>
            </div>
          </div>
          <Separator className={cn("my-5")} />
        </div>
        {menuList.map(({ groupLabel, menus }, index) => (
          <div className="flex flex-col" key={index}>
            {groupLabel ? (
              isLargerDisplay ? (
                <h3 className="mt-6 mb-2 ml-4 font-medium dark:text-zinc-300 text-zinc-700 text-sm">
                  {groupLabel}
                </h3>
              ) : (
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger className="mt-6 mb-2 ml-4" asChild>
                      <h3 className="font-medium dark:text-zinc-300 text-zinc-700 text-sm">
                        ...
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent align="start">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            ) : (
              <></>
            )}
            {menus.map(
              ({ label, icon: Icon, href, active, externalLink }, i) => (
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
                    <div className="flex items-center gap-4">
                      <Icon className={cn("size-4")} />
                      {isLargerDisplay ? label : ""}
                    </div>
                    {externalLink && isLargerDisplay ? (
                      <ArrowUpRight className={cn("size-4")} />
                    ) : (
                      <></>
                    )}
                  </Link>
                </Button>
              )
            )}
          </div>
        ))}

        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                onMouseEnter={() => setEmailIsHovered(true)}
                onMouseLeave={() => setEmailIsHovered(false)}
                onClick={() => handleCopyEmail(t)}
                variant={"ghost"}
                className={cn("flex justify-between w-full font-medium")}
              >
                <div className={`flex items-center gap-4`}>
                  <Mail className={cn("size-4")} />
                  {isLargerDisplay
                    ? emailIsHovered
                      ? t("sidebar.copyEmail")
                      : "Email"
                    : ""}
                </div>
                {isLargerDisplay ? <Copy className={cn("size-4")} /> : <></>}
              </Button>
            </TooltipTrigger>
            <TooltipContent align="end">
              <p>eduardo.fanis@hotmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </animated.div>

      <div className="h-full flex flex-col justify-end ">
        {isLargerDisplay ? (
          <p className="text-sm dark:text-zinc-700 text-zinc-400">
            © 2024 Eduardo Fanis
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

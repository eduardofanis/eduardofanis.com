import { TFunction } from "i18next";
import {
  FileStack,
  Github,
  Home,
  Layers,
  Linkedin,
  LucideIcon,
  User,
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  externalLink?: boolean;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string, t: TFunction): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: t("sidebar.home"),
          active: pathname == "/",
          icon: Home,
        },
      ],
    },
    {
      groupLabel: t("sidebar.me"),
      menus: [
        {
          href: "/aboutme",
          label: t("sidebar.about"),
          active: pathname.includes("/aboutme"),
          icon: User,
        },
        {
          href: "/projects",
          label: t("sidebar.projects"),
          active: pathname.includes("/projects"),
          icon: FileStack,
        },
        {
          href: "/stack",
          label: t("sidebar.stack"),
          active: pathname.includes("/stack"),
          icon: Layers,
        },
      ],
    },
    {
      groupLabel: "Socials",
      menus: [
        {
          href: "https://www.github.com/eduardofanis",
          label: "Github",
          active: false,
          icon: Github,
          externalLink: true,
        },
        {
          href: "https://www.linkedin.com/in/faniseduardo/",
          label: "Linkedin",
          active: false,
          icon: Linkedin,
          externalLink: true,
        },
      ],
    },
  ];
}

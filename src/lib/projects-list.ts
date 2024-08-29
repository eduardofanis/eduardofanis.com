import gerencie from "@/assets/images/project-gerencie/gerencie.jpeg";
import gerencie2 from "@/assets/images/project-gerencie/gerencie2.jpeg";
import gerencie3 from "@/assets/images/project-gerencie/gerencie3.jpeg";
import gerencie4 from "@/assets/images/project-gerencie/gerencie4.jpeg";
import gerencie5 from "@/assets/images/project-gerencie/gerencie5.jpeg";
import gerencie6 from "@/assets/images/project-gerencie/gerencie6.jpeg";
import { TFunction } from "i18next";

import bikcraft from "@/assets/images/project-bikcraft/bikcraft.jpeg";
import bikcraft2 from "@/assets/images/project-bikcraft/bikcraft2.jpeg";
import bikcraft3 from "@/assets/images/project-bikcraft/bikcraft3.jpeg";
import bikcraft4 from "@/assets/images/project-bikcraft/bikcraft4.jpeg";

import dogs from "@/assets/images/project-dogs/dogs.jpeg";
import dogs2 from "@/assets/images/project-dogs/dogs2.jpeg";
import dogs3 from "@/assets/images/project-dogs/dogs3.jpeg";
import dogs4 from "@/assets/images/project-dogs/dogs4.jpeg";

import nextchat from "@/assets/images/project-next-chat/nextchat1.jpeg";
import nextchat2 from "@/assets/images/project-next-chat/nextchat2.jpeg";
import nextchat3 from "@/assets/images/project-next-chat/nextchat3.jpeg";
import nextchat4 from "@/assets/images/project-next-chat/nextchat4.jpeg";
import nextchat5 from "@/assets/images/project-next-chat/nextchat5.jpeg";
import nextchatapi from "@/assets/images/project-next-chat/nextchatapi.jpeg";

import notionpomodoro from "@/assets/images/project-notion-pomodoro/notionpomodoro.jpeg";
import notionpomodoro2 from "@/assets/images/project-notion-pomodoro/notionpomodoro2.jpeg";

type Project = {
  name: string;
  description: string;
  year: string;
  images: string[];
  url: string;
  source: string;
  stacks: string[];
};

export function getProjectsList(t: TFunction): Project[] {
  return [
    {
      name: "gerencie",
      description: t("projectsDescriptions.gerencie"),
      year: "2024",
      images: [gerencie, gerencie2, gerencie3, gerencie4, gerencie5, gerencie6],
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS", "Shadcn UI", "Zod", "Firebase"],
    },
    {
      name: "Bikcraft",
      description: t("projectsDescriptions.bikcraft"),
      year: "2024",
      images: [bikcraft, bikcraft2, bikcraft3, bikcraft4],
      url: "https://eduardofanis.github.io/bikcraft/",
      source: "https://github.com/eduardofanis/bikcraft",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Dogs",
      description: t("projectsDescriptions.dogs"),
      year: "2024",
      images: [dogs, dogs2, dogs3, dogs4],
      url: "https://dogs-phi-rosy.vercel.app",
      source: "https://github.com/eduardofanis/dogs",
      stacks: ["ReactJS", "Javascript"],
    },
    {
      name: "Next Chat",
      description: t("projectsDescriptions.nextchat"),
      year: "2024",
      images: [nextchat, nextchat2, nextchat3, nextchat4, nextchat5],
      url: "https://next-chat-pst2.vercel.app/",
      source: "https://github.com/eduardofanis/next-chat",
      stacks: ["NextJS", "Typescript"],
    },
    {
      name: "Next Chat API",
      description: t("projectsDescriptions.nextchatapi"),
      year: "2024",
      images: [nextchatapi],
      url: "https://github.com/eduardofanis/api-mensagens-node-typescript",
      source: "https://github.com/eduardofanis/api-mensagens-node-typescript",
      stacks: ["NodeJS", "Typescript", "MongoDB"],
    },
    {
      name: "Notion Pomodoro",
      description: t("projectsDescriptions.notionpomodoro"),
      year: "2024",
      images: [notionpomodoro, notionpomodoro2],
      url: "https://eduardofanis.github.io/notion_pomodoro/",
      source: "https://github.com/eduardofanis/notion_pomodoro",
      stacks: ["HTML", "CSS", "Javascript"],
    },
  ];
}

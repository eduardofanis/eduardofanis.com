import gerencie from "@/assets/images/project-gerencie/gerencie.jpeg";
import gerencie2 from "@/assets/images/project-gerencie/gerencie2.jpeg";
import gerencie3 from "@/assets/images/project-gerencie/gerencie3.jpeg";
import gerencie4 from "@/assets/images/project-gerencie/gerencie4.jpeg";
import gerencie5 from "@/assets/images/project-gerencie/gerencie5.jpeg";
import gerencie6 from "@/assets/images/project-gerencie/gerencie6.jpeg";

import bikcraft from "@/assets/images/project-bikcraft/bikcraft.jpeg";
import bikcraft2 from "@/assets/images/project-bikcraft/bikcraft2.jpeg";
import bikcraft3 from "@/assets/images/project-bikcraft/bikcraft3.jpeg";
import bikcraft4 from "@/assets/images/project-bikcraft/bikcraft4.jpeg";

import dogs from "@/assets/images/project-dogs/dogs.jpeg";
import dogs2 from "@/assets/images/project-dogs/dogs2.jpeg";
import dogs3 from "@/assets/images/project-dogs/dogs3.jpeg";
import dogs4 from "@/assets/images/project-dogs/dogs4.jpeg";

type Project = {
  name: string;
  description: string;
  year: string;
  images: string[];
  url: string;
  source: string;
  stacks: string[];
};

export function getProjectsList(): Project[] {
  return [
    {
      name: "gerencie",
      description:
        "Web app to manage costumers & money operations called gerencie.",
      year: "2024",
      images: [gerencie, gerencie2, gerencie3, gerencie4, gerencie5, gerencie6],
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS", "Shadcn UI", "Zod", "Firebase"],
    },
    {
      name: "Bikcraft",
      description: "Ecommerce para bicicletas.",
      year: "2024",
      images: [bikcraft, bikcraft2, bikcraft3, bikcraft4],
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/projeto-bikcraft",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Dogs",
      description: "Site Instagram like, but for dogs.",
      year: "2024",
      images: [dogs, dogs2, dogs3, dogs4],
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/projeto-bikcraft",
      stacks: ["ReactJS"],
    },
  ];
}

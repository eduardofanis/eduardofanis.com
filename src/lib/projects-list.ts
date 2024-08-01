type Project = {
  name: string;
  description: string;
  year: string;
  image: string;
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
      image: "gerencie.jpeg",
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS"],
    },
    {
      name: "gerencie",
      description:
        "Web app to manage costumers & money operations called gerencie.",
      year: "2024",
      image: "gerencie.jpeg",
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS"],
    },
    {
      name: "gerencie",
      description:
        "Web app to manage costumers & money operations called gerencie.",
      year: "2024",
      image: "gerencie.jpeg",
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS"],
    },
    {
      name: "gerencie",
      description:
        "Web app to manage costumers & money operations called gerencie.",
      year: "2024",
      image: "gerencie.jpeg",
      url: "https://gerencie.vercel.app",
      source: "https://github.com/eduardofanis/gerencie",
      stacks: ["ReactJS", "TailwindCSS"],
    },
  ];
}

import AnimatedContainer from "@/components/animated-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const myProjects = [
  {
    name: "gerencie",
    description:
      "Web app to manage costumers & money operations called gerencie.",
    image: "gerencie.jpeg",
    url: "https://gerencie.vercel.app",
    source: "https://github.com/eduardofanis/gerencie",
    stacks: ["ReactJS", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl">Projects</h1>
      <p className="text-zinc-500 text-sm">
        Where ideas turn into beautiful UIs.
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 mt-8">
        {myProjects.map(({ name, description, image, url, source, stacks }) => (
          <div className="p-2 rounded-md hover:dark:bg-[#0e0e11] hover:bg-zinc-50 transition-all cursor-pointer">
            <img src={image} alt={name} className="rounded-md" />
            <h2 className="flex justify-between items-center mt-2 text-lg mb-1">
              {name} <span className="text-xs text-zinc-500">2024</span>
            </h2>
            <p className="text-zinc-400 text-sm">{description}</p>
            <div className="flex gap-2 mt-2">
              {stacks.map((stack) => (
                <Badge>{stack}</Badge>
              ))}
            </div>
            <div className="w-full flex justify-end gap-2 mt-4">
              <Button variant="ghost" asChild>
                <Link to={source} target="_blank">
                  <Github className="size-4 mr-2" /> Source
                </Link>
              </Button>
              <Button asChild>
                <Link to={url} target="_blank">
                  <ArrowUpRight className="size-4 mr-2" />
                  Visit
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AnimatedContainer>
  );
}

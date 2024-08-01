import AnimatedContainer from "@/components/animated-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getProjectsList } from "@/lib/projects-list";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Projects() {
  const [t] = useTranslation("global");

  const projects = getProjectsList();

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl">{t("projects.title")}</h1>
      <p className="text-zinc-500 text-sm">{t("projects.description")}</p>

      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-8 mt-8">
        {projects.map(
          ({ name, description, year, image, url, source, stacks }, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div className="p-3 rounded-md hover:dark:bg-[#0e0e11] hover:scale-105 hover:bg-zinc-50 transition-all text-left">
                  <img
                    src={image}
                    alt={name}
                    className="rounded-md  transition-all"
                  />
                  <h2 className="flex justify-between items-center mt-2 text-lg mb-1">
                    {name} <span className="text-xs text-zinc-500">{year}</span>
                  </h2>
                  <p className="text-zinc-400 text-sm">{description}</p>
                  <div className="flex gap-2 mt-2">
                    {stacks.map((stack, index) => (
                      <Badge key={index}>{stack}</Badge>
                    ))}
                  </div>
                  <div className="w-full flex justify-end gap-2 mt-4 z-50">
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
              </DialogTrigger>
              <DialogContent className="p-10 border-none bg-transparent max-w-[1200px] shadow-none gap-0">
                <img
                  src={image}
                  alt={name}
                  className="rounded-md transition-all"
                />
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </AnimatedContainer>
  );
}

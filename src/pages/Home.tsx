import AnimatedContainer from "@/components/animated-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
import { ArrowUpRight, ChevronRight, Copy, Github } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const techs = ["ReactJS", "React Native", "TypeScript", "JavaScript", "Figma"];

const myProjects = [
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

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [t] = useTranslation("global");

  function handleCopyEmail() {
    copy("eduardo.fanis@hotmail.com");
    toast({
      title: t("toasts.copyEmail.label"),
      description: t("toasts.copyEmail.description"),
    });
  }

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <AnimatedContainer className="mt-6">
      <div className="flex gap-3">
        <img src="me.jpg" alt="Eduardo Fanis" className="size-24 rounded-md" />
        <div className="">
          <h1 className="text-4xl font-semibold">Eduardo Fanis</h1>
          <p className="dark:text-zinc-400 text-zinc-700">
            Front-end Developer & UI Designer
          </p>
          <div className="mt-2 space-x-2">
            {techs.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10 mt-16">
        <div>
          <div className="flex items-center mb-2 justify-between">
            <h2 className="text-xl font-medium">
              💡 {t("home.aboutMe.title")}
            </h2>
            <Button
              variant="link"
              asChild
              className="dark:text-zinc-700 text-zinc-400 p-0"
            >
              <Link to="/aboutme">
                {t("home.seeMore")}
                <ChevronRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>

          <p className="dark:text-zinc-500 text-zinc-500 leading-7 font-text">
            {t("home.aboutMe.text")}
          </p>
        </div>
        <div>
          <div className="flex items-center mb-2 justify-between">
            <h2 className="text-xl font-medium">🖥 {t("home.myWork.title")}</h2>
            <Button
              variant="link"
              asChild
              className="dark:text-zinc-700 text-zinc-400 p-0"
            >
              <Link to="/projects">
                {t("home.seeMore")}
                <ChevronRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>

          <Carousel
            className="w-full max-w-x"
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {myProjects.map(
                (
                  { description, image, name, year, source, stacks, url },
                  index
                ) => (
                  <CarouselItem className="lg:basis-1/2 basis-auto" key={index}>
                    <Dialog>
                      <DialogTrigger>
                        <div className="h-60 dark:bg-zinc-900 cursor-pointer border bg-zinc-100 rounded-md relative">
                          <img
                            src={image}
                            alt={name}
                            className="rounded-md object-cover object-left h-full w-auto"
                          />
                          <div className="absolute h-full w-full bg-black top-0 opacity-0 hover:opacity-80 transition-opacity rounded-md p-4 flex flex-col text-left">
                            <h3 className="opacity-100 text-white text-lg font-medium flex justify-between items-center">
                              {name}
                              <span className="text-xs text-zinc-500">
                                {year}
                              </span>
                            </h3>
                            <p className="opacity-100 text-zinc-200 text-sm">
                              {description}
                            </p>
                            <div className="flex gap-2 mt-2">
                              {stacks.map((stack, index) => (
                                <Badge key={index}>{stack}</Badge>
                              ))}
                            </div>
                            <div className="w-full flex justify-end gap-2 mt-auto">
                              <Button variant="secondary" asChild>
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
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex gap-1 w-full mt-2 justify-center">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                onClick={() => api?.scrollTo(index)}
                variant="outline"
                key={index}
                className={`size-4 rounded-full p-1 flex items-center justify-center ${
                  index + 1 == current && "dark:bg-zinc-700 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            🤝 {t("home.letsWorkTogether.title")}
          </h2>
          <p className="dark:text-zinc-500 text-zinc-500 leading-7 font-text mb-4">
            {t("home.letsWorkTogether.text")}
          </p>
          <Button onClick={handleCopyEmail} variant="outline">
            <Copy className="size-4 mr-3" />
            eduardo.fanis@hotmail.com
          </Button>
        </div>
      </div>
    </AnimatedContainer>
  );
}

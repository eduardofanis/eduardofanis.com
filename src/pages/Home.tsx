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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handleCopyEmail } from "@/hooks/use-copy-email";
import { getProjectsList } from "@/lib/projects-list";
import {
  ArrowUpRight,
  ChevronRight,
  Copy,
  Download,
  Github,
  ZoomIn,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const techs = ["ReactJS", "React Native", "TypeScript", "JavaScript", "Figma"];

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [api2, setApi2] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);
  const [t] = useTranslation("global");

  const projects = getProjectsList(t);

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

  React.useEffect(() => {
    if (!api2) {
      return;
    }
  }, [api2]);

  return (
    <AnimatedContainer className="mt-6">
      <div className="flex gap-3">
        <img src="me.jpg" alt="Eduardo Fanis" className="size-24 rounded-md" />
        <div className="">
          <h1 className="md:text-4xl text-2xl font-semibold">Eduardo Fanis</h1>
          <p className="dark:text-zinc-400 sm:text-base text-sm text-zinc-700">
            Front-end Developer & UI Designer
          </p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {techs.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10 mt-16">
        <div>
          <div className="flex items-center mb-2 justify-between">
            <h2 className="md:text-xl text-base font-medium">
              💡 {t("home.aboutMe.title")}
            </h2>
            <Button
              variant="link"
              asChild
              className="dark:text-zinc-700 text-zinc-400 p-0 hover:scale-125 transition-transform"
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
            <h2 className="md:text-xl text-base font-medium">
              🖥 {t("home.myWork.title")}
            </h2>
            <Button
              variant="link"
              asChild
              className="dark:text-zinc-700 text-zinc-400 p-0 hover:scale-125 transition-transform"
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
              {projects.map(
                (
                  { description, images, name, year, source, stacks, url },
                  index
                ) => (
                  <CarouselItem className="basis-auto" key={index}>
                    <div className="h-60 dark:bg-zinc-900 border bg-zinc-100 rounded-md relative">
                      <img
                        src={images[0]}
                        alt={name}
                        className="rounded-md object-cover object-left h-full w-auto"
                      />
                      <div className="absolute h-full w-full bg-black top-0 opacity-0 hover:opacity-80 transition-opacity rounded-md p-4 flex flex-col text-left">
                        <h3 className="opacity-100 text-white text-lg font-medium flex justify-between items-center">
                          {name}
                          <span className="text-xs text-zinc-500">{year}</span>
                        </h3>
                        <p className="opacity-100 text-zinc-200 text-sm">
                          {description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {stacks.map((stack, index) => (
                            <Badge key={index}>{stack}</Badge>
                          ))}
                        </div>
                        <div className="w-full flex justify-end gap-2 mt-auto">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="secondary" className="p-3">
                                <ZoomIn className="size-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent
                              aria-describedby=""
                              className="py-12 px-0 border-none bg-transparent max-w-full shadow-none gap-0"
                            >
                              <DialogTitle></DialogTitle>
                              <Carousel
                                className="w-full max-w-x"
                                setApi={setApi2}
                                opts={{
                                  align: "center",
                                  loop: true,
                                }}
                              >
                                <CarouselContent>
                                  {images.map((url, index) => (
                                    <CarouselItem
                                      className="basis-auto"
                                      key={index}
                                    >
                                      <img
                                        src={url}
                                        alt={name}
                                        className="rounded-md transition-all w-auto xl:max-h-[600px] lg:max-h-[400px] max-h-[300px]"
                                      />
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <div className="absolute right-[50%] left-[50%] -bottom-20 h-[100px]">
                                  <CarouselPrevious />
                                  <CarouselNext />
                                </div>
                              </Carousel>
                            </DialogContent>
                          </Dialog>
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
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <div className="flex gap-1 w-full mt-4 justify-center relative">
              {Array.from({ length: projects.length }).map((_, index) => (
                <Button
                  onClick={() => api?.scrollTo(index)}
                  variant="outline"
                  key={index}
                  className={`size-4 rounded-full p-1 flex items-center justify-center ${
                    index + 1 == current && "dark:bg-zinc-700 bg-zinc-300"
                  }`}
                />
              ))}
              <CarouselPrevious className="absolute left-0 top-2" />
              <CarouselNext className="absolute right-0 top-2" />
            </div>
          </Carousel>
        </div>
        <div>
          <h2 className="md:text-xl text-base font-medium mb-2">
            🤝 {t("home.letsWorkTogether.title")}
          </h2>
          <p className="dark:text-zinc-500 text-zinc-500 leading-7 font-text mb-4">
            {t("home.letsWorkTogether.text")}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Button onClick={() => handleCopyEmail(t)} variant="outline">
              <Copy className="size-4 mr-3" />
              eduardo.fanis@hotmail.com
            </Button>
            {t("home.or")}
            <Button variant="secondary">
              <Download className="size-4 mr-3" />
              {t("home.download")} CV
            </Button>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}

import AnimatedContainer from "@/components/animated-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
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
import { getProjectsList } from "@/lib/projects-list";
import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [t] = useTranslation("global");

  const projects = getProjectsList(t);

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl">{t("projects.title")}</h1>
      <p className="text-zinc-500 text-sm">{t("projects.description")}</p>

      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-8 mt-8">
        {projects.map(
          ({ name, description, year, images, url, source, stacks }, index) => (
            <div
              key={index}
              className="p-3 rounded-md hover:dark:bg-[#0e0e11] hover:scale-105 hover:bg-zinc-50 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <Dialog>
                  <DialogTrigger>
                    <img
                      src={images[0]}
                      alt={name}
                      className="rounded-md transition-all h-[200px] w-full object-cover hover:scale-[102%]"
                    />
                  </DialogTrigger>
                  <DialogContent
                    aria-describedby=""
                    className="py-12 px-0 border-none bg-transparent max-w-full shadow-none gap-0"
                  >
                    <DialogTitle></DialogTitle>
                    <Carousel
                      className="w-full max-w-x"
                      setApi={setApi}
                      opts={{
                        align: "center",
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        {images.map((url, index) => (
                          <CarouselItem className=" basis-auto" key={index}>
                            <img
                              src={url}
                              alt={name}
                              className="rounded-md transition-all w-auto lg:max-h-[600px] md:max-h-[400px] max-h-[300px]"
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
                <h2 className="flex justify-between items-center mt-2 text-lg mb-1">
                  {name} <span className="text-xs text-zinc-500">{year}</span>
                </h2>
                <p className="text-zinc-400 text-sm">{description}</p>
                <div className="space-y-2 mt-2">
                  {stacks.map((stack, index) => (
                    <Badge className="mr-2" key={index}>
                      {stack}
                    </Badge>
                  ))}
                </div>
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
          )
        )}
      </div>
    </AnimatedContainer>
  );
}

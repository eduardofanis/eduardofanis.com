import AnimatedContainer from "@/components/animated-container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const techs = ["ReactJS", "React Native", "TypeScript", "JavaScript", "Figma"];

export default function Aboutme() {
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
            {techs.map((tech) => (
              <Badge
                variant="secondary"
                className="rounded-md dark:bg-zinc-900 dark:text-zinc-300 text-zinc-800 py-1 px-3 font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div>
        <h2 className="text-xl font-medium mb-2">💡 About me</h2>
        <p className="dark:text-zinc-500 text-zinc-500 leading-7 font-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          nulla ultricies, ultricies lectus vel, sollicitudin velit. Fusce
          lectus enim, maximus sit amet leo a, porttitor euismod diam. Nunc
          cursus turpis id lacus dignissim, ac luctus ex dignissim. Cras
          faucibus fermentum lacus id accumsan. Aliquam mollis nisi vel orci
          pharetra, ut dignissim augue finibus. Vivamus ac ex sit amet risus
          pulvinar aliquet. Cras lacus diam, gravida eu libero id, placerat
          pharetra risus. Aenean congue volutpat nibh, sed feugiat lectus
          aliquam nec. Suspendisse potenti. Vivamus pulvinar purus lorem, ut
          euismod nunc eleifend vel.
        </p>
      </div>
      <Separator className="my-10" />
    </AnimatedContainer>
  );
}

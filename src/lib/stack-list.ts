import { RenderIcon } from "@/components/render-icon";
import { ZodIcon } from "@/components/zod-icon";
import {
  DockerOriginal,
  ExpressOriginal,
  FastifyPlain,
  FigmaOriginal,
  FirebaseOriginal,
  FlutterOriginal,
  GimpOriginal,
  GitOriginal,
  JavascriptOriginal,
  LinuxOriginal,
  MongodbOriginal,
  NeovimOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhotoshopOriginal,
  PrismaOriginal,
  ReactOriginal,
  SqliteOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VercelOriginal,
  VscodeOriginal,
} from "devicons-react";
import { Github } from "lucide-react";

interface DevIconProps extends React.SVGProps<SVGElement> {
  size?: number | string;
}

type DevIcon = React.FunctionComponent<DevIconProps>;

type Stack = {
  name: string;
  icon: DevIcon;
  type: "backend" | "frontend" | "ui" | "documentation" | "tools" | "others";
};

export function getStackList(): Stack[] {
  return [
    {
      name: "ReactJS",
      icon: ReactOriginal,
      type: "frontend",
    },
    {
      name: "React Native",
      icon: ReactOriginal,
      type: "frontend",
    },
    {
      name: "Flutter",
      icon: FlutterOriginal,
      type: "frontend",
    },
    {
      name: "NextJS",
      icon: NextjsOriginal,
      type: "frontend",
    },
    {
      name: "TailwindCSS",
      icon: TailwindcssOriginal,
      type: "frontend",
    },
    {
      name: "Javascript",
      icon: JavascriptOriginal,
      type: "backend",
    },
    {
      name: "Typescript",
      icon: TypescriptOriginal,
      type: "backend",
    },
    {
      name: "NodeJS",
      icon: NodejsOriginal,
      type: "backend",
    },
    {
      name: "Express",
      icon: ExpressOriginal,
      type: "backend",
    },
    {
      name: "Fastify",
      icon: FastifyPlain,
      type: "backend",
    },
    {
      name: "SQLite",
      icon: SqliteOriginal,
      type: "backend",
    },
    {
      name: "Firebase",
      icon: FirebaseOriginal,
      type: "backend",
    },
    {
      name: "MongoDB",
      icon: MongodbOriginal,
      type: "backend",
    },
    {
      name: "Figma",
      icon: FigmaOriginal,
      type: "ui",
    },
    {
      name: "Gimp",
      icon: GimpOriginal,
      type: "ui",
    },
    {
      name: "Photoshop",
      icon: PhotoshopOriginal,
      type: "ui",
    },
    {
      name: "Git",
      icon: GitOriginal,
      type: "tools",
    },
    {
      name: "GitHub",
      icon: Github as DevIcon,
      type: "tools",
    },
    {
      name: "Docker",
      icon: DockerOriginal,
      type: "tools",
    },
    {
      name: "Neovim",
      icon: NeovimOriginal,
      type: "tools",
    },
    {
      name: "VSCode",
      icon: VscodeOriginal,
      type: "tools",
    },
    {
      name: "Linux",
      icon: LinuxOriginal,
      type: "tools",
    },
    {
      name: "Prisma",
      icon: PrismaOriginal,
      type: "tools",
    },
    {
      name: "Vercel",
      icon: VercelOriginal,
      type: "tools",
    },
    {
      name: "Zod",
      icon: ZodIcon as DevIcon,
      type: "tools",
    },
    {
      name: "Render",
      icon: RenderIcon as DevIcon,
      type: "tools",
    },
  ];
}

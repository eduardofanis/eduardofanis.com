import AnimatedContainer from "@/components/animated-container";
import { getStackList } from "@/lib/stack-list";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const [t] = useTranslation("global");

  const stackList = getStackList();

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl mb-8">{t("stack.title")}</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2 font-medium">Front-end</h2>
          <div className="grid grid-cols-3 gap-2">
            {stackList
              .filter((stack) => stack.type == "frontend")
              .map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg p-4 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-zinc-100 bg-zinc-50 rounded-md dark:text-zinc-200 text-zinc-800 transition-colors"
                >
                  <Icon size={32} />
                  {name}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2 font-medium">Back-end</h2>
          <div className="grid grid-cols-3 gap-2">
            {stackList
              .filter((stack) => stack.type == "backend")
              .map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg p-4 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-zinc-100 bg-zinc-50 rounded-md dark:text-zinc-200 text-zinc-800 transition-colors"
                >
                  <Icon size={32} />
                  {name}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2 font-medium">UI Design</h2>
          <div className="grid grid-cols-3 gap-2">
            {stackList
              .filter((stack) => stack.type == "ui")
              .map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg p-4 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-zinc-100 bg-zinc-50 rounded-md dark:text-zinc-200 text-zinc-800 transition-colors"
                >
                  <Icon size={32} />
                  {name}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2 font-medium">{t("stack.tools")}</h2>
          <div className="grid grid-cols-3 gap-2">
            {stackList
              .filter((stack) => stack.type == "tools")
              .map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg p-4 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-zinc-100 bg-zinc-50 rounded-md dark:text-zinc-200 text-zinc-800 transition-colors"
                >
                  <Icon size={32} />
                  {name}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2 font-medium">{t("stack.others")}</h2>
          <div className="grid grid-cols-3 gap-2">
            {stackList
              .filter((stack) => stack.type == "others")
              .map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg p-4 dark:bg-zinc-900 hover:dark:bg-zinc-800 hover:bg-zinc-100 bg-zinc-50 rounded-md dark:text-zinc-200 text-zinc-800 transition-colors"
                >
                  <Icon size={32} />
                  {name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}

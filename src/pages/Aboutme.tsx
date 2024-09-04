import AnimatedContainer from "@/components/animated-container";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const [t] = useTranslation("global");

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl">{t("aboutMe.title")}</h1>
      <p className="text-zinc-500 text-sm">{t("aboutMe.description")}</p>
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <img src="me.jpg" alt="Eduardo Fanis" className="rounded-md" />
        <div className="sm:col-span-2">
          <h2 className="text-lg font-medium mb-1">Im Eduardo Fanis Lima</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7 font-text">
            {t("aboutMe.text1")}
          </p>
        </div>
      </div>
    </AnimatedContainer>
  );
}

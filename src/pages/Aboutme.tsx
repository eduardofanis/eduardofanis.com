import AnimatedContainer from "@/components/animated-container";
import { getJobList } from "@/lib/job-list";
import { getUserLocale } from "get-user-locale";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const [t] = useTranslation("global");

  const jobs = getJobList();

  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : getUserLocale();

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl">{t("aboutMe.title")}</h1>
      <p className="text-zinc-500 text-sm">{t("aboutMe.description")}</p>
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <img src="me.jpg" alt="Eduardo Fanis" className="rounded-md" />
        <div className="sm:col-span-2">
          <h2 className="text-lg font-medium mb-1">{t("aboutMe.myName")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7 font-text mb-1">
            {t("aboutMe.text1")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7 font-text">
            {t("aboutMe.text2")}
          </p>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-7 sm:col-span-3 font-text">
          {t("aboutMe.text3")}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-7 sm:col-span-3 font-text">
          {t("aboutMe.text4")}
        </p>
        <div className="sm:col-span-3 mt-8">
          <h2 className="text-lg font-medium mb-4">
            {t("aboutMe.experience")}
          </h2>
          {jobs.map(
            (
              {
                role_EN,
                role_PT,
                business,
                description_EN,
                description_PT,
                yearIn,
                yearOut,
              },
              index
            ) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-zinc-200">
                    {language === "en-US" ? role_EN : role_PT} | {business}
                  </h3>
                  <span className="text-sm text-zinc-500 mb-1">
                    ({yearIn}-{yearOut})
                  </span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-6 font-text">
                  {language === "en-US" ? description_EN : description_PT}
                </p>
              </div>
            )
          )}
        </div>
        <div className="sm:col-span-3">
          <h2 className="text-lg font-medium mb-1">{t("aboutMe.courses")}</h2>
        </div>
      </div>
    </AnimatedContainer>
  );
}

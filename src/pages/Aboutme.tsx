import AnimatedContainer from "@/components/animated-container";
import { getCourseList } from "@/lib/course-list";
import { getJobList } from "@/lib/job-list";
import { getUserLocale } from "get-user-locale";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const [t] = useTranslation("global");

  const jobs = getJobList();
  const courses = getCourseList();

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
        <p className="text-zinc-600 dark:text-zinc-400 leading-7 sm:col-span-3 font-text">
          {t("aboutMe.text5")}
        </p>
        <div className="sm:col-span-3 mt-8">
          <h2 className="text-lg font-medium mb-4">
            {t("aboutMe.experience")}
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            {jobs.map(
              (
                {
                  role_EN,
                  role_PT,
                  business,
                  subject1_EN,
                  subject1_PT,
                  subject2_EN,
                  subject2_PT,
                  subject3_EN,
                  subject3_PT,
                  yearIn,
                  yearOut,
                },
                index,
              ) => (
                <li key={index} className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-zinc-800 dark:text-zinc-200">
                      {language === "en-US" ? role_EN : role_PT} | {business}
                    </h3>
                    <span className="text-sm text-zinc-500 mb-1">
                      ({yearIn}-{yearOut})
                    </span>
                  </div>

                  <ul className="text-zinc-600 dark:text-zinc-400 leading-6 font-text">
                    <li>{language === "en-US" ? subject1_EN : subject1_PT}</li>
                    {subject2_EN && (
                      <li>
                        {language === "en-US" ? subject2_EN : subject2_PT}
                      </li>
                    )}
                    {subject3_EN && (
                      <li>
                        {language === "en-US" ? subject3_EN : subject3_PT}
                      </li>
                    )}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="sm:col-span-3">
          <h2 className="text-lg font-medium mb-1">{t("aboutMe.courses")}</h2>
          <ul className="list-disc ml-5 mt-4 space-y-2">
            {courses.map((course, index) => (
              <li key={index} className="text-zinc-800 dark:text-zinc-200">
                {course.link ? (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {language === "en-US" ? course.name_EN : course.name_PT}
                    <ExternalLink
                      className="inline-block ml-2 mb-1"
                      size={14}
                    />
                  </a>
                ) : language === "en-US" ? (
                  course.name_EN
                ) : (
                  course.name_PT
                )}
                <span className="text-sm text-zinc-500 ml-2">
                  {course.institution}
                  {course.year ? `, ${course.year}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedContainer>
  );
}

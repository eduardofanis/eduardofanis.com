import { TFunction } from "i18next";

type Course = {
  name: string;
  description: string;
  yearStart: string;
  yearFinish: string;
};

export function getCourseList(t: TFunction): Course[] {
  return [
    {
      name: "gerencie",
      description: t("projectsDescriptions.gerencie"),
      yearStart: "2024",
      yearFinish: "2024",
    },
  ];
}

import { TFunction } from "i18next";

type Job = {
  name: string;
  description: string;
  yearIn: string;
  yearOut: string;
};

export function getJobList(t: TFunction): Job[] {
  return [
    {
      name: "gerencie",
      description: t("projectsDescriptions.gerencie"),
      yearIn: "2024",
      yearOut: "2024",
    },
  ];
}

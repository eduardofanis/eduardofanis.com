type Course = {
  name_EN: string;
  name_PT: string;
  link?: string;
  institution?: string;
  year?: string;
};

export function getCourseList(): Course[] {
  return [
    {
      name_EN: "Sofware Engineering",
      name_PT: "Engenharia de Software",
      institution: "Unicuritiba",
      year: "2026",
    },
    {
      name_EN: "Javascript ES6",
      name_PT: "Javascript ES6",
      link: "https://www.origamid.com/certificate/aff0d6ed",
      institution: "Origamid",
      year: "2023", 
    },
    {
      name_EN: "UI Design",
      name_PT: "UI Design",
      link: "https://www.origamid.com/certificate/a506e8e7",
      institution: "Origamid",
      year: "2023",
    },
    {
      name_EN: "Typescript",
      name_PT: "Typescript",
      link: "https://www.origamid.com/certificate/92c4ab34",
      institution: "Origamid",
      year: "2023",
    },
    {
      name_EN: "React",
      name_PT: "React",
      link: "https://www.origamid.com/certificate/c567c135",
      institution: "Origamid",
      year: "2023",
    },
    {
      name_EN: "CSS Grid Layout",
      name_PT: "CSS Grid Layout",
      link: "https://www.origamid.com/certificate/703b2281",
      institution: "Origamid",
      year: "2023",
    },
    {
      name_EN: "CSS Flexbox",
      name_PT: "CSS Flexbox",
      link: "https://www.origamid.com/certificate/5d73edd5",
      institution: "Origamid",
      year: "2023",
    },
    {
      name_EN: "Intermediate English",
      name_PT: "Inglês Intermediário",
    },
  ];
}

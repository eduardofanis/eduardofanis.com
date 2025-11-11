type Job = {
  role_EN: string;
  role_PT: string;
  business: string;
  description_EN: string;
  description_PT: string;
  yearIn: string;
  yearOut: string;
};

export function getJobList(): Job[] {
  return [
    {
      role_EN: "Automotive Mechanic",
      role_PT: "Mecânico Automotivo",
      business: "R.A Lima",
      description_EN:
        "Entrei como ajudante de mecânico, mas rapidamente me desenvolvi e comecei a atuar na montagem e desmontagem de motores.",
      description_PT:
        "Entrei como ajudante de mecânico, mas rapidamente me desenvolvi e comecei a atuar na montagem e desmontagem de motores.",
      yearIn: "2024",
      yearOut: "2025",
    },
  ];
}

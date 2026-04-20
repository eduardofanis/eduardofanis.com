type Job = {
  role_EN: string;
  role_PT: string;
  business: string;
  subject1_EN: string;
  subject1_PT: string;
  subject2_EN: string;
  subject2_PT: string;
  subject3_EN?: string;
  subject3_PT?: string;
  yearIn: string;
  yearOut: string;
};

export function getJobList(): Job[] {
  return [
    {
      role_EN: "Automotive Mechanic",
      role_PT: "Mecânico Automotivo",
      business: "R.A Lima",
      subject1_EN: "Diagnosed and resolved electrical and mechanical issues.",
      subject1_PT:
        "Diagnóstico e resolução de problemas elétricos e mecânicos.",
      subject2_EN: "Organized, cleaned, proactive and adaptable.",
      subject2_PT: "Organização, limpeza, proatividade e adaptabilidade.",
      subject3_EN: "Communication, teamwork, and customer service.",
      subject3_PT: "Comunicação, trabalho em equipe e atendimento ao cliente.",
      yearIn: "2024",
      yearOut: "2026",
    },
    {
      role_EN: "App Delivery",
      role_PT: "Entregas por Aplicativo",
      business: "IFood / Uber",
      subject1_EN: "Autonomy, responsibility, and punctuality.",
      subject1_PT: "Autonomia, responsabilidade e pontualidade.",
      subject2_EN: "Communication and customer service.",
      subject2_PT: "Comunicação e atendimento ao cliente.",
      yearIn: "2022",
      yearOut: "2023",
    },
    {
      role_EN: "Cashier",
      role_PT: "Operador de Caixa",
      business: "Skina Gula",
      subject1_EN: "Cash flow control, use of POS system, finances.",
      subject1_PT: "Controle de fluxo de caixa, uso de sistema PDV, finanças.",
      subject2_EN: "Clear and polite communication, customer service, agility.",
      subject2_PT:
        "Comunicação clara e educada, atendimento ao cliente, agilidade.",
      yearIn: "2020",
      yearOut: "2021",
    },
  ];
}

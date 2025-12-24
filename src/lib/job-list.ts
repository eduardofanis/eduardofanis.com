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
        "Worked on engine maintenance, assembly and disassembly, electrical diagnostics, and parts logistics.",
      description_PT:
        "Trabalhei na manutenção de motores, montagem e desmontagem, diagnósticos elétricos e na logística de peças.",
      yearIn: "2024",
      yearOut: "2025",
    },
    {
      role_EN: "App Delivery Driver",
      role_PT: "Entregador de Aplicativo",
      business: "IFood / Uber",
      description_EN:
        "Collected goods from establishments and delivered them to customers.",
      description_PT:
        "Coletava mercadorias em estabelecimentos e entregava aos clientes.",
      yearIn: "2023",
      yearOut: "2023",
    },
    {
      role_EN: "Cashier",
      role_PT: "Operador de Caixa",
      business: "Skina Gula",
      description_EN:
        "Operated the cash register making sales, managed the inventory control system, checked and received orders.",
      description_PT:
        "Operava o caixa fazendo as vendas, gerenciava o sistema de controle de estoque, verificava e recebia mercadorias.",
      yearIn: "2020",
      yearOut: "2021",
    },
  ];
}

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
        "Worked on engine maintenance, assembly and disassembly, and parts procurement and search.",
      description_PT:
        "Trabalhei na manutenção de motores, montagem e desmontagem, e na compra e busca de peças.",
      yearIn: "2024",
      yearOut: "2025",
    },
    {
      role_EN: "App Delivery Driver",
      role_PT: "Entregador de Aplicativo",
      business: "IFood / Uber",
      description_EN:
        "Collected food and other goods from establishments and delivered them to buyers.",
      description_PT:
        "Coletava alimentos e outras mercadorias em estabelecimentos e entregava aos compradores.",
      yearIn: "2023",
      yearOut: "2023",
    },
    {
      role_EN: "Cashier",
      role_PT: "Operador de Caixa",
      business: "Skina Gula",
      description_EN:
        "Operated the cash register making sales, managed the inventory control system, and checked received orders.",
      description_PT:
        "Operava o caixa fazendo as vendas, gerenciava o sistema de controle de estoque e verificava recebia as encomendas.",
      yearIn: "2020",
      yearOut: "2021",
    },
  ];
}

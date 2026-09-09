export type Service = {
  slug: string;
  title: string;
  category: "Clic Air" | "Clic Reformas";
  short: string;
  description: string;
  image: string;
  benefits: string[];
  steps: string[];
};

export const services: Service[] = [
  {
    slug: "instalacao-de-ar-condicionado",
    title: "Instalação de ar-condicionado",
    category: "Clic Air",
    short: "Instalação técnica para melhor desempenho, economia e acabamento.",
    description: "A instalação correta influencia diretamente o consumo de energia, a vida útil do equipamento e o conforto do ambiente. A Clic Air avalia o espaço, orienta sobre capacidade e posicionamento e executa a infraestrutura com cuidado técnico.",
    image: "/images/hero-hvac.jpg",
    benefits: ["Dimensionamento adequado do equipamento", "Acabamento limpo e organizado", "Testes de funcionamento e orientação de uso", "Atendimento residencial e empresarial"],
    steps: ["Avaliação do ambiente", "Definição da solução", "Instalação e acabamento", "Testes finais"],
  },
  {
    slug: "manutencao-de-ar-condicionado",
    title: "Manutenção de ar-condicionado",
    category: "Clic Air",
    short: "Manutenção preventiva e corretiva para preservar eficiência e qualidade do ar.",
    description: "A manutenção reduz falhas inesperadas, melhora a eficiência do sistema e ajuda a manter a qualidade do ar. Realizamos inspeção, higienização, testes e correções de acordo com a necessidade de cada equipamento.",
    image: "/images/hero-hvac.jpg",
    benefits: ["Redução de falhas e paradas", "Melhor eficiência energética", "Higienização do sistema", "Diagnóstico técnico transparente"],
    steps: ["Inspeção técnica", "Diagnóstico", "Limpeza ou reparo", "Validação do funcionamento"],
  },
  {
    slug: "pmoc",
    title: "PMOC para empresas",
    category: "Clic Air",
    short: "Plano de Manutenção, Operação e Controle para sistemas de climatização.",
    description: "O PMOC organiza as rotinas de manutenção dos sistemas de climatização e registra os procedimentos necessários para uma operação mais segura e eficiente. Estruturamos o plano conforme as características do ambiente e dos equipamentos.",
    image: "/images/vrf-commercial.jpg",
    benefits: ["Rotinas de manutenção organizadas", "Histórico de atendimentos", "Maior previsibilidade operacional", "Acompanhamento técnico do sistema"],
    steps: ["Levantamento dos equipamentos", "Estruturação do plano", "Execução das rotinas", "Registro e acompanhamento"],
  },
  {
    slug: "sistemas-vrf",
    title: "Sistemas VRF",
    category: "Clic Air",
    short: "Projetos e manutenção de climatização VRF para operações corporativas.",
    description: "Sistemas VRF oferecem controle individualizado e eficiência para empreendimentos com múltiplos ambientes. A Clic Air atua na avaliação, instalação, manutenção e suporte técnico para soluções corporativas.",
    image: "/images/vrf-commercial.jpg",
    benefits: ["Controle por ambientes", "Eficiência para grandes estruturas", "Projeto técnico personalizado", "Suporte especializado"],
    steps: ["Levantamento técnico", "Projeto e dimensionamento", "Implantação", "Comissionamento"],
  },
  {
    slug: "ventilacao-e-exaustao",
    title: "Ventilação e exaustão",
    category: "Clic Air",
    short: "Renovação e circulação de ar para ambientes mais confortáveis.",
    description: "Projetamos e executamos soluções de ventilação e exaustão para melhorar a circulação e a renovação do ar em ambientes comerciais, corporativos e residenciais.",
    image: "/images/vrf-commercial.jpg",
    benefits: ["Melhor circulação do ar", "Soluções dimensionadas para o espaço", "Redução de calor e odores", "Instalação técnica e segura"],
    steps: ["Análise do ambiente", "Definição do sistema", "Instalação", "Teste de vazão"],
  },
  {
    slug: "infraestrutura-para-climatizacao",
    title: "Infraestrutura para climatização",
    category: "Clic Air",
    short: "Tubulação, drenagem e elétrica preparadas para uma instalação eficiente.",
    description: "Executamos a infraestrutura necessária para sistemas de climatização, incluindo caminhos de tubulação, drenagem, pontos elétricos e acabamentos, integrando o projeto ao ambiente.",
    image: "/images/vrf-commercial.jpg",
    benefits: ["Planejamento antes da instalação", "Integração com a arquitetura", "Menos retrabalho", "Execução organizada"],
    steps: ["Compatibilização do projeto", "Marcação dos pontos", "Execução da infraestrutura", "Conferência técnica"],
  },
  {
    slug: "reformas-comerciais-e-residenciais",
    title: "Reformas comerciais e residenciais",
    category: "Clic Reformas",
    short: "Reformas planejadas para transformar espaços com qualidade e controle.",
    description: "Coordenamos reformas comerciais e residenciais do planejamento à entrega, integrando equipes e serviços para reduzir imprevistos e garantir um resultado consistente.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Planejamento por etapas", "Coordenação dos serviços", "Acompanhamento próximo", "Acabamento de alto padrão"],
    steps: ["Briefing e visita", "Planejamento", "Execução da reforma", "Vistoria de entrega"],
  },
  {
    slug: "manutencao-predial",
    title: "Manutenção predial",
    category: "Clic Reformas",
    short: "Cuidados preventivos e corretivos para preservar o seu imóvel.",
    description: "Atendemos demandas de manutenção predial para empresas, condomínios e imóveis residenciais, com diagnóstico, planejamento e execução dos reparos necessários.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Prevenção de problemas maiores", "Atendimento de diferentes especialidades", "Planejamento das intervenções", "Suporte contínuo"],
    steps: ["Vistoria", "Priorização das demandas", "Execução", "Relatório de conclusão"],
  },
  {
    slug: "instalacoes-eletricas",
    title: "Instalações elétricas",
    category: "Clic Reformas",
    short: "Adequações e instalações elétricas com organização e segurança.",
    description: "Executamos instalações e adequações elétricas para reformas, novos equipamentos e melhorias de ambientes, sempre com avaliação prévia das necessidades do projeto.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Instalação organizada", "Adequação de pontos e circuitos", "Integração com a reforma", "Testes após a execução"],
    steps: ["Levantamento da demanda", "Planejamento dos pontos", "Execução", "Testes e entrega"],
  },
  {
    slug: "adequacoes-e-reparos",
    title: "Adequações e reparos",
    category: "Clic Reformas",
    short: "Soluções objetivas para corrigir, adaptar e melhorar ambientes.",
    description: "Realizamos reparos e adequações em imóveis residenciais e comerciais, reunindo os serviços necessários para resolver a demanda com agilidade e bom acabamento.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Diagnóstico direto", "Serviços coordenados", "Agilidade na execução", "Acabamento cuidadoso"],
    steps: ["Identificação da necessidade", "Proposta de solução", "Execução", "Conferência final"],
  },
  {
    slug: "obras-e-melhorias",
    title: "Obras e melhorias",
    category: "Clic Reformas",
    short: "Execução de melhorias para valorizar e modernizar o imóvel.",
    description: "Planejamos e executamos obras de melhoria para renovar ambientes, corrigir limitações e valorizar imóveis comerciais e residenciais.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Valorização do espaço", "Soluções personalizadas", "Planejamento de materiais e etapas", "Acompanhamento da execução"],
    steps: ["Entendimento do objetivo", "Planejamento", "Execução da obra", "Entrega final"],
  },
  {
    slug: "projetos-personalizados",
    title: "Projetos personalizados",
    category: "Clic Reformas",
    short: "Soluções sob medida para necessidades específicas de cada ambiente.",
    description: "Cada espaço exige uma solução diferente. Desenvolvemos planos personalizados que integram climatização, instalações, manutenção e reforma de acordo com o objetivo do cliente.",
    image: "/images/reforma-premium.jpg",
    benefits: ["Solução adaptada ao imóvel", "Integração entre especialidades", "Planejamento completo", "Um único ponto de contato"],
    steps: ["Briefing detalhado", "Desenvolvimento da solução", "Aprovação do escopo", "Execução acompanhada"],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

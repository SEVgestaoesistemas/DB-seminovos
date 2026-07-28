/*
  ESTE É O ÚNICO ARQUIVO COM OS DADOS DOS VEÍCULOS.
  Para adicionar ou remover carros, edite somente esta lista.
*/
const carros = [
  {
    id: 1,
    marca: "Land Rover",
    modelo: "Range Rover Evoque",
    ano: 2015,
    preco: 86990,
    precoFipe: 114424,
    km: 87000,
    combustivel: "Não informado",
    cambio: "Automático",
    cor: "Vermelha",
    pneus: "Bom",
    ipva: "2026 em dia",
    destaque: true,
    imagens: [
      "assets/imagens/carros/evoque-1-frente.jpeg",
      "assets/imagens/carros/evoque-2-traseira.jpeg",
      "assets/imagens/carros/evoque-3-traseira-lateral.jpeg",
      "assets/imagens/carros/evoque-4-painel.jpeg",
      "assets/imagens/carros/evoque-5-banco-traseiro.jpeg"
    ],
    descricao: "Range Rover Evoque 2015, na cor vermelha, com câmbio automático, 87.000 km, pneus em bom estado e IPVA 2026 em dia. Uma oportunidade abaixo da FIPE.",
    whatsappMensagem: "Olá! Tenho interesse na Land Rover Range Rover Evoque 2015 anunciada no site."
  },
  {
    id: 2,
    marca: "Toyota",
    modelo: "SW4 Platinum",
    ano: 2024,
    preco: 320000,
    km: 39000,
    combustivel: "Diesel",
    cambio: "Automático",
    cor: "Prata",
    pneus: "Não informado",
    ipva: "Não informado",
    tracao: "4x4",
    lugares: 7,
    destaque: true,
    vendido: true,
    imagens: [
      "assets/imagens/carros/sw4-1-frente.jpeg",
      "assets/imagens/carros/sw4-2-traseira.jpeg",
      "assets/imagens/carros/sw4-3-interior-lateral.jpeg",
      "assets/imagens/carros/sw4-4-painel.jpeg"
    ],
    descricao: "Toyota SW4 Platinum 2024, prata, turbo diesel, 4x4, automática e com 7 lugares. Veículo com 39.000 km.",
    whatsappMensagem: "Olá! Tenho interesse na Toyota SW4 Platinum 2024 anunciada no site."
  },
  {
    id: 3,
    marca: "Volkswagen",
    modelo: "Nivus Comfortline 200 TSI",
    ano: 2024,
    preco: 103990,
    km: 56000,
    combustivel: "Não informado",
    cambio: "Automático",
    cor: "Preto",
    pneus: "Não informado",
    ipva: "Não informado",
    destaque: true,
    imagens: [
      "assets/imagens/carros/nivus-1-frente.jpeg",
      "assets/imagens/carros/nivus-2-traseira.jpeg",
      "assets/imagens/carros/nivus-3-interior.jpeg"
    ],
    descricao: "Volkswagen Nivus Comfortline 1.0 200 TSI 2024, preto, automático e com quilometragem zero.",
    whatsappMensagem: "Olá! Tenho interesse no Volkswagen Nivus Comfortline 200 TSI 2024 anunciado no site."
  },
  {
    id: 4,
    marca: "Hyundai",
    modelo: "Creta Action 1.6",
    ano: 2021,
    preco: 88990,
    km: 70000,
    combustivel: "Não informado",
    cambio: "Automático",
    cor: "Branco",
    pneus: "Não informado",
    ipva: "Não informado",
    destaque: false,
    imagens: [
      "assets/imagens/carros/creta-1-frente.jpeg",
      "assets/imagens/carros/creta-2-traseira.jpeg",
      "assets/imagens/carros/creta-3-traseira-lateral.jpeg",
      "assets/imagens/carros/creta-4-interior.jpeg"
    ],
    descricao: "Hyundai Creta Action 1.6 2021, branco, automático e com 70.000 km.",
    whatsappMensagem: "Olá! Tenho interesse no Hyundai Creta Action 1.6 2021 anunciado no site."
  },
  {
    id: 5,
    marca: "Citroën",
    modelo: "C3",
    ano: 2019,
    preco: 56990,
    km: 55000,
    combustivel: "Não informado",
    cambio: "Automático",
    cor: "Prata",
    pneus: "Não informado",
    ipva: "Não informado",
    destaque: false,
    imagens: [
      "assets/imagens/carros/c3-1-frente.jpeg",
      "assets/imagens/carros/c3-2-frente-lateral.jpeg",
      "assets/imagens/carros/c3-3-traseira.jpeg",
      "assets/imagens/carros/c3-4-painel.jpeg",
      "assets/imagens/carros/c3-5-bancos.jpeg"
    ],
    descricao: "Citroën C3 2019, prata, automático e com 55.000 km.",
    whatsappMensagem: "Olá! Tenho interesse no Citroën C3 2019 anunciado no site."
  }
];

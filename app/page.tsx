"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  ThermometerSnowflake,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const whatsapp =
  "https://wa.me/5511947330170?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento.";
const airServices = [
  "Instalação de ar-condicionado",
  "Manutenção preventiva e corretiva",
  "PMOC — plano de manutenção",
  "Sistemas VRF",
  "Ventilação e exaustão",
  "Infraestrutura para climatização",
];
const reformServices = [
  "Reformas comerciais e residenciais",
  "Manutenção predial",
  "Instalações elétricas",
  "Adequações e reparos",
  "Obras e melhorias",
  "Projetos personalizados",
];
const projects = [
  {
    title: "Climatização residencial",
    tag: "Clic Air",
    image: "/images/hero-hvac.jpg",
  },
  {
    title: "Sistema VRF empresarial",
    tag: "Clic Air",
    image: "/images/vrf-commercial.jpg",
  },
  {
    title: "Reforma completa",
    tag: "Clic Reformas",
    image: "/images/reforma-premium.jpg",
  },
];

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Clic Air - início">
      <img src="/images/clicair-logo-transparent.png" alt="Clic Air" />
    </a>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onResize = () => {
      if (window.innerWidth > 1120) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="/">Início</a>
            <a href="/sobre-nos">Quem somos</a>
            <a href="/servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="/contato">Contato</a>
          </nav>
          <a
            className="button button-green header-cta"
            href="/contato"
          >
            Solicitar orçamento <ArrowRight size={17} />
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="menu-mobile" className="mobile-nav" aria-label="Navegação móvel">
            {[
              ["/", "Início"],
              ["/sobre-nos", "Quem somos"],
              ["/servicos", "Serviços"],
              ["/#projetos", "Projetos"],
              ["/contato", "Contato"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ChevronRight size={18} />
              </a>
            ))}
            <a
              className="button button-green"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <div className="hero-image" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-copy reveal is-visible">
            <div className="eyebrow">
              <span /> Climatização & reformas
            </div>
            <h1>
              Conforto que você <em>sente.</em>
              <br />
              Qualidade que você <em>vê.</em>
            </h1>
            <p>
              Soluções completas em climatização, manutenção e reformas para
              transformar ambientes residenciais e corporativos.
            </p>
            <div className="hero-actions">
              <a
                className="button button-green"
                href="/contato"
              >
                Falar com um especialista <ArrowRight size={18} />
              </a>
              <a className="button button-ghost" href="#servicos">
                Conheça nossas soluções
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <span>CA</span>
                <span>CR</span>
                <span>
                  <Star size={14} fill="currentColor" />
                </span>
              </div>
              <p>
                <strong>+300 clientes atendidos</strong>
                <br />
                Excelência em cada detalhe
              </p>
            </div>
          </div>
          <div className="floating-card reveal is-visible">
            <div className="pulse-icon">
              <ThermometerSnowflake />
            </div>
            <div>
              <small>Atendimento ágil</small>
              <strong>Seu orçamento em poucos cliques</strong>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <a className="scroll-hint" href="#servicos">
          <span>Role para descobrir</span>
          <i />
        </a>
      </section>

      <section id="servicos" className="services section-space">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow dark">
                <span /> Soluções integradas
              </div>
              <h2>
                Um grupo. Duas especialidades.
                <br />
                <em>Infinitas possibilidades.</em>
              </h2>
            </div>
            <p>
              Da temperatura ideal à renovação completa do seu espaço, cuidamos
              de cada etapa com um único padrão de excelência.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card air-card reveal">
              <div className="service-top">
                <div className="service-icon">
                  <Snowflake />
                </div>
                <span>01</span>
              </div>
              <h3>
                Clic <em>Air</em>
              </h3>
              <p>
                Climatização, ventilação e refrigeração com desempenho,
                eficiência e segurança.
              </p>
              <ul>
                {airServices.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/servicos">
                Explorar Clic Air <ArrowRight size={17} />
              </a>
            </article>
            <article className="service-card reform-card reveal">
              <div className="service-top">
                <div className="service-icon">
                  <Wrench />
                </div>
                <span>02</span>
              </div>
              <h3>
                Clic <em>Reformas</em>
              </h3>
              <p>
                Reformas, instalações e manutenção predial com planejamento do
                começo ao fim.
              </p>
              <ul>
                {reformServices.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/servicos">
                Explorar Clic Reformas <ArrowRight size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="empresa" className="about section-space">
        <div className="container about-grid">
          <div className="about-visual reveal">
            <div className="about-photo" />
            <div className="experience-badge">
              <strong>+8</strong>
              <span>
                anos cuidando
                <br />
                de ambientes
              </span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="about-copy reveal">
            <div className="eyebrow">
              <span /> Quem somos
            </div>
            <h2>
              Engenharia, cuidado e confiança em <em>cada entrega.</em>
            </h2>
            <p>
              O Grupo Clic nasceu para simplificar a vida de quem precisa
              executar bem. Unimos climatização, manutenção predial, instalações
              e reformas em uma operação coordenada e comprometida com o
              resultado.
            </p>
            <p>
              Atendemos residências, comércios e empresas com equipe
              qualificada, acompanhamento próximo e soluções pensadas para
              durar.
            </p>
            <div className="stats-row">
              <div>
                <strong>+500</strong>
                <span>projetos realizados</span>
              </div>
              <div>
                <strong>+300</strong>
                <span>clientes atendidos</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>foco na entrega</span>
              </div>
            </div>
            <a className="text-link" href="/sobre-nos">
              Conheça o Grupo Clic <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="differentials section-space">
        <div className="container">
          <div className="center-heading reveal">
            <div className="eyebrow">
              <span /> Nossos diferenciais <span />
            </div>
            <h2>
              O padrão Clic de <em>fazer bem-feito.</em>
            </h2>
          </div>
          <div className="feature-grid">
            {[
              [
                Sparkles,
                "Equipe especializada",
                "Profissionais qualificados e atualizados.",
              ],
              [
                Headphones,
                "Atendimento próximo",
                "Escuta, orientação e transparência.",
              ],
              [
                Clock3,
                "Agilidade de verdade",
                "Prazos claros e soluções eficientes.",
              ],
              [
                ShieldCheck,
                "Qualidade e segurança",
                "Execução técnica em cada detalhe.",
              ],
              [
                Building2,
                "Soluções para empresas",
                "Estrutura para diferentes operações.",
              ],
              [Zap, "Suporte contínuo", "Manutenção completa após a entrega."],
            ].map(([Icon, title, text], index) => {
              const FeatureIcon = Icon as typeof Sparkles;
              return (
                <article className="feature reveal" key={title as string}>
                  <span>0{index + 1}</span>
                  <FeatureIcon />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projetos" className="projects section-space">
        <div className="container">
          <div className="section-heading light reveal">
            <div>
              <div className="eyebrow">
                <span /> Projetos realizados
              </div>
              <h2>
                Ambientes transformados.
                <br />
                <em>Resultados que permanecem.</em>
              </h2>
            </div>
            <a
              className="button button-ghost"
              href="/contato"
            >
              Quero realizar meu projeto
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1} reveal`}
                key={project.title}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay" />
                <div className="project-info">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Consultar ${project.title}`}
                  >
                    <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="contact section-space">
        <div className="container contact-card reveal">
          <div>
            <div className="eyebrow dark">
              <span /> Fale conosco
            </div>
            <h2>
              Seu próximo projeto
              <br />
              começa com um <em>clique.</em>
            </h2>
            <p>
              Conte o que você precisa. Nossa equipe responde com orientação
              clara e uma solução sob medida.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-green"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento <ArrowRight size={18} />
            </a>
            <a className="phone-link" href="https://wa.me/5511976009837" target="_blank" rel="noreferrer">
              <span>
                <Phone size={19} />
              </span>
              <div>
                <small>WhatsApp comercial</small>
                <strong>11 97600-9837</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              Climatização, manutenção predial, instalações e reformas com
              qualidade, segurança e eficiência.
            </p>
          </div>
          <div>
            <strong>Navegação</strong>
            <a href="/">Início</a>
            <a href="/sobre-nos">Quem somos</a>
            <a href="/servicos">Serviços</a>
            <a href="/#projetos">Projetos</a>
          </div>
          <div>
            <strong>Serviços</strong>
            <a href="/servicos">Clic Air</a>
            <a href="/servicos">Clic Reformas</a>
            <a href="/servicos/manutencao-de-ar-condicionado">Manutenção</a>
            <a href="/servicos/pmoc">PMOC</a>
          </div>
          <div>
            <strong>Contato</strong>
            <a href="https://wa.me/5511947330170" target="_blank" rel="noreferrer">11 94733-0170</a>
            <a href="https://wa.me/5511976009837" target="_blank" rel="noreferrer">11 97600-9837</a>
            <a href="mailto:Financeiro@clicair.com.br">Financeiro@clicair.com.br</a>
            <a href="https://www.instagram.com/clic_air?stkn=MW44ZmNhc3gxOWQxaQ==" target="_blank" rel="noreferrer">Instagram @clic_air</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Grupo Clic. Todos os direitos reservados.</span>
          <span>Qualidade em cada detalhe.</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        <Phone />
      </a>
    </main>
  );
}

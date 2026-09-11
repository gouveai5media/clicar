"use client";

import { ArrowRight, ChevronRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export const whatsappBase = "https://wa.me/5511947330170";

export function SiteBrand() {
  return (
    <a href="/" className="brand" aria-label="Clic Air - página inicial">
      <img src="/images/clicair-logo-transparent.png" alt="Clic Air" />
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth > 1120 && setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    ["/", "Início"],
    ["/sobre-nos", "Quem somos"],
    ["/servicos", "Serviços"],
    ["/#projetos", "Projetos"],
    ["/contato", "Contato"],
  ];

  return (
    <header className="site-header inner-site-header is-scrolled">
      <div className="nav-shell">
        <SiteBrand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-green header-cta" href="/contato">
          Solicitar orçamento <ArrowRight size={17} />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open} aria-controls="menu-interno">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-interno" className="mobile-nav" aria-label="Navegação móvel">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={18} /></a>
          ))}
          <a className="button button-green" href="/contato" onClick={() => setOpen(false)}>Pedir orçamento</a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><SiteBrand /><p>Climatização, manutenção predial, instalações e reformas com qualidade, segurança e eficiência.</p></div>
        <div><strong>Navegação</strong><a href="/">Início</a><a href="/sobre-nos">Quem somos</a><a href="/servicos">Serviços</a><a href="/contato">Contato</a></div>
        <div><strong>Serviços</strong><a href="/servicos/instalacao-de-ar-condicionado">Instalação de ar</a><a href="/servicos/manutencao-de-ar-condicionado">Manutenção de ar</a><a href="/servicos/pmoc">PMOC</a><a href="/servicos/reformas-comerciais-e-residenciais">Reformas</a></div>
        <div><strong>Contato</strong><a href="https://wa.me/5511947330170" target="_blank" rel="noreferrer">11 94733-0170</a><a href="https://wa.me/5511976009837" target="_blank" rel="noreferrer">11 97600-9837</a><a href="mailto:Financeiro@clicair.com.br">Financeiro@clicair.com.br</a><a href="https://www.instagram.com/clic_air?stkn=MW44ZmNhc3gxOWQxaQ==" target="_blank" rel="noreferrer">Instagram @clic_air</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Grupo Clic. Todos os direitos reservados.</span><a href="https://agencia.i5m.com.br/" target="_blank" rel="noreferrer">Site desenvolvido por I5Media</a></div>
    </footer>
  );
}

export function WhatsappFloat() {
  return <a className="whatsapp-float" href={whatsappBase} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><Phone /></a>;
}

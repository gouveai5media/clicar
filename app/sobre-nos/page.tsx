import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { SiteFooter, SiteHeader, WhatsappFloat } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Sobre a Clic Air | Climatização, Manutenção e Reformas",
  description: "Conheça o Grupo Clic, empresa especializada em climatização, manutenção predial, instalações e reformas para residências e empresas em São Paulo.",
};

export default function AboutPage() {
  return <main><SiteHeader />
    <section className="inner-hero about-inner-hero"><div className="container"><div className="eyebrow"><span /> Sobre o Grupo Clic</div><h1>Uma equipe. Várias soluções. <em>Um padrão de qualidade.</em></h1><p>Cuidamos de ambientes por completo, reunindo conhecimento técnico, organização e acompanhamento próximo.</p></div></section>
    <section className="inner-section"><div className="container story-grid"><div className="story-image" /><div className="story-copy"><small>Nossa história</small><h2>Soluções integradas para simplificar cada projeto.</h2><p>O Grupo Clic nasceu para atender clientes que buscavam mais do que um serviço isolado. A proposta é compreender o ambiente como um todo e reunir climatização, manutenção, instalações e reformas em uma operação coordenada.</p><p>Atendemos residências, comércios e empresas com planejamento, comunicação clara e atenção aos detalhes em todas as etapas.</p><a className="text-link" href="/contato">Converse com nossa equipe <ArrowRight size={18}/></a></div></div></section>
    <section className="values-section"><div className="container"><div className="center-heading"><div className="eyebrow"><span/> Nosso jeito de trabalhar <span/></div><h2>Compromisso em <em>cada detalhe.</em></h2></div><div className="value-grid">
      {[[Users,"Atendimento próximo","Entendemos a necessidade antes de indicar uma solução."],[ShieldCheck,"Segurança e qualidade","Executamos cada etapa com cuidado e responsabilidade."],[Building2,"Visão integrada","Conectamos diferentes serviços em um único planejamento."],[CheckCircle2,"Entrega transparente","Mantemos comunicação clara durante todo o projeto."]].map(([Icon,title,text]) => { const ValueIcon=Icon as typeof Users; return <article key={title as string}><ValueIcon/><h3>{title as string}</h3><p>{text as string}</p></article>})}
    </div><div className="about-numbers"><div><strong>+8</strong><span>anos de mercado</span></div><div><strong>+500</strong><span>projetos realizados</span></div><div><strong>+300</strong><span>clientes atendidos</span></div></div></div></section>
    <section className="inner-cta"><div className="container"><div><small>Vamos conversar</small><h2>Seu projeto merece uma visão completa.</h2><p>Fale com a Clic Air e descubra uma solução pensada para o seu espaço.</p></div><a className="button button-green" href="/contato">Solicitar orçamento <ArrowRight size={18}/></a></div></section>
    <SiteFooter/><WhatsappFloat/>
  </main>;
}

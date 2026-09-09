import type { Metadata } from "next";
import { ArrowRight, Check, Snowflake, Wrench } from "lucide-react";
import { SiteFooter, SiteHeader, WhatsappFloat } from "@/components/site-frame";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços de Climatização e Reformas em São Paulo | Clic Air",
  description: "Conheça os serviços de instalação e manutenção de ar-condicionado, PMOC, VRF, ventilação, reformas e manutenção predial da Clic Air.",
};

export default function ServicesPage() {
  const air = services.filter((service) => service.category === "Clic Air");
  const reformas = services.filter((service) => service.category === "Clic Reformas");
  return <main><SiteHeader />
    <section className="inner-hero"><div className="container"><div className="eyebrow"><span /> Soluções completas</div><h1>Serviços para cuidar de <em>todo o seu ambiente.</em></h1><p>Climatização, manutenção e reformas reunidas em uma operação técnica, organizada e próxima.</p></div></section>
    <section className="inner-section"><div className="container">
      <div className="service-category-heading"><span><Snowflake /></span><div><small>Climatização</small><h2>Clic Air</h2></div></div>
      <div className="seo-card-grid">{air.map((service) => <article className="seo-service-card" key={service.slug}><span className="card-category">{service.category}</span><h3>{service.title}</h3><p>{service.short}</p><ul>{service.benefits.slice(0,2).map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul><a href={`/servicos/${service.slug}`}>Conhecer serviço <ArrowRight size={17}/></a></article>)}</div>
      <div className="service-category-heading category-spaced"><span><Wrench /></span><div><small>Obras e manutenção</small><h2>Clic Reformas</h2></div></div>
      <div className="seo-card-grid">{reformas.map((service) => <article className="seo-service-card" key={service.slug}><span className="card-category reform-label">{service.category}</span><h3>{service.title}</h3><p>{service.short}</p><ul>{service.benefits.slice(0,2).map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul><a href={`/servicos/${service.slug}`}>Conhecer serviço <ArrowRight size={17}/></a></article>)}</div>
    </div></section>
    <section className="inner-cta"><div className="container"><div><small>Projeto sob medida</small><h2>Não sabe qual serviço escolher?</h2><p>Conte sua necessidade e nossa equipe orienta o melhor caminho.</p></div><a className="button button-green" href="/contato">Falar com a equipe <ArrowRight size={18}/></a></div></section>
    <SiteFooter/><WhatsappFloat/>
  </main>;
}

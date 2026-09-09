import type { Metadata } from "next";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader, WhatsappFloat } from "@/components/site-frame";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} em São Paulo | Clic Air`,
    description: `${service.short} Solicite uma avaliação e orçamento com a equipe da Clic Air em São Paulo.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);
  const message = encodeURIComponent(`Olá, gostaria de solicitar um orçamento para: ${service.title}.`);

  return <main><SiteHeader />
    <section className="service-detail-hero"><div className="service-detail-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,23,44,.97), rgba(4,23,44,.72) 58%, rgba(4,23,44,.3)), url(${service.image})` }} /><div className="container service-detail-content"><nav className="breadcrumbs" aria-label="Navegação estrutural"><a href="/">Início</a><ChevronRight size={14}/><a href="/servicos">Serviços</a><ChevronRight size={14}/><span>{service.title}</span></nav><span className="service-detail-category">{service.category}</span><h1>{service.title}</h1><p>{service.short}</p><div className="hero-actions"><a className="button button-green" href={`https://wa.me/5511947330170?text=${message}`} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18}/></a><a className="button button-ghost" href="/contato">Enviar detalhes do projeto</a></div></div></section>
    <section className="inner-section service-description"><div className="container service-description-grid"><div><small>Sobre o serviço</small><h2>Uma solução planejada para o seu ambiente.</h2><p>{service.description}</p><p>Nossa equipe avalia as condições do local, esclarece as etapas e apresenta uma proposta alinhada à necessidade do projeto.</p></div><aside><span>Principais benefícios</span><ul>{service.benefits.map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul></aside></div></section>
    <section className="process-section"><div className="container"><div className="center-heading"><div className="eyebrow dark"><span/> Como funciona <span/></div><h2>Do primeiro contato à <em>entrega final.</em></h2></div><div className="process-grid">{service.steps.map((step,index) => <article key={step}><span>0{index+1}</span><h3>{step}</h3><p>Acompanhamento e comunicação clara durante esta etapa.</p></article>)}</div></div></section>
    <section className="related-section"><div className="container"><div className="section-heading"><div><div className="eyebrow dark"><span/> Também pode ajudar</div><h2>Outras soluções da <em>{service.category}.</em></h2></div><a className="text-link" href="/servicos">Ver todos os serviços <ArrowRight size={18}/></a></div><div className="related-grid">{related.map(item => <a href={`/servicos/${item.slug}`} key={item.slug}><small>{item.category}</small><h3>{item.title}</h3><p>{item.short}</p><span>Conhecer serviço <ArrowRight size={16}/></span></a>)}</div></div></section>
    <section className="inner-cta"><div className="container"><div><small>Orçamento sem complicação</small><h2>Vamos conversar sobre {service.title.toLowerCase()}?</h2><p>Envie os detalhes e receba uma orientação inicial da nossa equipe.</p></div><a className="button button-green" href="/contato">Solicitar orçamento <ArrowRight size={18}/></a></div></section>
    <SiteFooter/><WhatsappFloat/>
  </main>;
}

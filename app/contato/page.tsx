import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SiteFooter, SiteHeader, WhatsappFloat } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Contato e Orçamento | Clic Air São Paulo",
  description: "Solicite um orçamento para climatização, instalação de ar-condicionado, manutenção, PMOC ou reformas. Preencha o formulário e fale pelo WhatsApp.",
};

export default function ContactPage() {
  return <main><SiteHeader />
    <section className="inner-hero contact-inner-hero"><div className="container"><div className="eyebrow"><span /> Fale conosco</div><h1>Conte o que você precisa. <em>Nós cuidamos da solução.</em></h1><p>Preencha os dados e continue o atendimento diretamente pelo WhatsApp.</p></div></section>
    <section className="inner-section contact-page-section"><div className="container contact-page-grid"><div className="contact-info"><small>Atendimento Clic Air</small><h2>Vamos entender o seu projeto.</h2><p>Envie as principais informações pelo formulário. A mensagem será organizada e aberta no WhatsApp para você confirmar o envio.</p>
      <div className="contact-detail"><span><Phone/></span><div><small>WhatsApp</small><a href="tel:+5511947330170">11 94733-0170</a><a href="tel:+5511976009837">11 97600-9837</a></div></div>
      <div className="contact-detail"><span><Mail/></span><div><small>E-mail</small><a href="mailto:contato@clicair.com.br">contato@clicair.com.br</a></div></div>
      <div className="contact-detail"><span><MapPin/></span><div><small>Atendimento</small><p>São Paulo — SP</p></div></div>
    </div><ContactForm/></div></section>
    <SiteFooter/><WhatsappFloat/>
  </main>;
}

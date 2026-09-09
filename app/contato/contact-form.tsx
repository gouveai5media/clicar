"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const data = new FormData(event.currentTarget);
    const text = [
      "Olá, gostaria de solicitar um orçamento pelo site da Clic Air.",
      "",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `E-mail: ${data.get("email") || "Não informado"}`,
      `Serviço: ${data.get("servico")}`,
      `Local do projeto: ${data.get("local") || "Não informado"}`,
      "",
      `Detalhes: ${data.get("mensagem")}`,
    ].join("\n");
    window.open(`https://wa.me/5511947330170?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>Solicite seu orçamento</span><h2>Fale com um especialista</h2><p>Os campos com * são obrigatórios.</p></div>
    <div className="form-grid"><label><span>Nome completo *</span><input name="nome" type="text" autoComplete="name" required placeholder="Digite seu nome"/></label><label><span>WhatsApp *</span><input name="telefone" type="tel" autoComplete="tel" required placeholder="(11) 99999-9999"/></label></div>
    <div className="form-grid"><label><span>E-mail</span><input name="email" type="email" autoComplete="email" placeholder="seuemail@empresa.com"/></label><label><span>Serviço desejado *</span><select name="servico" required defaultValue=""><option value="" disabled>Selecione um serviço</option>{services.map(service => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></label></div>
    <label><span>Local do projeto</span><input name="local" type="text" placeholder="Bairro ou cidade"/></label>
    <label><span>Conte um pouco sobre a necessidade *</span><textarea name="mensagem" required rows={5} placeholder="Ex.: preciso instalar dois aparelhos em um escritório..."/></label>
    <button className="button button-green form-submit" type="submit" disabled={sending}>{sending ? "Abrindo WhatsApp..." : "Continuar pelo WhatsApp"} <ArrowRight size={18}/></button>
    <small className="form-note">Ao continuar, você poderá revisar a mensagem antes de enviá-la no WhatsApp.</small>
  </form>;
}

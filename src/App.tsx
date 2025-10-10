// (removido: import React from "react")
import Timeline, { type TimelineItem } from "./components/Timeline"

const WHATSAPP = "5511999990000" // troque pelo número real (apenas dígitos)
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
const heroImg =
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80"

export default function App() {
  const year = new Date().getFullYear()

  const timelineItems: TimelineItem[] = [
    {
      date: "2018",
      title: "Formação em Fisioterapia",
      text: "Conclusão da graduação com iniciação científica em dor lombar crônica.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=60",
    },
    {
      date: "2019",
      title: "Especialização em Ortopedia",
      text: "Aprofundamento em reabilitação musculoesquelética e retorno ao esporte.",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=60",
    },
    {
      date: "2021",
      title: "Pilates Clínico",
      text: "Certificação e protocolos focados em cervical e lombar.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=900&q=60",
    },
    {
      date: "2024",
      title: "Clínica Própria",
      text: "Atendimento 1:1 com educação em dor e planos personalizados.",
      image: "https://images.unsplash.com/photo-1580281657527-47f249e8f3c7?auto=format&fit=crop&w=900&q=60",
    },
  ]

  return (
    <main className="site">
      {/* fundo */}
      <div className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      {/* Topbar */}
      <header className="topbar" role="banner">
        <a href="#top" className="brand" aria-label="Início">
          <span className="logo">V</span>
          <span>Vitória • Fisioterapia</span>
        </a>
        <nav aria-label="Navegação primária">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#timeline">História</a>
          <a href="#contato">Contato</a>
          <a className="btn small" href={wa("Olá, gostaria de agendar uma avaliação.")} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="hero container">
        <div className="hero__text">
          <h1>Movimento com qualidade, <span className="grad">sem dor</span>.</h1>
          <p>
            Sou <strong>Vitória</strong>, fisioterapeuta. Juntas(os), vamos aliviar dores, recuperar função e
            voltar ao que você ama fazer.
          </p>
          <div className="hero__cta">
            <a className="btn" href={wa("Oi Vitória! Quero marcar uma avaliação.")} target="_blank" rel="noreferrer">
              Agendar avaliação
            </a>
            <a className="btn ghost" href="#servicos">Ver serviços</a>
          </div>
          <ul className="badges" aria-label="Diferenciais">
            <li>Atendimento humanizado</li>
            <li>Baseado em evidências</li>
            <li>Planos individuais</li>
          </ul>
        </div>
        <div className="hero__media">
          <img src={heroImg} alt="Fisioterapeuta em atendimento" />
          <div className="hero__card">
            <strong>Agende online</strong>
            <span>WhatsApp em 1 clique</span>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section container">
        <h2 className="h">Serviços</h2>
        <p className="sub muted">Tratamentos personalizados para cada objetivo.</p>
        <div className="grid">
          <article className="card hover">
            <h3>Avaliação Postural</h3>
            <p>Identificação de desequilíbrios e dor, com plano sob medida.</p>
          </article>
          <article className="card hover">
            <h3>Reabilitação Ortopédica</h3>
            <p>Protocolos individualizados para retorno seguro às atividades.</p>
          </article>
          <article className="card hover">
            <h3>Pilates Clínico</h3>
            <p>Força, mobilidade e respiração voltadas à reabilitação e prevenção.</p>
          </article>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section container about">
        <h2 className="h">Sobre a Vitória</h2>
        <p className="muted">
          Fisioterapeuta (CREFITO 000000) especializada em reabilitação de coluna e joelho. Atuação com foco na
          educação em dor, exercícios terapêuticos e prevenção de recidivas.
        </p>
        <div className="about__split">
          <ul className="list">
            <li>✓ Avaliação detalhada e metas claras</li>
            <li>✓ Programas progressivos e realistas</li>
            <li>✓ Comunicação transparente</li>
          </ul>
          <div className="stats">
            <div className="stat"><strong>+8</strong><span>anos de prática</span></div>
            <div className="stat"><strong>95%</strong><span>satisfação</span></div>
            <div className="stat"><strong>1:1</strong><span>atenção exclusiva</span></div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline heading="História" subheading="Minha jornada de formação e clínica." items={timelineItems} />

      {/* Contato */}
      <section id="contato" className="section container contact">
        <h2 className="h">Contato</h2>
        <div className="cards contact__cards">
          <a className="card link" href={wa("Olá! Vim pelo site e quero saber mais.")} target="_blank" rel="noreferrer">
            <strong>WhatsApp</strong>
            <span className="muted">Abrir conversa</span>
          </a>
          <a className="card link" href="mailto:vitoria@clinica.com">
            <strong>E-mail</strong>
            <span className="muted">vitoria@clinica.com</span>
          </a>
          <div className="card">
            <strong>Endereço</strong>
            <span className="muted">Rua Exemplo, 123 — Bairro — Cidade/SP</span>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const data = new FormData(form)
            const msg =
              `Olá, sou ${data.get("nome")} (${data.get("email")}). ` +
              `Assunto: ${data.get("assunto")}. Mensagem: ${data.get("mensagem")}`
            window.open(wa(msg), "_blank")
            form.reset()
          }}
        >
          <div className="form__row">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" placeholder="Seu nome" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" placeholder="voce@exemplo.com" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="assunto">Assunto</label>
            <input id="assunto" name="assunto" placeholder="Ex.: avaliação, dor lombar..." />
          </div>

          <div className="field">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" placeholder="Como posso ajudar?" rows={4}></textarea>
            <small className="hint">Você será respondido(a) pelo WhatsApp.</small>
          </div>

          <button className="btn" type="submit">Enviar pelo WhatsApp</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="footer container">
        © {year} Vitória — Fisioterapeuta. <span className="muted">CREFITO 000000.</span>
      </footer>

      {/* WhatsApp flutuante */}
      <a className="fab" href={wa("Olá Vitória! Vim pelo site.")} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        ☻
      </a>
    </main>
  )
}

import { useEffect, useState } from "react";
import History from "./components/History";
import FeedbackList from "./components/FeedbackList";
import FAQ from "./components/🧩 FAQ";
import KnowledgeHighlights from "./components/KnowledgeHighlights";
import ScrollProgress from "./components/ScrollProgress";

// imagem local já usada por você
import heroImg from "./assets/vitoria2.jpeg";

const WHATSAPP = "5535998193849"; // +55 35 99819-3849 (apenas dígitos)
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function App() {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  // breakpoints para decidir se aplica o "hide on scroll"
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 920px)").matches : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 920px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // esconder/mostrar header somente no mobile
  const [headerHidden, setHeaderHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      if (!isMobile) {
        // em telas maiores, header sempre visível
        if (headerHidden) setHeaderHidden(false);
        return;
      }
      const y = window.scrollY;
      setHeaderHidden(y > lastY && y > 10); // esconde ao descer, mostra ao subir
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, headerHidden]);

  // expõe no <html> para o CSS posicionar a barra de progresso corretamente
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-header-hidden",
      headerHidden ? "true" : "false"
    );
  }, [headerHidden]);

  return (
    <main className="site">
      {/* fundo */}
      <div className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      {/* Topbar */}
      <header className={`topbar ${headerHidden ? "is-hidden" : ""}`} role="banner">
        <a
          href="#top"
          className="brand"
          aria-label="Início"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo">V</span>
          <span>Vitória Silva • Fisioterapia</span>
        </a>

        {/* Botão hamburger (mobile) */}
        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Navegação */}
        <nav
          id="primary-nav"
          className={`nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação primária"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === "a") setMenuOpen(false);
          }}
        >
          <a href="#servicos">Competências</a>
          <a href="#sobre">Sobre</a>
          <a href="#timeline">História</a>
          <a href="#contato">Contato</a>
          <a
            className="btn small"
            href={wa(
              "Olá, gostaria de falar sobre oportunidades de estágio/colaboração."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </header>

      {/* Barra de progresso sempre visível */}
      <ScrollProgress />

      {/* Hero */}
      <section id="top" className="hero container">
        <div className="hero__text">
          <h1>
            Vitória Silva — <span className="grad">Fisioterapia</span>
          </h1>
          <p>
            Estudante no <strong>último ano</strong>, em estágio prático
            supervisionado, com atuação em <strong>múltiplas áreas</strong>:
            musculoesquelética, respiratória, neurológica e cardiorrespiratória.
            Atendo com <strong>comunicação clara</strong>, foco em{" "}
            <strong>resultados</strong> e plano de cuidado{" "}
            <strong>centrado na pessoa</strong>. Em busca de novos desafios e
            oportunidades para contribuir e evoluir.
          </p>
          <div className="hero__cta">
            <a
              className="btn"
              href={wa(
                "Olá! Gostaria de saber mais sobre seu perfil e disponibilidade."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Conversar agora
            </a>
            <a className="btn ghost" href="#servicos">
              Ver competências
            </a>
          </div>
          <ul className="badges" aria-label="Destaques">
            <li>Estágio supervisionado</li>
            <li>Atendimento humanizado</li>
            <li>Evidências na prática</li>
          </ul>
        </div>
        <div className="hero__media">
          <img src={heroImg} alt="Vitória Silva — Estudante de Fisioterapia" />
          <div className="hero__card">
            <strong>Objetivo</strong>
            <span>Estágio e projetos em reabilitação</span>
          </div>
        </div>
      </section>

      {/* Competências */}
      <section id="servicos" className="section container">
        <h2 className="h">Competências & Interesses</h2>
        <p className="sub muted">
          Um recorte direto do que aplico no estágio — com segurança, empatia e
          progresso mensurável.
        </p>
        <div className="grid">
          <article className="card hover">
            <h3>Base Clínica</h3>
            <p>
              Avaliação funcional, raciocínio clínico e definição de condutas
              com metas objetivas.
            </p>
          </article>
          <article className="card hover">
            <h3>Recursos Terapêuticos</h3>
            <p>
              Cinesioterapia, técnicas manuais, exercícios terapêuticos e
              educação em dor.
            </p>
          </article>
          <article className="card hover">
            <h3>Acompanhamento</h3>
            <p>
              Reavaliações, registros objetivos e ajustes de plano conforme
              evolução e objetivos pessoais.
            </p>
          </article>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section container about">
        <h2 className="h">Sobre a Vitória</h2>
        <p className="muted">
          Foco em comunicação acessível, acolhimento e construção conjunta do
          tratamento. Valorizo metas claras, progressões seguras e autonomia no
          cuidado, sempre com base em evidências e nas preferências da pessoa.
        </p>
        <div className="about__split">
          <ul className="list">
            <li>✓ Estágio prático em múltiplas áreas</li>
            <li>✓ Abordagem humanizada e orientada a metas</li>
            <li>✓ Educação em dor e exercícios terapêuticos</li>
          </ul>
          <div className="stats">
            <div className="stat">
              <strong>8</strong>
              <span>semestres</span>
            </div>
            <div className="stat">
              <strong>1:1</strong>
              <span>atenção individual</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>compromisso com a segurança</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conhecimentos */}
      <KnowledgeHighlights />

      {/* História (Timeline) */}
      <History />

      {/* Contato */}
      <section id="contato" className="section container contact">
        <h2 className="h">Contato</h2>
        <div className="cards contact__cards">
          <a
            className="card link"
            href={wa(
              "Olá, Vitória! Vim pelo seu site e gostaria de falar sobre oportunidades."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <strong>WhatsApp</strong>
            <span className="muted">+55 35 99819-3849</span>
          </a>
          <a className="card link" href="mailto:vitoria@universidade.com">
            <strong>E-mail</strong>
            <span className="muted">vitoria@universidade.com</span>
          </a>
          <div className="card">
            <strong>Local</strong>
            <span className="muted">Franca/SP — Brasil</span>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const msg =
              `Olá, sou ${data.get("nome")} (${data.get("email")}). ` +
              `Assunto: ${data.get("assunto")}. Mensagem: ${data.get(
                "mensagem"
              )}`;
            window.open(wa(msg), "_blank");
            form.reset();
          }}
        >
          <div className="form__row">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" placeholder="Seu nome" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="voce@exemplo.com"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="assunto">Assunto</label>
            <input
              id="assunto"
              name="assunto"
              placeholder="Oportunidade, estágio, parceria..."
            />
          </div>

          <div className="field">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Como posso ajudar?"
              rows={4}
            ></textarea>
            <small className="hint">
              Você será respondido(a) pelo WhatsApp.
            </small>
          </div>

          <button className="btn" type="submit">
            Enviar pelo WhatsApp
          </button>
        </form>
      </section>

      {/* Feedback (depoimentos) */}
      <FeedbackList />

      {/* FAQ */}
      <FAQ />

      {/* Mapa */}
      <section id="mapa" className="section container">
        <h2 className="h">Como chegar</h2>
        <p className="sub muted">Atividades e estudos em Franca (SP)</p>
        <div className="map-wrapper">
          <iframe
            title="Mapa – Franca/SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.798229199208!2d-47.40136962575971!3d-20.539321358368823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a996e56b9a9b%3A0x5b0c23b3e5a4541d!2sFranca%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "var(--radius)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer container">
        © {year} Vitória Silva — Estudante de Fisioterapia.
      </footer>

      {/* WhatsApp flutuante */}
      <a
        className="fab"
        href={wa("Olá Vitória! Vim pelo site.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        ☻
      </a>
    </main>
  );
}

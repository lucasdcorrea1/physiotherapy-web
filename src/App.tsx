// src/App.tsx
import { useEffect, useState } from "react";
import History from "./components/History";
import FeedbackList from "./components/FeedbackList";
import FAQ from "./components/🧩 FAQ";
import KnowledgeHighlights from "./components/KnowledgeHighlights";
import ScrollProgress from "./components/ScrollProgress";

import heroImg from "./assets/vitoria2.jpeg";

const WHATSAPP = "5535998193849"; // +55 35 99819-3849 (apenas dígitos)
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function App() {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  // breakpoint p/ aplicar hide-on-scroll só no mobile
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 920px)").matches
      : true
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 920px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // esconder/mostrar header somente no mobile (ao rolar)
  const [headerHidden, setHeaderHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      if (!isMobile) {
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

  // travar/destravar scroll do body quando o menu abrir (somente mobile)
  useEffect(() => {
    const lock = menuOpen && isMobile;
    document.body.style.overflow = lock ? "hidden" : "";
    document.documentElement.setAttribute(
      "data-menu-open",
      lock ? "true" : "false"
    );
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  // expõe flag no <html> para posicionar a barra de progresso
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-header-hidden",
      headerHidden ? "true" : "false"
    );
  }, [headerHidden]);

  return (
    <main className="site">
      {/* Fundo */}
      <div className="bg" />

      {/* Topbar */}
      <header
        className={`topbar ${headerHidden ? "is-hidden" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
        role="banner"
      >
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
          <a href="#interesses">Interesses</a>
          <a href="#contato">Contato</a>
          <a
            className="btn small"
            href={wa(
              "Olá, tudo bem? Gostaria de conversar sobre uma oportunidade de estágio em Fisioterapia."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Conversar sobre estágio
          </a>
        </nav>
      </header>

      {/* Scrim (fundo escuro atrás do painel do menu) */}
      {isMobile && menuOpen && (
        <div className="nav-scrim" onClick={() => setMenuOpen(false)} aria-hidden />
      )}

      {/* Barra de progresso sempre visível */}
      <ScrollProgress />

      {/* Hero */}
      <section id="top" className="hero container">
        <div className="hero__text">
          <h1>
            Vitória Silva — <span className="grad">Fisioterapia</span>
          </h1>
          <p>
            Estudante do <strong>último ano</strong> com prática clínica
            supervisionada em <strong>múltiplas áreas</strong> — musculoesquelética,
            respiratória, neurológica e cardiorrespiratória. Comunicação{" "}
            <strong>clara</strong>, registro <strong>objetivo</strong> e foco em{" "}
            <strong>evolução mensurável</strong>. Busco minha{" "}
            <strong>primeira vaga de estágio</strong> para aprender com a equipe
            e contribuir no cuidado ao paciente.
          </p>
          <div className="hero__cta">
            <a
              className="btn"
              href={wa(
                "Olá! Sou a Vitória Silva (Fisioterapia). Podemos conversar sobre estágio?"
              )}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre estágio
            </a>
            <a className="btn ghost" href="#servicos">
              Ver competências
            </a>
          </div>

        </div>
        <div className="hero__media">
          <img src={heroImg} alt="Vitória Silva — Estudante de Fisioterapia" />
          <div className="hero__card">
            <strong>Objetivo</strong>
            <span>Conquistar a 1ª vaga de estágio</span>
          </div>
        </div>
      </section>

      {/* Competências */}
      <section id="servicos" className="section container">
        <h2 className="h">Competências em prática</h2>
        <p className="sub muted">
          O essencial que aplico no dia a dia: método, clareza e segurança.
        </p>
        <div className="grid">
          <article className="card hover">
            <h3>Base Clínica</h3>
            <p>
              Avaliação funcional objetiva, raciocínio clínico e plano com metas
              claras para orientar progressões.
            </p>
          </article>
          <article className="card hover">
            <h3>Recursos Terapêuticos</h3>
            <p>
              Cinesioterapia, técnicas manuais quando indicadas, educação em dor
              e exercícios focados na função.
            </p>
          </article>
          <article className="card hover">
            <h3>Acompanhamento</h3>
            <p>
              Reavaliações, registros simples e objetivos, revisão de conduta por
              desfechos e feedbacks.
            </p>
          </article>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section container about">
        <h2 className="h">Sobre a Vitória</h2>
        <p className="muted">
          Busco aprender com a equipe e contribuir no que estiver ao meu alcance:
          organização do atendimento, comunicação acessível e dedicação a cada
          pessoa. Compromisso com segurança, ética e prática baseada em evidências —
          sempre com acolhimento e respeito.
        </p>
        <div className="about__split">
          <ul className="list">
            <li>✓ Vivência em múltiplas áreas clínicas</li>
            <li>✓ Comunicação simples e empática</li>
            <li>✓ Foco em metas e desfechos clínicos</li>
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
              <span>compromisso com segurança</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conhecimentos (cards elegantes) */}
      <KnowledgeHighlights />

      {/* História (Timeline) */}
      <History />

      {/* Interesses atuais */}
      <section id="interesses" className="section container">
        <h2 className="h">Interesses atuais</h2>
        <p className="sub muted">
          Frentes em que estou aprofundando prática e estudo.
        </p>

        <div className="cards interests">
          <div className="card">
            <strong className="interest-title">Musculoesquelética</strong>
            <span className="interest-desc">
              Dor lombar, joelho e ombro • retorno às atividades
            </span>
          </div>
          <div className="card">
            <strong className="interest-title">Neurofuncional</strong>
            <span className="interest-desc">
              Controle motor, equilíbrio e marcha
            </span>
          </div>
          <div className="card">
            <strong className="interest-title">Cardiorrespiratória</strong>
            <span className="interest-desc">
              Condicionamento físico e educação em saúde
            </span>
          </div>
        </div>
      </section>

      {/* Contato (no fim do site) */}
      <section id="contato" className="section container contact">
        <h2 className="h">Contato</h2>
        <p className="sub muted">
          Fico feliz em conversar sobre uma oportunidade — respondo com agilidade.
        </p>

        <div className="cards contact__cards">
          <a
            className="card link"
            href={wa(
              "Olá, Vitória! Gostaria de conversar sobre uma oportunidade de estágio."
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
            <strong>Cidade</strong>
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
              `Assunto: ${data.get("assunto")}. Mensagem: ${data.get("mensagem")}`;
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
              placeholder="Oportunidade de estágio em Fisioterapia"
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

      {/* Rodapé */}
      <footer className="footer container">
        © {year} Vitória Silva — Estudante de Fisioterapia.
      </footer>
    </main>
  );
}

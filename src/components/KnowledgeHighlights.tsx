import "./KnowledgeHighlights.css"

type Item = { title: string; points: string[]; meta?: string; icon?: string }

const ITEMS: Item[] = [
  {
    title: "Músculo-esquelético",
    icon: "💪",
    points: [
      "Avaliação funcional objetiva (dor, força, mobilidade)",
      "Cinesioterapia com progressões seguras",
      "Retorno às atividades com metas claras",
    ],
    meta: "Pronta para apoiar volume de atendimentos",
  },
  {
    title: "Cardiorrespiratório",
    icon: "🌬️",
    points: [
      "Condicionamento e atenção respiratória",
      "Educação em autocuidado e sinais de alerta",
      "Plano individual e revisões periódicas",
    ],
    meta: "Condutas alinhadas a protocolos da equipe",
  },
  {
    title: "Neurofuncional",
    icon: "🧠",
    points: [
      "Reabilitação sensório-motora",
      "Treino de marcha, equilíbrio e função",
      "Orientações simples e aplicáveis no dia a dia",
    ],
    meta: "Foco em segurança e autonomia do paciente",
  },
  {
    title: "Avaliação & Indicadores",
    icon: "📏",
    points: [
      "Testes funcionais e registros objetivos",
      "Reavaliação por desfechos clínicos",
      "Decisão baseada em evidências",
    ],
    meta: "Documentação clara e organizada",
  },
  {
    title: "Técnicas Manuais (apoio)",
    icon: "🤲",
    points: [
      "Alívio de dor e rigidez quando indicado",
      "Mobilizações + autocuidado orientado",
      "Integração com exercício ativo",
    ],
    meta: "Uso responsável, com critérios definidos",
  },
  {
    title: "Postura Profissional",
    icon: "🌿",
    points: [
      "Escuta ativa e comunicação empática",
      "Trabalho em equipe e receptividade a feedback",
      "Ética, segurança e responsabilidade",
    ],
    meta: "Objetivo: estágio para aprender e contribuir",
  },
]

export default function KnowledgeHighlights() {
  return (
    <section id="conhecimentos" className="kh section container" aria-labelledby="kh-title">
      <header className="kh__header">
        <h2 id="kh-title" className="h">Pronta para Estágio</h2>
        <p className="sub muted">
          O essencial que a <strong>Vitória</strong> entrega: organização, clareza e evolução mensurável.
        </p>
      </header>

      <div className="kh__grid">
        {ITEMS.map((item, i) => (
          <article className="kh__card" key={i}>
            <div className="kh__topbar">
              {item.icon && <span className="kh__chip" aria-hidden>{item.icon}</span>}
              <h3 className="kh__title">{item.title}</h3>
            </div>

            <ul className="kh__list">
              {item.points.map((p, idx) => (
                <li className="kh__li" key={idx}>
                  <span className="kh__dot" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {item.meta && <div className="kh__meta">{item.meta}</div>}
            <span className="kh__corner" aria-hidden />
          </article>
        ))}
      </div>
    </section>
  )
}

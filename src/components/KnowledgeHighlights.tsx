// src/components/KnowledgeHighlights.tsx
import "./KnowledgeHighlights.css"

type Item = {
  title: string
  points: string[]
  meta?: string
  icon?: string
}

const ITEMS: Item[] = [
  {
    title: "Músculo-esquelético",
    icon: "💪",
    points: [
      "Avaliação funcional objetiva",
      "Cinesioterapia e progressões seguras",
      "Retorno à função com metas claras",
    ],
    meta: "Estágio prático supervisionado",
  },
  {
    title: "Cardiorrespiratório",
    icon: "🌬️",
    points: [
      "Atenção respiratória e condicionamento",
      "Monitoramento e educação em autocuidado",
      "Plano individualizado e revisões periódicas",
    ],
  },
  {
    title: "Neurofuncional",
    icon: "🧠",
    points: [
      "Reabilitação sensório-motora",
      "Exercícios orientados à função",
      "Treino de equilíbrio e marcha",
    ],
  },
  {
    title: "Avaliação & Medidas",
    icon: "📏",
    points: [
      "Testes funcionais e registros objetivos",
      "Reavaliação por desfechos",
      "Evidências para decisão clínica",
    ],
  },
  {
    title: "Técnicas Manuais",
    icon: "🤲",
    points: [
      "Alívio de dor e rigidez",
      "Mobilizações e orientações de autocuidado",
      "Integração com exercícios ativos",
    ],
  },
  {
    title: "Abordagem Humana",
    icon: "🌿",
    points: [
      "Escuta ativa e educação em dor",
      "Comunicação simples e empática",
      "Acompanhamento próximo",
    ],
    meta: "Foco em segurança e clareza",
  },
]

export default function KnowledgeHighlights() {
  return (
    <section id="conhecimentos" className="kh section container" aria-labelledby="kh-title">
      <header className="kh__header">
        <h2 id="kh-title" className="h">Resumo de Competências</h2>
        <p className="sub muted">
          Um recorte direto do que a <strong>Vitória Silva</strong> pratica no estágio — com foco em resultados, segurança e cuidado humano.
        </p>
      </header>

      <div className="kh__grid">
        {ITEMS.map((item, i) => (
          <article className="kh__card" key={i}>
            <div className="kh__head">
              {item.icon && <span className="kh__icon" aria-hidden>{item.icon}</span>}
              <h3 className="kh__title">{item.title}</h3>
            </div>

            <ul className="kh__list">
              {item.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>

            {item.meta && <div className="kh__meta">{item.meta}</div>}
          </article>
        ))}
      </div>
    </section>
  )
}

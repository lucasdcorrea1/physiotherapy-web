// src/components/🧩 FAQ.tsx
import { useState, useRef, useEffect } from "react"
import "./FAQ.css"

interface QA {
  q: string
  a: string
}

const faqs: QA[] = [
  {
    q: "O que você faz na prática?",
    a: "Avalio de forma simples, defino metas junto com a pessoa e aplico exercícios, educação em dor e técnicas manuais quando necessário — sempre de maneira segura e clara."
  },
  {
    q: "Em quais casos costuma atuar?",
    a: "Quadros musculoesqueléticos (lombar, joelho, ombro), respiratórios e neurofuncionais (equilíbrio e marcha), com foco em retorno às atividades e autonomia."
  },
  {
    q: "Como é a primeira conversa?",
    a: "Escuto o histórico, defino objetivos fáceis de entender e proponho um plano inicial curto, com orientações para casa e ajustes a cada encontro."
  },
  {
    q: "Como acompanha a evolução?",
    a: "Registro metas e exercícios de forma objetiva e faço reavaliações periódicas. Assim fica claro o que está funcionando e o que precisa ajustar."
  },
  {
    q: "Como falar com você?",
    a: "Pode me chamar no WhatsApp (+55 35 99819-3849) para um bate-papo rápido, ou por e-mail em vitoria@universidade.com."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return
      el.style.maxHeight = open === i ? el.scrollHeight + "px" : "0px"
    })
  }, [open])

  return (
    <section id="faq" className="section container faq">
      <h2 className="h">Perguntas rápidas</h2>
      <p className="sub muted">
        Como trabalho no dia a dia — direto ao ponto.
      </p>

      <div className="faq__list">
        {faqs.map((item, i) => (
          <article key={i} className={`faq__item ${open === i ? "is-open" : ""}`}>
            <button
              className="faq__question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.q}
              <span className="faq__icon">{open === i ? "−" : "+"}</span>
            </button>
            <div
              className="faq__answer"
              ref={(el) => (refs.current[i] = el)}
            >
              <p>{item.a}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

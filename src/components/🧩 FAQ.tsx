import { useState, useRef, useEffect } from "react"
import "./FAQ.css"

interface QA {
  q: string
  a: string
}

const faqs: QA[] = [
  {
    q: "Como funciona a avaliação inicial?",
    a: "Avaliamos postura, mobilidade e histórico. Você recebe um plano personalizado e metas claras."
  },
  {
    q: "Atende dor lombar crônica?",
    a: "Sim. Trabalho com educação em dor, exercícios graduais e estratégias baseadas em evidências."
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Em média 50–60 minutos, variando conforme a necessidade do caso."
  },
  {
    q: "Há atendimento para crianças/adolescentes?",
    a: "Sim, com abordagem adaptada e orientação à família."
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
      <h2 className="h">Dúvidas frequentes</h2>
      <p className="sub muted">Perguntas comuns sobre o atendimento e os serviços.</p>

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

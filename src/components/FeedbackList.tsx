import "./FeedbackList.css"

interface Feedback {
  name: string
  stars: number
  text: string
  photo: string
}

const feedbacks: Feedback[] = [
  {
    name: "Mariana S.",
    stars: 5,
    text: "A Vitória é incrível! Explicou tudo com paciência e clareza. Hoje consigo me movimentar sem dor e com confiança.",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Juliana P.",
    stars: 5,
    text: "Fui com meu filho de 10 anos, que teve uma lesão no joelho. A atenção e o carinho da Vitória com ele foram excepcionais!",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Carla T.",
    stars: 4,
    text: "Atendimento muito acolhedor, ambiente tranquilo e resultados visíveis. Recomendo de olhos fechados.",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Renata L.",
    stars: 5,
    text: "Sofria com dores na lombar há anos. Depois das sessões, minha qualidade de vida melhorou 100%.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",
  },
]

export default function FeedbackList() {
  return (
    <section id="feedback" className="section container feedback">
      <h2 className="h">O que dizem as pacientes</h2>
      <p className="sub muted">Depoimentos reais sobre o atendimento e resultados.</p>

      <div className="feedback__grid">
        {feedbacks.map((f, i) => (
          <article className="feedback__card" key={i}>
            <img src={f.photo} alt={f.name} className="feedback__photo" />
            <div className="feedback__stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className={idx < f.stars ? "filled" : ""}>★</span>
              ))}
            </div>
            <p className="feedback__text">“{f.text}”</p>
            <strong className="feedback__name">— {f.name}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

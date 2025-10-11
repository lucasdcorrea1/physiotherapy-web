// src/components/FeedbackList.tsx
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
    text:
      "Fui atendida pela Vitória durante o estágio na clínica-escola. Ela explicou cada exercício com muita paciência e me senti muito segura no processo.",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Juliana P.",
    stars: 5,
    text:
      "Levei meu filho (10 anos) após uma lesão no joelho. A Vitória foi super atenciosa e carinhosa. Mesmo em estágio, mostrou profissionalismo e cuidado.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Carla T.",
    stars: 4,
    text:
      "Tive um atendimento acolhedor no estágio supervisionado. Saí com um plano de exercícios claro e já percebi melhora nas primeiras semanas.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Renata L.",
    stars: 5,
    text:
      "Cheguei com dor lombar constante. No acompanhamento do estágio, a Vitória adaptou os exercícios e me orientou super bem. A dor diminuiu muito!",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",
  },
]

export default function FeedbackList() {
  return (
    <section id="feedback" className="section container feedback">
      <h2 className="h">O que dizem os atendimentos no estágio</h2>
      <p className="sub muted">
        Depoimentos de pacientes atendidos na clínica-escola, com supervisão docente.
      </p>

      <div className="feedback__grid">
        {feedbacks.map((f, i) => (
          <article className="feedback__card" key={i}>
            <img src={f.photo} alt={f.name} className="feedback__photo" />
            <div className="feedback__stars" aria-label={`${f.stars} de 5 estrelas`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className={idx < f.stars ? "filled" : ""}>
                  ★
                </span>
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

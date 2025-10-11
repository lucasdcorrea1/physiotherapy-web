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
      "A Vitória explicou tudo com calma e deixou claro o que eu precisava fazer. Saí confiante e já senti melhora.",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Juliana P.",
    stars: 5,
    text:
      "Levei meu filho depois de uma lesão no joelho. Ela foi atenciosa, paciente e passou muita segurança pra gente.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Carla T.",
    stars: 4,
    text:
      "Fui muito bem recebida. Tive um plano simples de seguir em casa e nas primeiras semanas já vi resultado.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60",
  },

]

export default function FeedbackList() {
  return (
    <section id="feedback" className="section container feedback" aria-labelledby="feedback-title">
      <header className="fb-head">
        <h2 id="feedback-title" className="h">Depoimentos</h2>
        <p className="sub muted">Relatos curtos de quem foi atendido pela Vitória.</p>
      </header>

      <div className="fb-grid">
        {feedbacks.map((f, i) => (
          <article className="fb-card" key={i} aria-label={`Depoimento de ${f.name}`}>
            <div className="fb-top">
              <img className="fb-photo" src={f.photo} alt={f.name} />
              <div className="fb-id">
                <strong className="fb-name">{f.name}</strong>
                <div className="fb-stars" aria-label={`${f.stars} de 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className={idx < f.stars ? "filled" : ""}>★</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="fb-text">
              <span className="fb-quote" aria-hidden>“</span>
              {f.text}
              <span className="fb-quote fb-quote--end" aria-hidden>”</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

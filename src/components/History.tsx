// src/components/History.tsx
import Timeline, { type TimelineItem } from "./Timeline"
import minhaFoto from "../assets/IMG_3027.jpg"
import minhaFoto2 from "../assets/IMG_3027 2.jpg"

export default function History() {
  const timelineItems: TimelineItem[] = [
    {
      date: "2018",
      title: "Vocação pela Fisioterapia",
      text:
        "Primeiros passos na área da saúde, contato com reabilitação e interesse por cuidados físico-funcionais.",
      image: minhaFoto,
    },
    {
      date: "2019",
      title: "Base de Estudo e Preparação",
      text:
        "Aprofundamento em conteúdos introdutórios (anatomia e fisiologia) e participação em atividades complementares.",
      image: minhaFoto2,
    },
    {
      date: "2021",
      title: "Foco Acadêmico em Fisioterapia",
      text:
        "Consolidação dos fundamentos e técnicas: cinesioterapia, recursos manuais e raciocínio clínico aplicado.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      date: "2024",
      title: "Prática Supervisionada & Novos Desafios",
      text:
        "Vivência em ambientes de atendimento, reabilitação sensório-motora e hidroterapia. Buscando estágio e oportunidades para crescer.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },
  ]

  return (
    <section id="timeline" className="section container" style={{ paddingTop: "100px" }}>
      <Timeline
        heading="História"
        subheading="Minha evolução na Fisioterapia — estudos, prática e objetivos."
        items={timelineItems}
      />
    </section>
  )
}

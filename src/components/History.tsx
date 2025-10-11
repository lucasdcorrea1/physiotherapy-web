// src/components/History.tsx
import Timeline, { type TimelineItem } from "./Timeline"
import minhaFoto from "../assets/IMG_3027.jpg" // ✅ import está/Users/iultra/Downloads/IMG_3027 2.jpgtico (Vite resolve o caminho)
import minhaFoto2 from "../assets/IMG_3027 2.jpg" // ✅ import está/Users/iultra/Downloads/IMG_3027 2.jpgtico (Vite resolve o caminho)

export default function History() {
  const timelineItems: TimelineItem[] = [
    {
      date: "2018",
      title: "Formação em Fisioterapia",
      text: "Conclusão da graduação com iniciação científica em dor lombar crônica.",
      image: minhaFoto, // ✅ use a var importada
    },
    {
      date: "2019",
      title: "Especialização em Ortopedia",
      text: "Aprofundamento em reabilitação musculoesquelética e retorno ao esporte.",
      image: minhaFoto2,
    },
    {
      date: "2021",
      title: "Pilates Clínico",
      text: "Certificação e protocolos focados em cervical e lombar.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      date: "2024",
      title: "Clínica Própria",
      text: "Atendimento 1:1 com educação em dor e planos personalizados.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },
  ]

  return (
    <section id="timeline" className="section container" style={{ paddingTop: "100px" }}>
      <Timeline
        heading="História"
        subheading="Minha jornada de formação e clínica."
        items={timelineItems}
      />
    </section>
  )
}

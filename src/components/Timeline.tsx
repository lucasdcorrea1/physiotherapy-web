import React, { useEffect, useRef } from "react"

export type TimelineItem = {
  date: string
  title: string
  text: string
  image: string
}

type Props = {
  items: TimelineItem[]
  heading?: string
  subheading?: string
}

export default function Timeline({ items, heading = "Linha do tempo", subheading }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const targets = Array.from(root.querySelectorAll<HTMLElement>(".tl__item"))
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.2 }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <h2 className="h">{heading}</h2>
        {subheading && <p className="sub">{subheading}</p>}

        <div className="tl" ref={containerRef}>
          <div className="tl__line" aria-hidden />
          {items.map((it, idx) => {
            const side = idx % 2 === 0 ? "left" : "right"
            return (
              <article className={`tl__item ${side}`} key={idx}>
                <time className="tl__date" dateTime={it.date}>{it.date}</time>
                <div className="tl__media"><img src={it.image} alt={it.title} loading="lazy" /></div>
                <div className="tl__content">
                  <h3 className="tl__title">{it.title}</h3>
                  <p className="tl__text">{it.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

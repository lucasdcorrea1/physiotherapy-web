import { useEffect, useRef, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setProgress(pct)
      raf.current = null
    }

    const onScroll = () => {
      if (raf.current == null) raf.current = requestAnimationFrame(calc)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    calc()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden>
      <div
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

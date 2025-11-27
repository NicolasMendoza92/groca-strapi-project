"use client"

import { useEffect, useRef } from "react"

const sections = [
  {
    title: "Nuestra Misión",
    content:
      "Somos guardianes del conocimiento ancestral y contemporáneo, dedicados a iluminar el camino de aquellos que buscan su verdad interior. Cada libro en nuestra colección ha sido cuidadosamente seleccionado para servir como guía en tu viaje espiritual.",
    image: "/spiritual-journey-light-path-mystical.jpg",
  },
  {
    title: "El Despertar Colectivo",
    content:
      "Creemos en el poder transformador de la sabiduría compartida. Nuestra comunidad está formada por buscadores de luz que entienden que el crecimiento personal es el primer paso hacia la evolución colectiva de la consciencia humana.",
    image: "/community-spiritual-gathering-cosmic-energy.jpg",
  },
  {
    title: "Energía y Transformación",
    content:
      "Los libros son más que papel y tinta; son portales energéticos que contienen vibraciones elevadas. Cada texto ha sido imbuido con la intención de elevar tu frecuencia y desbloquear tu potencial infinito.",
    image: "/energy-transformation-golden-light-spiritual.jpg",
  },
  {
    title: "Tu Viaje Comienza Aquí",
    content:
      "No es coincidencia que hayas llegado hasta aquí. El universo te ha guiado a este espacio sagrado porque estás listo para el siguiente nivel de tu evolución espiritual. Confía en tu intuición y deja que te guíe hacia el conocimiento que tu alma necesita.",
    image: "/spiritual-path-journey-cosmic-stars-mystical.jpg",
  },
]

export default function NosotrosPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((section) => {
      if (!section) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0")
              entry.target.classList.remove("opacity-0", "translate-y-12")
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(section)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light text-foreground md:text-6xl">Nosotros</h1>
          <p className="text-lg text-muted-foreground">Guardianes de la sabiduría ancestral</p>
        </div>

        <div className="space-y-24">
          {sections.map((section, index) => (
            <section
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
            >
              <div
                className={`flex flex-col gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      className="h-[400px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="font-serif text-3xl font-light text-foreground">{section.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

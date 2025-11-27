"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

const books = [
  {
    id: "1",
    title: "El Despertar Cósmico",
    excerpt: "Una guía para conectar con las energías universales y despertar tu consciencia superior.",
    year: "2023",
    author: "Luna Serena",
    image: "/mystical-cosmic-book-purple-gold-spiritual.jpg",
  },
  {
    id: "2",
    title: "Chakras en Equilibrio",
    excerpt: "Descubre cómo alinear tus centros energéticos para alcanzar la armonía total.",
    year: "2022",
    author: "Maestro Kai",
    image: "/chakra-energy-healing-mandala-spiritual.jpg",
  },
  {
    id: "3",
    title: "Cristales del Alma",
    excerpt: "El poder curativo de los cristales y cómo usarlos en tu práctica espiritual diaria.",
    year: "2023",
    author: "Amara Stone",
    image: "/healing-crystals-gems-spiritual-energy.jpg",
  },
  {
    id: "4",
    title: "Meditación Trascendental",
    excerpt: "Técnicas milenarias para alcanzar estados profundos de paz y conexión interior.",
    year: "2021",
    author: "Swami Ananda",
    image: "/meditation-lotus-zen-peaceful-spiritual.jpg",
  },
  {
    id: "5",
    title: "La Alquimia del Ser",
    excerpt: "Transforma tu realidad a través de la magia interior y la manifestación consciente.",
    year: "2024",
    author: "Elena Mística",
    image: "/alchemy-transformation-golden-spiritual-magic.jpg",
  },
]

export default function ManualPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const observers = sectionRefs.current.map((section, index) => {
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
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
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
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light text-foreground md:text-6xl">El Manual</h1>
          <p className="text-lg text-muted-foreground">Tu camino hacia la sabiduría ancestral</p>
        </div>

        <div className="space-y-24">
          {books.map((book, index) => (
            <section
              key={book.id}
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
                <div className="w-full md:w-2/5">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <div className="w-full md:w-3/5 space-y-4">
                  <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">{book.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {book.author} • {book.year}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">{book.excerpt}</p>
                  <Link href={`/manual/${book.id}`}>
                    <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

"use client"

import { STRAPI_BASE_URL } from "@/lib/strapi";
import { SobreMiData } from "@/types"
import { useEffect, useRef } from "react"


export default function SobreMiContent({ data }: { data: SobreMiData }) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const { title, description, sections } = data || {};

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

  if (!sections) return null;

  return (
    <div className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light text-foreground md:text-6xl">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
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
                  <div className="overflow-hidden rounded-lg ">
                    <img
                      src={section.image?.url ? `${STRAPI_BASE_URL}${section.image.url}` : "/placeholder.svg"}
                      alt={section.image?.alternativeText}
                      className="h-[400px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="font-serif text-3xl font-light text-foreground">{section.item}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

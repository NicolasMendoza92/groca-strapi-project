"use client";

import { getStrapiMedia } from "@/lib/strapi";
import { ImageContent, SobreMiData } from "@/types";
import { useEffect, useRef } from "react";

export default function SobreMiContent({ data }: { data: SobreMiData }) {
  console.log("SobreMiData:", data);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const { title,description, sections } = data || {};

  useEffect(() => {
    const observers = sectionRefs.current.map((section) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-12");
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl">
            {title}
          </h1>
          <div className="mx-auto h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* SECTIONS DINÁMICOS */}
        {sections?.map((section: ImageContent, index: number) => (
          <section
            key={section.id ?? index}
            ref={(el) => {
              sectionRefs.current[index + 1] = el;
            }}
            className="opacity-0 translate-y-12 transition-all duration-700 mb-20"
          >
            {/* Imagen */}
            {section.image && (
              <div className="mb-12 overflow-hidden rounded-lg">
                <img
                  src={getStrapiMedia(section.image?.url)}
                  alt={section.image?.alternativeText || "Imagen descriptiva"}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

            {/* Textos */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {section.paragraphs?.map((p) =>
                p?.content ? (
                  <p key={p.id ?? p.content.slice(0, 20)}>{p.content}</p>
                ) : null
              )}
            </div>
          </section>
        ))}
        <div className="text-center">
          <p className="italic text-foreground font-medium">
            {description}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { SobreMiData } from "@/types";
import { useEffect, useRef } from "react";

export default function SobreMiContent({ data }: { data: SobreMiData }) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const { title, description } = data || {};

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

  // if (!sections) return null;
  // const imageSrc = sections[0]?.image?.url;

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

        {/* Photo placeholder 1 */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img
            // src={imageSrc ? `${STRAPI_BASE_URL}${imageSrc}` : "/meditation-lotus-zen-peaceful-spiritual.jpg"}
            src={"/meditation-lotus-zen-peaceful-spiritual.jpg"}
            alt="Foto personal"
            className="h-auto w-full object-cover opacity-0 transition-opacity duration-700"
            style={{ animation: "fadeIn 1s ease-in forwards" }}
          />
        </div>

        {/* Long text area */}
        <div className="mb-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p
            className="opacity-0"
            style={{ animation: "fadeIn 1s ease-in 0.2s forwards" }}
          >
            {description}
          </p>
          <p
            className="opacity-0"
            style={{ animation: "fadeIn 1s ease-in 0.4s forwards" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p
            className="opacity-0"
            style={{ animation: "fadeIn 1s ease-in 0.6s forwards" }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Photo placeholder 2 */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img
            src="/spiritual-journey-light-path-mystical.jpg"
            alt="Foto de trabajo espiritual"
            className="h-auto w-full object-cover opacity-0 transition-opacity duration-700"
            style={{ animation: "fadeIn 1s ease-in 0.8s forwards" }}
          />
        </div>

        {/* More text space */}
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p
            className="opacity-0"
            style={{ animation: "fadeIn 1s ease-in 1s forwards" }}
          >
            [Continúa tu historia aquí. Este espacio está preparado para recibir
            tu narrativa personal.]
          </p>
          <p
            className="opacity-0"
            style={{ animation: "fadeIn 1s ease-in 1.2s forwards" }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
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

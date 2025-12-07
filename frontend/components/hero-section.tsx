"use client";
import { getStrapiMedia } from "@/lib/strapi";
import { HeroGroca, SymbolsCard } from "@/types";
import { useEffect, useState } from "react";

interface HeroGrocaSectionProps {
  hero_section: HeroGroca;
  symbols: SymbolsCard[];
}

export function HeroGrocaSection({
  hero_section,
  symbols,
}: HeroGrocaSectionProps) {
  console.log("HeroGrocaSection Props:", { hero_section, symbols });
  const [scrollY, setScrollY] = useState(0);
  const [showThreshold, setShowThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 400) {
        setShowThreshold(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {hero_section.image && (
        <div className="mb-20 overflow-hidden rounded-lg">
          <img
            src={getStrapiMedia(hero_section.image?.url)}
            alt="Foto del artista"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="mx-auto max-w-4xl">
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            showThreshold
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-8 font-serif text-4xl font-light tracking-wider text-foreground md:text-6xl">
            {hero_section.title}
          </h2>
          <p className="text-xl text-muted-foreground italic">
            {hero_section.subtitle}
          </p>
        </div>

        {/* Sacred Symbols */}
        <div className="grid gap-12 md:grid-cols-2">
          {symbols.map((symbol, index) => (
            <div
              key={symbol.id ?? index}
              className="flex flex-col items-center gap-6 transition-all duration-1000"
              style={{
                opacity: Math.min((scrollY - (400 + index * 200)) / 300, 1),
                transform: `translateY(${Math.max(
                  0,
                  50 - (scrollY - (400 + index * 200)) / 10
                )}px)`,
              }}
            >
              <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-primary/30 bg-linear-to-br from-primary/10 to-accent/10 p-8">
                {symbol.image && (
                  <img
                    src={getStrapiMedia(symbol.image.url)}
                    alt={symbol.image?.alternativeText}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <h3 className="font-serif text-2xl font-light">
                {symbol.title}
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {symbol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function GrocaPage() {
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
    <div>
      {/* Section A: Significado de GRoCa */}
      <section className="relative min-h-screen px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl">
              GRoCa
            </h1>
            <p className="mb-4 text-xl text-muted-foreground italic">
              El Viaje de la Roca a la Luz
            </p>
            <p className="mb-12 text-md text-muted-foreground italic">
              La Travesía Interior hacia tu Esencia
            </p>
          </div>

          <div className="mb-16 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              En el corazón de la existencia hay un viaje que todos, sin
              excepción, estamos destinados a emprender. Un viaje hacia nosotros
              mismos, hacia la verdad de lo que somos. No es un camino recto, ni
              fácil. Es un sendero de sombras y luz, de adversidades y
              revelaciones. Un sendero en el que nos encontramos con la parte
              más dura de nuestra esencia, pero también con la más preciosa.
            </p>
            <p>
              GRoCa es el símbolo de este viaje. No es solo una palabra, es una
              verdad profunda encapsulada en cinco letras. G representa la gemma
              (gema), la piedra preciosa que encierra la luz. RoCa, la roca, la
              dureza, el peso de lo que nos forja, las máscaras, las heridas, la
              oscuridad que hemos llevado por tanto tiempo. Son dos fuerzas
              opuestas, aparentemente irreconciliables, pero en su unión yace el
              mayor secreto: la integridad, la plenitud, la verdad esencial de
              cada ser humano.
            </p>
            <p>
              La roca es densa, áspera, impenetrable. Simboliza las pruebas, los
              miedos, las creencias limitantes, los muros internos que hemos
              construido para protegernos, pero que con el tiempo se han
              convertido en prisiones. Es la resistencia del ego, la dureza de
              la vida, las caídas, los desafíos que parecen inquebrantables.
            </p>
            <p>
              Pero dentro de la roca, en lo más profundo de su núcleo, descansa
              la gemma (gema). Y quien tiene el valor de atravesar la dureza, de
              romper las barreras de la mente y el alma, de enfrentarse con lo
              que duele, con lo que asusta, con lo que parece imposible de
              transformar… descubre la piedra preciosa.
            </p>
          </div>

          {/* Section B: Versión Musical */}
          <div className="mb-16 rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
              Versión Narrada Musical
            </h2>
            <p className="mb-6 text-muted-foreground">
              Experimenta el significado de GRoCa a través de una narrativa
              musical envolvente.
            </p>
            <Link href="/groca/musical">
              <Button size="lg" className="rounded-full">
                Escuchar Versión Musical
              </Button>
            </Link>
          </div>

          {/* Section C: Foto del cliente */}
          <div className="mb-20 overflow-hidden rounded-lg">
            <img
              src="/community-spiritual-gathering-cosmic-energy.jpg"
              alt="Foto del artista"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section D: Has cruzado el umbral - appears with fade on scroll */}
      <section className="relative min-h-screen px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div
            className={`mb-20 text-center transition-all duration-1000 ${
              showThreshold
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-8 font-serif text-4xl font-light tracking-wider text-foreground md:text-6xl">
              Has Cruzado el Umbral
            </h2>
            <p className="text-xl text-muted-foreground italic">
              El viaje hacia la consciencia ha comenzado
            </p>
          </div>

          {/* Sacred Symbols - reveal on scroll */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Cubo de Metatrón */}
            <div
              className="flex flex-col items-center gap-6 transition-all duration-1000"
              style={{
                opacity: Math.min((scrollY - 400) / 300, 1),
                transform: `translateY(${Math.max(
                  0,
                  50 - (scrollY - 400) / 10
                )}px)`,
              }}
            >
              <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-primary/30 bg-linear-to-br from-primary/10 to-accent/10 p-8">
                <img
                  src="/metatron.png"
                  alt="Cubo de Metatrón"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-light">
                Cubo de Metatrón
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                La geometría sagrada que conecta todas las dimensiones
              </p>
            </div>

            {/* Caduceo */}
            <div
              className="flex flex-col items-center gap-6 transition-all duration-1000"
              style={{
                opacity: Math.min((scrollY - 600) / 300, 1),
                transform: `translateY(${Math.max(
                  0,
                  50 - (scrollY - 600) / 10
                )}px)`,
              }}
            >
              <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-primary/30 bg-linear-to-br from-accent/10 to-primary/10 p-8">
                <img
                  src="/caduceo.png"
                  alt="Caduceo"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-light">Caduceo</h3>
              <p className="text-center text-sm text-muted-foreground">
                El símbolo ancestral de equilibrio y sanación
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

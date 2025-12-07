"use client"

import { ChevronRight } from "lucide-react"

const modulos = [
  {
    id: 1,
    nombre: "Módulo 1",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Módulo 2",
    disponible: false,
  },
  {
    id: 3,
    nombre: "Módulo 3",
    disponible: false,
  },
  {
    id: 4,
    nombre: "Módulo 4",
    disponible: false,
  },
  {
    id: 5,
    nombre: "Módulo 5",
    disponible: false,
  },
]

export default function FormacionPage() {
  return (
    <div className=" px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl">Formación</h1>
          <p className="text-xl text-muted-foreground">Tu camino de aprendizaje y transformación</p>
          <div className="mx-auto mt-6 h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Módulos List */}
        <div className="space-y-4">
          {modulos.map((modulo, index) => (
            <div
              key={modulo.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-light text-primary">
                    {modulo.id}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-foreground">{modulo.nombre}</h3>
                    {!modulo.disponible && <p className="text-sm text-muted-foreground">Próximamente</p>}
                  </div>
                </div>
                <ChevronRight
                  className={`h-6 w-6 transition-all duration-300 ${
                    modulo.disponible ? "text-primary group-hover:translate-x-1" : "text-muted-foreground/30"
                  }`}
                />
              </div>

              {/* Expandable content area - prepared for future expansion */}
              <div className="mt-4 h-0 overflow-hidden transition-all duration-300 group-hover:h-auto">
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    {modulo.disponible
                      ? "Haz clic para acceder al contenido del módulo"
                      : "Este módulo estará disponible próximamente"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-16 rounded-lg border border-border bg-linear-to-br from-primary/5 to-accent/5 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 font-serif text-2xl font-light text-foreground">Un Viaje de Despertar</h2>
          <p className="text-muted-foreground">
            Cada módulo es una puerta hacia una nueva comprensión. Avanza a tu propio ritmo en este camino de
            autodescubrimiento y transformación espiritual.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}


import { getHomePage } from "@/lib/strapi"
import { Link } from "lucide-react"
import { Button } from "./ui/button"

export default async function HomeContent() {
  const strapiData = await getHomePage()

  const { title = "GRoCa", description = "La Puerta Se Ha Abierto Para Ti" } = strapiData || {}

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/mystical-cosmic-energy-ethereal-purple-nebula-star.jpg" alt="Fondo místico" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl text-balance">
            {title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            {description}
          </p>
          <Link href="/manual">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg transition-all hover:scale-105">
              Explorar El Manual
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-light text-foreground md:text-4xl">
            Tu Portal al Conocimiento Sagrado
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada libro es una llave que abre puertas a nuevas dimensiones de entendimiento. Aquí encontrarás guías
            ancestrales y contemporáneas para transformar tu energía y conectar con tu esencia más profunda.
          </p>
        </div>
      </section>
    </main>
  )
}
import { HeroSection } from "@/components/hero-section"
import { getHomePage } from "@/lib/strapi"

export default async function HomeContent() {
  const strapiData = await getHomePage()

  const { title = "GRoCa", description = "La Puerta Se Ha Abierto Para Ti" } = strapiData || {}
  const [heroSection] = strapiData?.sections || []

  return (
    <main className="container mx-auto flex flex-col p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-zinc-600">{description}</p>
      <HeroSection data={heroSection} />
    </main>
  )
}
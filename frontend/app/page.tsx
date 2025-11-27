import { HeroSection } from "@/components/hero-section";
import { getHomePage } from "@/lib/strapi";

export async function generateMetadata(){
  const strapiData = await getHomePage()
    return {
      title: strapiData?.title || "GRoCa",
      description: strapiData?.description || "La Puerta Se Ha Abierto Para Ti",
    }
  }

export default async function Home() {
  const strapiData = await getHomePage();

  const {title, description} = strapiData
  const [heroSection] = strapiData?.sections || []

  return (
    <main className="container mx-auto flex flex-col p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className=" text-zinc-600">{description}</p>
      <HeroSection data={heroSection} />
    </main>
  );
}

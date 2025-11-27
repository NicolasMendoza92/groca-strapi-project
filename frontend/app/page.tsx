import { Suspense } from "react"
import { getHomePage } from "@/lib/strapi";
import HomeContent from "@/components/home-content";

export async function generateMetadata(){
  const strapiData = await getHomePage()
    return {
      title: strapiData?.title || "GRoCa",
      description: strapiData?.description || "La Puerta Se Ha Abierto Para Ti",
    }
  }

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando página...</div>}>
      <HomeContent />
    </Suspense>
  )
}

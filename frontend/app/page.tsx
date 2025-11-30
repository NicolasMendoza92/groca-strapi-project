import { Suspense } from "react"
import { getHomePage } from "@/lib/strapi";
import HomeContent from "@/components/home-content";
import Loader from "@/components/loader";

export async function generateMetadata(){
  const strapiData = await getHomePage()
    return {
      title: strapiData?.title || "GRoCa",
      description: strapiData?.description || "La Puerta Se Ha Abierto Para Ti",
    }
  }

export default function Home() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <HomeContent />
    </Suspense>
  )
}

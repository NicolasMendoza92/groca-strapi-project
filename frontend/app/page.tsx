import { Suspense } from "react"
import { getHomePage } from "@/lib/strapi";
import Loader from "@/components/loader";
import { HeroSection } from "@/components/hero-section";

// export async function generateMetadata(){
//   const strapiData = await getHomePage()
//     return {
//       title: strapiData?.title || "GRoCa",
//       description: strapiData?.description || "La Puerta Se Ha Abierto Para Ti",
//     }
// }

export async function HomeContentPage() {
  const nosotrosData = await getHomePage()
  return (
       <HeroSection data={nosotrosData} />
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <HomeContentPage />
    </Suspense>
  )
}

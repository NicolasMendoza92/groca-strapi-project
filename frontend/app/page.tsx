import { Suspense } from "react"
import { getHomePage } from "@/lib/strapi";
import Loader from "@/components/loader";
import HomeGrocaPage from "@/components/home-page";


export async function HomeContentPage() {
  const homeData = await getHomePage()
  return (
       <HomeGrocaPage data={homeData} />
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <HomeContentPage />
    </Suspense>
  )
}

import { Suspense } from "react"
import { getHomePage } from "@/lib/strapi";
import Loader from "@/components/loader";
import GrocaIconHome from "@/components/groca-home";


export async function HomeContentPage() {
  const homeData = await getHomePage()
  return (
       <GrocaIconHome data={homeData} />
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <HomeContentPage />
    </Suspense>
  )
}

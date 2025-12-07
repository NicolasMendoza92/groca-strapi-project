import { Suspense } from "react"
import Loader from "@/components/loader";
import SobreMiContent from "@/components/sobremi-content";
import { getSobreMiPage } from "@/lib/strapi";

export async function SobreMiContentPage() {
  const sobreMiData = await getSobreMiPage()
  return (
       <SobreMiContent data={sobreMiData} />
  )
}

export default function SobreMiPage() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <SobreMiContentPage />
    </Suspense>
  )
}
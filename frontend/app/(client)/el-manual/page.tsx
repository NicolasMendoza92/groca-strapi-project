'use cache'
import Loader from '@/components/loader'
import ManualContent from '@/components/manual-content'
import { getManualPage } from '@/lib/strapi'
import { Suspense } from 'react'

export async function ManualContentPage() {
  const manualData = await getManualPage()
  return <ManualContent data={manualData} />
}

export default async function ManualPage() {  
  return (
    <Suspense fallback={<Loader />}>
      <ManualContentPage />
    </Suspense>
  )
}
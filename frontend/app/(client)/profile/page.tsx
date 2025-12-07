
import Loader from '@/components/loader'
import LogoutButton from '@/components/logout-button'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export async function ProfileContent() {
  const cookieStore = await cookies()
  const jwt = cookieStore.get('jwt')?.value ?? null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Perfil</h1>
      { <LogoutButton isLogged={!!jwt} />}
    </div>
  )
}

export default function ProfileRoute() {
  return (
    <Suspense fallback={<div><Loader/></div>}>
      <ProfileContent />
    </Suspense>
  )
}
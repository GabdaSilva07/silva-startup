import { cn } from '@/lib/utils'
import { Secular_One } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className={cn('bg-slate-600 ')}>Hero</section>
      <section className={cn('bg-red-700')}>Products</section>
    </main>
  )
}

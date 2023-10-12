import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <section className={cn('bg-slate-600')}>Hero</section>
      <section className={cn('bg-black')}>Products</section>
      <section className={cn('bg-red-600')}>Features</section>
      <section className={cn('bg-muted')}>Testimonials</section>
    </main>
  )
}

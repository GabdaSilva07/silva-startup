
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main>
      <section className={cn('bg-slate-600 ')}>Hero</section>
      <section className={cn('bg-red-700')}>Products</section>
      <section className={cn('bg-blue-700')}>About</section>
    </main>
  )
}

import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <main className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </main>
    </CartProvider>
  )
}

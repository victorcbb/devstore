import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="http://github.com/victorcbb.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Imagem do usuário"
          />
        </Link>
      </div>
    </header>
  )
}

import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')

  const produtcs = await response.json()

  return produtcs
}

export default async function Home() {
  const [hightlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[714px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${hightlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src={hightlightedProduct.image}
          width={860}
          height={860}
          quality={100}
          alt="Moletom"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 bg-black/60 p-1 p pl-5 border-zinc-500">
          <span className="text-sm truncate">{hightlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {hightlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
          >
            <Image
              src={product.image}
              width={860}
              height={860}
              quality={100}
              alt="Moletom"
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 bg-black/60 p-1 p pl-5 border-zinc-500">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

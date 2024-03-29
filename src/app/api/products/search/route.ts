import { z } from 'zod'
import data from '../data.json'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const product = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(product)
}

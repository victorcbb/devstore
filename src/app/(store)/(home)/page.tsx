import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[714px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          width={860}
          height={860}
          quality={100}
          alt="Moletom"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 bg-black/60 p-1 p pl-5 border-zinc-500">
          <span className="text-sm truncate">Moletom Never Stop Learn</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src="/moletom-java.png"
          width={860}
          height={860}
          quality={100}
          alt="Moletom"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 bg-black/60 p-1 p pl-5 border-zinc-500">
          <span className="text-sm truncate">Moletom Never Stop Learn</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          width={860}
          height={860}
          quality={100}
          alt="Moletom"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 bg-black/60 p-1 p pl-5 border-zinc-500">
          <span className="text-sm truncate">Moletom Never Stop Learn</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"
import type { Burger } from "@/lib/burgers"
import { RatingStars } from "@/components/rating-stars"

export function BurgerCard({ burger }: { burger: Burger }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={burger.image || "/placeholder.svg"}
          alt={burger.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <RatingStars rating={burger.rating} />
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            aria-label={liked ? `Remove ${burger.name} from favorites` : `Add ${burger.name} to favorites`}
            aria-pressed={liked}
            className="text-gray-400 transition-colors hover:text-[#e01a1a]"
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-[#e01a1a] text-[#e01a1a]" : ""}`} />
          </button>
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900">{burger.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{burger.description}</p>

        <button
          type="button"
          className="mt-4 rounded-md bg-[#5a2415] px-4 py-2 text-sm font-bold text-[#f5a623] transition-colors hover:bg-[#4a1d11]"
        >
          ৳{burger.price.toFixed(2)}
        </button>
      </div>
    </article>
  )
}

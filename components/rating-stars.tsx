import { Star, StarHalf } from "lucide-react"

export function RatingStars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const position = i + 1
    if (rating >= position) return "full" as const
    if (rating >= position - 0.5) return "half" as const
    return "empty" as const
  })

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((type, i) => {
        if (type === "full") {
          return <Star key={i} className="h-4 w-4 fill-[#f5a623] text-[#f5a623]" />
        }
        if (type === "half") {
          return (
            <span key={i} className="relative inline-flex h-4 w-4">
              <Star className="absolute h-4 w-4 text-[#f5a623]" />
              <StarHalf className="absolute h-4 w-4 fill-[#f5a623] text-[#f5a623]" />
            </span>
          )
        }
        return <Star key={i} className="h-4 w-4 text-[#f5a623]" />
      })}
    </div>
  )
}

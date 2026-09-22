import { SiteHeader } from "@/components/site-header"
import { BurgerCard } from "@/components/burger-card"
import { burgers } from "@/lib/burgers"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader cartCount={2} />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-[#e01a1a] md:text-5xl">
            Our Crazy Burgers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500">
            Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and
            irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty,
            we&apos;ve got a burger that will blow your mind!
          </p>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {burgers.map((burger) => (
            <BurgerCard key={burger.id} burger={burger} />
          ))}
        </section>
      </main>
    </div>
  )
}

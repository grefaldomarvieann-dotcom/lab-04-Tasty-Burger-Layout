import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const navLinks = ["About", "Our Menu", "Shop", "Contact"]

export function SiteHeader({ cartCount = 2 }: { cartCount?: number }) {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center" aria-label="Tasty Burger home">
          <Image
            src="/tasty-burger-logo.png"
            alt="Tasty Burger logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain"
          />
          <span className="ml-1 font-extrabold leading-none tracking-tight">
            <span className="block text-lg text-gray-900">TASTY</span>
            <span className="block text-lg text-[#d94b1f]">BURGER</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-bold uppercase tracking-wide text-gray-800 transition-colors hover:text-[#e01a1a]"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="relative text-gray-800 transition-colors hover:text-[#e01a1a]"
            aria-label={`Cart with ${cartCount} items`}
          >
            <ShoppingBag className="h-6 w-6" strokeWidth={1.75} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#e01a1a] text-[11px] font-bold text-white">
              {cartCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}

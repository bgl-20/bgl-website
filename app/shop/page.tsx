import Image from "next/image"
import { ArrowRight, ExternalLink, ShoppingBag, Instagram } from "lucide-react"

const products = [
  {
    name: "BGL Heavy Hoodie",
    price: 60,
    url: "https://backyardgolf.online/products/backyard-golf-heavy-hoodie",
    description: "Built for cold mornings on the course. Premium heavyweight fleece with BGL branding.",
    badge: "Bestseller",
  },
  {
    name: "Magnetic BGL Towel",
    price: 25,
    url: "https://backyardgolf.online/products/magnetic-bgl-towel",
    description: "Magnetic clip keeps your towel where it belongs. Soft, absorbent, and always game-ready.",
    badge: null,
  },
  {
    name: "Cotton Candy Polo",
    price: 40,
    url: "https://backyardgolf.online/products/bgl-cotton-candy-polo",
    description: "Moisture-wicking performance polo in a colorway that stands out on any fairway.",
    badge: "New",
  },
  {
    name: "BGL Marshmallow Hoodie",
    price: 65,
    url: "https://backyardgolf.online/products/the-bgl-classic-hoodie",
    description: "The classic BGL hoodie. Soft, structured, and made to wear from tee time to the turn.",
    badge: null,
  },
  {
    name: "Waterproof Golf Pullover",
    price: 50,
    url: "https://backyardgolf.online/products/waterproof-golf-pullover",
    description: "Wind and rain resistant shell — because tee times don't cancel for weather.",
    badge: null,
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8f7f4" }}>
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b"
        style={{ backgroundColor: "#2c3e6b", borderColor: "#1e2d50" }}
      >
        <a href="https://backyardgolf.io" className="relative w-[160px] h-[48px]">
          <Image
            src="/white_cursive_cropped_transparent.png"
            alt="Backyard Golf"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        <div className="flex items-center gap-6 text-sm font-semibold tracking-widest">
          <a
            href="https://league.backyardgolf.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            LOG IN
          </a>
          <a
            href="https://shop.backyardgolf.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all hover:opacity-90"
            style={{ backgroundColor: "#cc2936", color: "#fff" }}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            FULL STORE
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2c3e6b 0%, #1a2647 60%, #0f1929 100%)",
        }}
      >
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
          }}
        />

        <div className="relative container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "#cc2936", color: "#fff" }}
            >
              <span>BGL PRO SHOP</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6"
              style={{ color: "#fff" }}
            >
              GEAR UP.
              <br />
              <span style={{ color: "#cc2936" }}>PLAY BETTER.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Official Backyard Golf League apparel and accessories. Designed for the course. Built to last the season.
            </p>

            <a
              href="https://shop.backyardgolf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm tracking-widest transition-opacity hover:opacity-80"
              style={{ color: "#cc2936" }}
            >
              VISIT FULL STORE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Logo mark */}
          <div className="flex-shrink-0 relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] opacity-20">
            <Image
              src="/backyard-golf-logo.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Divider bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "#cc2936" }} />

      {/* Product Grid */}
      <section className="container mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-xs font-bold tracking-widest mb-2"
              style={{ color: "#cc2936" }}
            >
              CURRENT COLLECTION
            </p>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: "#2c3e6b" }}
            >
              PRO SHOP
            </h2>
          </div>
          <a
            href="https://backyardgolf.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider transition-opacity hover:opacity-70"
            style={{ color: "#2c3e6b" }}
          >
            VIEW ALL
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.url}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "#fff",
                borderColor: "#e5e2dc",
                boxShadow: "0 1px 4px rgba(44,62,107,0.08)",
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className="absolute top-4 left-4 z-10 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: product.badge === "New" ? "#cc2936" : "#2c3e6b",
                    color: "#fff",
                  }}
                >
                  {product.badge}
                </div>
              )}

              {/* Image placeholder with BGL branding */}
              <div
                className="relative w-full aspect-square flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #edf0f7 0%, #dce2ef 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-6xl font-black opacity-10 tracking-tighter select-none"
                    style={{ color: "#2c3e6b" }}
                  >
                    BGL
                  </div>
                </div>

                {/* View on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(44,62,107,0.85)" }}
                >
                  <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest">
                    <ExternalLink className="w-4 h-4" />
                    SHOP NOW
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="font-bold text-base leading-snug tracking-tight"
                    style={{ color: "#2c3e6b" }}
                  >
                    {product.name}
                  </h3>
                  <span
                    className="font-black text-lg flex-shrink-0"
                    style={{ color: "#cc2936" }}
                  >
                    ${product.price}
                  </span>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "#6b7280" }}>
                  {product.description}
                </p>

                <div
                  className="mt-1 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold tracking-widest transition-colors duration-200 group-hover:opacity-90"
                  style={{ backgroundColor: "#2c3e6b", color: "#fff" }}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  BUY NOW
                </div>
              </div>
            </a>
          ))}

          {/* CTA card */}
          <a
            href="https://backyardgolf.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: "#2c3e6b", minHeight: "320px" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
              style={{ backgroundColor: "#2c3e6b" }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <p className="font-black text-base tracking-tight mb-1" style={{ color: "#2c3e6b" }}>
              See the Full Collection
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              More styles available at the official BGL store.
            </p>
          </a>
        </div>
      </section>

      {/* Banner strip */}
      <section
        className="py-14 px-6 md:px-10 text-center"
        style={{ backgroundColor: "#2c3e6b" }}
      >
        <p
          className="text-xs font-bold tracking-widest mb-3"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          OFFICIAL LEAGUE GEAR
        </p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
          Represent the League.
        </h2>
        <p className="text-sm md:text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
          Every purchase supports the Backyard Golf League. Wear it on the course. Wear it everywhere.
        </p>
        <a
          href="https://backyardgolf.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest transition-all hover:opacity-90"
          style={{ backgroundColor: "#cc2936", color: "#fff" }}
        >
          SHOP ALL PRODUCTS
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6 md:px-10 border-t"
        style={{ backgroundColor: "#0f1929", borderColor: "#1e2d50" }}
      >
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="https://backyardgolf.io" className="relative w-[140px] h-[44px]">
            <Image
              src="/white_cursive_cropped_transparent.png"
              alt="Backyard Golf"
              fill
              className="object-contain object-left"
            />
          </a>

          <div className="flex items-center gap-8 text-xs font-semibold tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
            <a
              href="https://backyardgolf.io"
              className="hover:text-white transition-colors"
            >
              HOME
            </a>
            <a
              href="https://backyardgolf.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              STORE
            </a>
            <a
              href="https://league.backyardgolf.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LOG IN
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mt-6 pt-6 border-t" style={{ borderColor: "#1e2d50" }}>
          <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} Backyard Golf League. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

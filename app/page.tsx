// app/page.tsx
// ──────────────────────────────────────────────────────────
// Route: backyardgolf.io (homepage)
// Purpose: Main landing page for Backyard Golf League
// Sections: Hero → Mass Golf banner → Discovery → How It Works → Clubhouse → Footer
// ──────────────────────────────────────────────────────────

import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, User, ShoppingBag, Trophy, Users, Calendar, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image src="/golf-course-green.jpg" alt="Golf course background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-8 z-10">
          <div className="relative w-[180px] h-[54px] md:w-[300px] md:h-[90px]">
            <Image
              src="/backyard-golf-logo.png"
              alt="Backyard Golf"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="flex gap-3 md:gap-8 text-sm font-medium">
            <a
              href="https://shop.backyardgolf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-text/80 hover:text-hero-text transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 md:w-4 md:h-4" />
              <span className="hidden md:inline">BGL PRO SHOP</span>
            </a>
            <a
              href="/get"
              className="text-hero-text/80 hover:text-hero-text transition-colors flex items-center gap-2"
            >
              <User className="w-5 h-5 md:w-4 md:h-4" />
              <span className="hidden md:inline">BGL CLUBHOUSE</span>
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-8 flex flex-col items-center text-center mt-32 mb-16 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-hero-text leading-none tracking-tighter mb-12">
            A BETTER WAY TO PLAY.
          </h1>
          <p className="text-base md:text-lg text-hero-text-secondary max-w-2xl mb-8 leading-relaxed">
            The Backyard Golf League is a season-long, Ryder Cup-style team golf league played on top public courses. 
            Built for competition and camaraderie. Teams of friends or free agents welcome.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf7FLTdokdTABESeWEOGw2yARevQTGuDvXKdQzxl6qQC0Bsqw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-hover font-medium rounded-full px-8 gap-2"
            >
              JOIN THE BACKYARD GOLF LEAGUE
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Mass Golf Partnership Banner */}
      <section className="bg-white py-4 md:py-6">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="relative w-[120px] h-[40px]">
            <Image
              src="/mass-golf-logo.png"
              alt="Mass Golf Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Official Partner of Mass Golf
          </p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="bg-gradient-to-b from-dark-section-bg-from to-dark-section-bg-to text-dark-section-text py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 pb-10 border-b border-dark-section-border/60 leading-tight">
            GOLF, THE WAY IT WAS INTENDED
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content - Once Backyard Golf launches Corp and Adventures, this will become a 3 column section for each product*/}
            <div className="space-y-10 max-w-lg">
              <p className="text-sm md:text-base leading-relaxed text-dark-section-text-muted">
                You should not need a private membership to play competitive golf. Backyard Golf runs season-long, Ryder
                Cup–style leagues on top public courses. You get structure, competition, and community. Without the
                price tag or politics.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf7FLTdokdTABESeWEOGw2yARevQTGuDvXKdQzxl6qQC0Bsqw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-dark-section-text text-dark-section-text hover:bg-dark-section-text hover:text-primary font-medium rounded-full px-8 gap-2"
                >
                  APPLY TO JOIN
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Placeholder for additional content */}
            <div className="md:col-span-1">{/* Additional content can be added here */}</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-how-it-works-bg text-light-section-text py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16 pb-8 border-b border-light-section-border">
            HOW IT WORKS
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="text-6xl font-black text-accent-red mb-2">01</div>
              <div className="space-y-3 flex flex-col flex-1">
                <h3 className="text-2xl font-bold">Join the League</h3>
                <p className="text-sm leading-relaxed text-light-section-text-secondary flex-1">
                  Join with friends or sign up as a free agent. We handle pairings, scheduling, and format.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="text-6xl font-black text-accent-red mb-2">02</div>
              <div className="space-y-3 flex flex-col flex-1">
                <h3 className="text-2xl font-bold">Play for Points</h3>
                <p className="text-sm leading-relaxed text-light-section-text-secondary flex-1">
                  Play Ryder Cup-style matches. Every match earns points toward the standings.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="text-6xl font-black text-accent-red mb-2">03</div>
              <div className="space-y-3 flex flex-col flex-1">
                <h3 className="text-2xl font-bold">Claim the Cup</h3>
                <p className="text-sm leading-relaxed text-light-section-text-secondary flex-1">
                  Compete in 4 Ryder Cup rounds and earn points for your team. Skins keep every round competitive until
                  the final putt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BGL Clubhouse Section */}
      <section className="bg-gradient-to-b from-dark-section-bg-from to-dark-section-bg-to text-dark-section-text py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16 pb-8 border-b border-dark-section-border/60 leading-tight">
            YOUR SEASON. ONE PLACE.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-10 max-w-lg">
              <p className="text-base md:text-lg leading-relaxed text-dark-section-text/80">
                Follow your season in real time. Standings update after every match. Tee times and matchups drop before every round. Profiles track every win, loss, and team result.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-red/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-accent-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug">Live Standings</p>
                    <p className="text-xs text-dark-section-text/50 mt-1 leading-relaxed">
                      Every match moves the table.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-red/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug">Player Profiles</p>
                    <p className="text-xs text-dark-section-text/50 mt-1 leading-relaxed">
                      Profiles, match history, team results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-red/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-accent-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug">Matchups & Tee Times</p>
                    <p className="text-xs text-dark-section-text/50 mt-1 leading-relaxed">
                      Know who you're playing, and when.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-red/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-accent-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug">Rounds & Courses</p>
                    <p className="text-xs text-dark-section-text/50 mt-1 leading-relaxed">
                      Dates, formats, and course details.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/get"
                className="inline-flex items-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 font-medium rounded-full px-8 py-3 text-sm transition-all hover:scale-[1.02]"
              >
                GO TO THE BGL CLUBHOUSE
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div
                  className="relative w-[280px] md:w-[300px] rounded-[40px] border-[6px] border-white/15 bg-black/40 shadow-2xl shadow-black/30 overflow-hidden"
                  style={{ aspectRatio: "9 / 19.5" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-10" />

                  <Image
                    src="/clubhouse-screenshot.png"
                    alt="BGL Clubhouse — live standings, matchups, and player profiles"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="absolute -inset-8 bg-accent-red/10 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-dark-section-bg-from to-dark-section-bg-to text-dark-section-text/70 py-12">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="relative w-[120px] h-[40px]">
            <Image
              src="/white_cursive_cropped_transparent.png"
              alt="Backyard Golf"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium">
              <a
                href="https://shop.backyardgolf.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dark-section-text transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                BGL PRO SHOP
              </a>
              <a
                href="https://clubhouse.backyardgolf.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dark-section-text transition-colors flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                BGL CLUBHOUSE
              </a>
            </nav>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dark-section-text transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

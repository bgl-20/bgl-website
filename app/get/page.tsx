// app/get/page.tsx
// ──────────────────────────────────────────────────────────
// Route: backyardgolf.io/get
// Purpose: Smart landing page for the BGL Clubhouse app
// Mobile → install-as-PWA instructions + link to open
// Desktop → "Built for your phone" + QR code + instructions
// ──────────────────────────────────────────────────────────

"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Share, Plus, Smartphone, MoreVertical } from "lucide-react"
import Image from "next/image"

const CLUBHOUSE_URL = "https://clubhouse.backyardgolf.io"

type Platform = "ios" | "android" | "desktop"

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "desktop"
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) return "ios"
  if (/android/.test(ua)) return "android"
  return "desktop"
}

// ── QR Code (inline SVG via a simple API — no dependency) ──
// Uses a public QR API. Replace with a static SVG if you want zero external calls.
function QRCode({ url, size = 200 }: { url: string; size?: number }) {
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&bgcolor=1a2540&color=ffffff&margin=16`}
      alt="Scan to open BGL Clubhouse"
      width={size}
      height={size}
      style={{ borderRadius: 12 }}
    />
  )
}

// ── iOS Install Steps ──
function IOSSteps() {
  return (
    <div className="space-y-6">
      <Step
        number={1}
        title="Open in Safari"
        description="Tap the link above to copy it, then open Safari and paste it in the address bar. The Clubhouse must be opened in Safari to install."
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" />
            <path d="M14.5 9.5l-5 5M9.5 9.5l5 5" strokeLinecap="round" />
          </svg>
        }
      />
      <Step
        number={2}
        title='Tap the Share button'
        description="At the bottom of Safari, tap the Share icon — the square with an upward arrow."
        icon={<Share className="w-5 h-5" />}
      />
      <Step
        number={3}
        title='"Add to Home Screen"'
        description='Scroll down in the share menu and tap "Add to Home Screen."'
        icon={<Plus className="w-5 h-5" />}
      />
      <Step
        number={4}
        title='Tap "Add"'
        description="The Clubhouse will appear on your home screen like a native app. Open it from there for the best experience."
        icon={<Smartphone className="w-5 h-5" />}
      />
    </div>
  )
}

// ── Android Install Steps ──
function AndroidSteps() {
  return (
    <div className="space-y-6">
      <Step
        number={1}
        title="Open in Chrome"
        description="Open the Clubhouse link in Chrome for the best install experience."
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      />
      <Step
        number={2}
        title="Tap the menu (⋮)"
        description="Tap the three-dot menu in the top-right corner of Chrome."
        icon={<MoreVertical className="w-5 h-5" />}
      />
      <Step
        number={3}
        title='"Add to Home screen"'
        description='Tap "Add to Home screen" or "Install app" — Chrome may show either option.'
        icon={<Plus className="w-5 h-5" />}
      />
      <Step
        number={4}
        title='Tap "Add"'
        description="The Clubhouse will install to your home screen. Open it from there — it runs like a native app."
        icon={<Smartphone className="w-5 h-5" />}
      />
    </div>
  )
}

// ── Step Component ──
function Step({
  number,
  title,
  description,
  icon,
}: {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#cc2936]/20 flex items-center justify-center text-[#cc2936]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-white leading-snug">
          <span className="text-[#cc2936] mr-1.5">{number}.</span>
          {title}
        </p>
        <p className="text-xs text-white/50 mt-1 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  )
}

// ── Copy Link Button (mobile) ──
function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input")
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-3 w-full max-w-sm rounded-xl px-4 py-3.5 text-left transition-all mb-10 ${
        copied
          ? "bg-green-500/15 border border-green-500/30"
          : "bg-white/5 border border-white/10 active:bg-white/10"
      }`}
    >
      <code className={`text-sm flex-1 truncate ${copied ? "text-green-400" : "text-white/70"}`}>
        {copied ? "Copied!" : "clubhouse.backyardgolf.io"}
      </code>
      <span className={`text-xs font-bold flex-shrink-0 ${copied ? "text-green-400" : "text-[#cc2936]"}`}>
        {copied ? "✓" : "COPY"}
      </span>
    </button>
  )
}

// ── Main Page ──
export default function GetClubhousePage() {
  const [platform, setPlatform] = useState<Platform>("desktop")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
    setMounted(true)
  }, [])

  // Don't render until we know the platform (avoids hydration mismatch)
  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1a2540] to-[#141c30]" />
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2540] to-[#141c30] text-white">
      {/* Nav — minimal, just logo + back to site */}
      <nav className="flex items-center justify-between p-6 md:p-8 max-w-5xl mx-auto">
        <div className="relative w-[180px] h-[54px] md:w-[240px] md:h-[72px]">
          <Image
            src="/backyard-golf-logo.png"
            alt="Backyard Golf"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <a
          href="/"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          ← Back to site
        </a>
      </nav>

      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
        {/* ════════════════════════════════════════════
            MOBILE VIEW — Install instructions + open link
        ════════════════════════════════════════════ */}
        {platform !== "desktop" && (
          <div className="pt-4 pb-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-4">
                GET THE CLUBHOUSE
              </h1>
              <p className="text-base text-white/60 leading-relaxed max-w-md">
                Add the BGL Clubhouse to your home screen for instant access to standings, matchups, and your season — no app store needed.
              </p>
            </div>

            {/* Open button — takes them to the app */}
            <a
              href={CLUBHOUSE_URL}
              className="inline-flex items-center gap-2 bg-[#cc2936] text-white hover:bg-[#cc2936]/90 font-medium rounded-full px-8 py-3.5 text-sm transition-all mb-4"
            >
              OPEN CLUBHOUSE
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Copy link — for iOS users who need to paste into Safari */}
            <CopyLinkButton url={CLUBHOUSE_URL} />

            {/* Divider */}
            <div className="border-t border-white/10 pt-10 mb-2">
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-8">
                Install to home screen
              </p>
            </div>

            {/* Platform-specific instructions */}
            {platform === "ios" ? <IOSSteps /> : <AndroidSteps />}

            {/* Platform toggle for people on the wrong tab */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs text-white/30">
                {platform === "ios"
                  ? "On Android? Use Chrome → Menu → \"Add to Home screen.\""
                  : "On iPhone? Use Safari → Share → \"Add to Home Screen.\""}
              </p>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════
            DESKTOP VIEW — QR code + instructions
        ════════════════════════════════════════════ */}
        {platform === "desktop" && (
          <div className="pt-8 pb-12">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
                BUILT FOR YOUR PHONE.
              </h1>
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                The BGL Clubhouse is a mobile-first app — scan the QR code to open it on your phone, then add it to your home screen for instant access all season.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left — QR code + link */}
              <div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 inline-block mb-6">
                  <QRCode url={CLUBHOUSE_URL} size={220} />
                </div>
                <p className="text-xs text-white/40 mb-6">
                  Scan with your phone camera to open the Clubhouse
                </p>

                {/* Direct link fallback */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4 max-w-md">
                  <code className="text-sm text-white/70 truncate">
                    clubhouse.backyardgolf.io
                  </code>
                  <button
                    onClick={() => navigator.clipboard?.writeText(CLUBHOUSE_URL)}
                    className="text-xs text-[#cc2936] font-bold hover:text-[#cc2936]/80 transition-colors flex-shrink-0"
                  >
                    COPY LINK
                  </button>
                </div>
              </div>

              {/* Right — Install instructions for both platforms */}
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-8">
                  How to install
                </p>

                {/* iOS */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/70">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-sm font-bold text-white/70">iPhone / iPad</span>
                  </div>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">1.</span> Open the link in <span className="text-white font-semibold">Safari</span>
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">2.</span> Tap the <span className="text-white font-semibold">Share</span> button (square with arrow)
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">3.</span> Tap <span className="text-white font-semibold">"Add to Home Screen"</span>
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">4.</span> Tap <span className="text-white font-semibold">"Add"</span> — done
                    </p>
                  </div>
                </div>

                {/* Android */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/70">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 002 18h20a10.78 10.78 0 00-4.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                    </svg>
                    <span className="text-sm font-bold text-white/70">Android</span>
                  </div>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">1.</span> Open the link in <span className="text-white font-semibold">Chrome</span>
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">2.</span> Tap the <span className="text-white font-semibold">⋮ menu</span> (top right)
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">3.</span> Tap <span className="text-white font-semibold">"Add to Home screen"</span>
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      <span className="text-white font-semibold">4.</span> Tap <span className="text-white font-semibold">"Add"</span> — done
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop preview fallback — let them browse if they want */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-white/40">
                  Want to browse on desktop anyway? It's optimized for mobile, but you can still look around.
                </p>
                <a
                  href={CLUBHOUSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-6 py-2 transition-all flex-shrink-0"
                >
                  Open in browser →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <span className="text-xs text-white/20 tracking-wide">
            BACKYARD GOLF LEAGUE · 2026
          </span>
          <a
            href="/"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            backyardgolf.io
          </a>
        </div>
      </footer>
    </main>
  )
}
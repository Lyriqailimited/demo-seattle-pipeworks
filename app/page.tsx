import VoiceWidget from "@/components/VoiceWidget";

const SERVICES = [
  {
    title: "Sewer Line Repair",
    description:
      "Full excavation and trenchless options for collapsed, cracked, or root-damaged sewer lines.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 36h36M10 36v-8c0-2 1-4 4-4h20c3 0 4 2 4 4v8" />
        <path d="M18 24v-6c0-1.5 1-3 3-3h6c2 0 3 1.5 3 3v6" />
        <circle cx="24" cy="30" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Trenchless Replacement",
    description:
      "Pipe bursting and CIPP lining — replace your sewer without tearing up your yard or driveway.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 24h40" />
        <path d="M8 20h32v8H8z" strokeDasharray="4 2" />
        <path d="M20 20v-8l8 4v4" />
        <circle cx="14" cy="24" r="2" fill="currentColor" />
        <circle cx="34" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Drain Cleaning",
    description:
      "Hydro-jetting and mechanical clearing for stubborn clogs, grease buildup, and root intrusion.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="24" cy="24" r="14" />
        <path d="M24 10v6M24 32v6M10 24h6M32 24h6" />
        <path d="M24 20v8" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Video Pipe Inspection",
    description:
      "Pinpoint the exact problem with HD camera inspections before we dig a single inch.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="8" y="14" width="24" height="18" rx="3" />
        <path d="M32 20l10-4v16l-10-4" />
        <circle cx="20" cy="23" r="4" />
      </svg>
    ),
  },
  {
    title: "Water Line Repair",
    description:
      "Stop low pressure and leaks at the source — full water service line repair and replacement.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M24 6c-6 8-12 14-12 22a12 12 0 0 0 24 0c0-8-6-14-12-22z" />
        <path d="M18 30c0-4 3-8 6-12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pipe Location",
    description:
      "Electronic line locating pinpoints buried pipes and utilities before any work begins.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M16 16l-4-4M32 16l4-4M16 32l-4 4M32 32l4 4" />
      </svg>
    ),
  },
];

const TRUST_STATS = [
  { value: "45+", label: "Years in Business", sublabel: "Since 1979" },
  { value: "5.0", label: "Star Rating", sublabel: "Yelp Reviews" },
  { value: "A+", label: "BBB Rating", sublabel: "Accredited" },
  { value: "25+", label: "Reviews", sublabel: "All 5 Stars" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════ NAV ═══════════════════════ */}
      <nav className="fixed top-0 z-40 w-full border-b border-white/5 bg-navy-900/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 20V8l6-4 6 4v12" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </div>
            <div>
              <span className="font-display text-lg text-white tracking-wide">
                Seattle Pipeworks
              </span>
            </div>
          </div>
          <a
            href="tel:2063836820"
            className="hidden items-center gap-2 rounded-full bg-copper-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-copper-600 sm:flex"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (206) 383-6820
          </a>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="hero-topo relative flex min-h-screen items-center pt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper-500/30 bg-copper-500/10 px-4 py-1.5 text-sm text-copper-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper-400" />
              Owner-Operated by Tim Walsh
            </div>

            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              45 Years Beneath{" "}
              <span className="text-copper-gradient">
                Seattle&rsquo;s Streets
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 sm:text-xl">
              When the ground under your home fails, you call the one company
              that&rsquo;s been fixing it since 1979. Sewer repair, trenchless
              pipe replacement, and underground plumbing — done right the first
              time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:2063836820"
                className="group inline-flex items-center gap-3 rounded-full bg-copper-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-copper-500/30 transition-all hover:bg-copper-600 hover:shadow-xl hover:shadow-copper-500/40"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Tim Now
              </a>
              <span className="text-sm text-navy-400">
                or talk to our AI receptionist 24/7 →
              </span>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-copper-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-navy-300">
                    {stat.label}
                  </div>
                  <div className="text-xs text-navy-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B2A] to-transparent" />
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="section-dark relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-copper-400">
              What We Do
            </span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Underground Expertise You Can Trust
            </h2>
            <p className="mt-4 text-lg text-navy-300">
              Specializing in the work most plumbers won&rsquo;t touch — below
              grade, below ground, below the surface. That&rsquo;s where we
              live.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="service-card rounded-xl p-6">
                <div className="mb-4 text-copper-400">{service.icon}</div>
                <h3 className="mb-2 font-display text-xl text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRUST / PROOF ═══════════════════════ */}
      <section className="section-earth relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-copper-600">
                Why Seattle Trusts Us
              </span>
              <h2 className="font-display text-4xl text-navy-800 sm:text-5xl">
                Your Reputation Deserves a Plumber Who Has One
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-600">
                Tim Walsh started Seattle Pipeworks in 1979 with a simple rule:
                do the job right, even when no one&rsquo;s watching — especially
                underground. Forty-five years later, every new customer still
                comes from a referral.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                That&rsquo;s not marketing. That&rsquo;s a track record.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Owner on every job — Tim personally oversees your project",
                  "Licensed, bonded, and insured in Washington State",
                  "Free estimates with no high-pressure sales tactics",
                  "We explain the problem before we start billing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-500">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {TRUST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-navy-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="font-display text-4xl text-copper-500 sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-navy-700">
                    {stat.label}
                  </div>
                  <div className="text-xs text-navy-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ AI RECEPTIONIST ═══════════════════════ */}
      <section className="section-dark relative py-24 sm:py-32">
        <div className="copper-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-2xl border border-copper-500/20 bg-navy-800/50 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper-500/20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C87941"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        AI Receptionist
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-copper-400">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        Available 24/7
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-navy-700/50 p-3">
                      <p className="text-sm text-navy-200">
                        &ldquo;Hi, you&rsquo;ve reached Seattle Pipeworks.
                        I&rsquo;m here to help. What&rsquo;s going on with your
                        plumbing?&rdquo;
                      </p>
                    </div>
                    <div className="ml-8 rounded-lg bg-copper-500/20 p-3">
                      <p className="text-sm text-copper-200">
                        &ldquo;My basement drain is backing up again...&rdquo;
                      </p>
                    </div>
                    <div className="rounded-lg bg-navy-700/50 p-3">
                      <p className="text-sm text-navy-200">
                        &ldquo;I can help with that. Let me get you on
                        Tim&rsquo;s schedule for a video inspection...&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-copper-500/10 -z-10" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-copper-400">
                Always Available
              </span>
              <h2 className="font-display text-4xl text-white sm:text-5xl">
                Never Miss Another Emergency Call
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-300">
                Sewage doesn&rsquo;t back up on a schedule. Our AI receptionist
                answers every call — nights, weekends, holidays — so you get
                help the moment you need it.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Answers in under 2 seconds, 24 hours a day",
                  "Knows Seattle Pipeworks' services and scheduling",
                  "Routes urgent calls directly to Tim",
                  "Books assessments while you sleep",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-navy-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0 text-copper-400"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-600 via-copper-500 to-copper-700" />
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Ready to Fix It Right?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Stop worrying about what&rsquo;s happening under your house. Call
            Tim for a straight answer, a fair price, and 45 years of proof that
            the job will get done.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:2063836820"
              className="inline-flex items-center gap-3 rounded-full bg-navy-800 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:bg-navy-900 hover:shadow-2xl"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (206) 383-6820
            </a>
            <span className="text-sm text-white/60">
              Free estimates · No obligation
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="border-t border-white/5 bg-navy-950 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-copper-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-copper-400"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 20V8l6-4 6 4v12" />
                  <path d="M9 20v-6h6v6" />
                </svg>
              </div>
              <span className="font-display text-sm text-navy-300">
                Seattle Pipeworks
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-navy-500">
              <span>Seattle, WA</span>
              <span className="hidden sm:inline">·</span>
              <a
                href="tel:2063836820"
                className="text-copper-400 transition-colors hover:text-copper-300"
              >
                (206) 383-6820
              </a>
            </div>

            <p className="text-xs text-navy-600">
              &copy; {new Date().getFullYear()} Seattle Pipeworks. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      <VoiceWidget />
    </main>
  );
}

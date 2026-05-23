"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  Clock3,
  Home,
  CheckCircle2,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Instant help, trusted locally",
    description:
      "Book screened house helpers from your neighborhood with a few taps, so your home gets the care it deserves.",
    icon: ShieldCheck,
  },
  {
    title: "Clear pricing, no surprises",
    description:
      "See service estimates up front, schedule on your terms, and manage every booking from one simple dashboard.",
    icon: Sparkles,
  },
  {
    title: "Flexible schedules that work",
    description:
      "Choose same-day or recurring help for cleaning, errands, childcare support, and more without stress.",
    icon: Clock3,
  },
  {
    title: "Build lasting relationships",
    description:
      "Find helpers who understand your home's needs and grow with your family over time.",
    icon: Users,
  },
];

const steps = [
  {
    title: "Sign in or join",
    description:
      "Securely access Tweeny with your account and tell us what help you need.",
    icon: Home,
  },
  {
    title: "Choose your role",
    description:
      "Select whether you want help or want to offer support as a Tweeny helper.",
    icon: Users,
  },
  {
    title: "Get matched quickly",
    description:
      "We connect you with the right local helpers, and you manage bookings from one place.",
    icon: ArrowRight,
  },
];

const features = [
  {
    title: "Background-verified helpers",
    description: "Every helper undergoes thorough screening and verification",
    icon: ShieldCheck,
  },
  {
    title: "Real-time availability",
    description: "See who's available now or schedule for later",
    icon: Clock3,
  },
  {
    title: "Secure payments",
    description: "Cashless transactions with transparent pricing",
    icon: CheckCircle2,
  },
  {
    title: "Ratings & reviews",
    description: "Make informed choices with community feedback",
    icon: Star,
  },
  {
    title: "Insurance covered",
    description: "All bookings protected with comprehensive coverage",
    icon: ShieldCheck,
  },
  {
    title: "24/7 support",
    description: "Our team is here whenever you need assistance",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote:
      "Tweeny has been a lifesaver! I can book help for cleaning within minutes, and the helpers are always professional and kind.",
    author: "Priya M.",
    role: "Working Parent",
    rating: 5,
  },
  {
    quote:
      "As a Tweeny helper, I love the flexibility. I can choose my hours and the platform makes it easy to connect with families who need me.",
    author: "Anjali K.",
    role: "Tweeny Helper",
    rating: 5,
  },
  {
    quote:
      "The transparency in pricing and the ability to rebook my favorite helpers has made managing household help stress-free.",
    author: "Rahul S.",
    role: "Homeowner",
    rating: 5,
  },
];

export default function CharterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-900 sm:py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-800/50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <Sparkles className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                Home care coordination for every household
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Tweeny makes house help effortless, reliable, and deeply local.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                From cleaning and errands to childcare and companion support,
                Tweeny connects you to trusted helpers in your community with
                smart scheduling, transparent pricing, and a modern, friendly
                experience.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <Link
                    href="/onboarding"
                    className="inline-flex items-center gap-2"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2"
                  >
                    Learn how Tweeny works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    95%
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Customer satisfaction from local bookings
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    30 min
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Average match time for available helpers
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    Local
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Helpers vetted for your neighborhood
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-400">
                How Tweeny works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                A smarter, more human way to coordinate home help.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
                You don't need to manage a dozen apps or remember when to
                rebook. Tweeny brings helpers, scheduling, and payment all into
                one simple workflow.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, idx) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-white py-16 dark:bg-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-400">
              Why choose Tweeny
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Built for trust, designed for convenience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Every feature is crafted to give you peace of mind while making
              home care coordination effortless.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-400">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Loved by families and helpers alike
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 dark:bg-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-4xl border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-xl dark:border-slate-800 dark:bg-gradient-to-br dark:from-emerald-900 dark:to-slate-900 sm:px-12 sm:py-16">
            <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr] xl:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300 dark:text-emerald-200">
                  Your home, your tempo
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to make home care feel easier every day?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 dark:text-slate-200">
                  Tweeny gives you the confidence of trusted helpers, fast
                  response, and clear pricing—so your household can stay calm
                  and covered.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 dark:text-emerald-300" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 dark:text-emerald-300" />
                    Free to join
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 dark:text-emerald-300" />
                    Start in minutes
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600"
                  asChild
                >
                  <Link
                    href="/onboarding"
                    className="inline-flex items-center gap-2"
                  >
                    Sign in to Tweeny
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Tweeny. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

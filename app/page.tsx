"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PawPrint, Camera, BookHeart, Share2, ShieldCheck, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MemorialCard, type Memorial } from "@/components/memorial-card";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const steps = [
  {
    icon: Camera,
    title: "Add their photos",
    text: "Upload the moments that mattered — the naps, the zoomies, the quiet mornings together.",
  },
  {
    icon: BookHeart,
    title: "Tell their story",
    text: "Write the story only you can tell: how you met, their quirks, the day everything changed.",
  },
  {
    icon: Share2,
    title: "Share the memory",
    text: "Get a beautiful memorial page with its own link. Invite family and friends to leave tributes.",
  },
];

const features = [
  { icon: Sparkles, title: "AI-written tribute", text: "Turn a few notes into a heartfelt eulogy in seconds." },
  { icon: ShieldCheck, title: "Kept forever", text: "Your memorial is preserved with redundant backups — it won't disappear." },
  { icon: PawPrint, title: "Private by default", text: "Only the people you invite can see it. Public when you choose." },
];

const wall: Memorial[] = [
  {
    name: "Mochi",
    species: "Shiba Inu",
    years: "2016 – 2025",
    quote: "You waited by the door every evening, even on the days I came home late.",
    color: "bg-ember",
  },
  {
    name: "Luna",
    species: "British Shorthair",
    years: "2019 – 2026",
    quote: "Nine years of purring on my keyboard. My code was never the same without you.",
    color: "bg-sage",
  },
  {
    name: "Rocky",
    species: "Golden Retriever",
    years: "2014 – 2024",
    quote: "You taught a whole neighborhood what unconditional love looks like.",
    color: "bg-bark",
  },
];

const faqs = [
  {
    q: "Is EverPet free?",
    a: "Creating a memorial is free. A one-time Forever plan keeps it preserved permanently with extra features like video memories.",
  },
  {
    q: "Who can see my pet's memorial?",
    a: "Only people with the link you share. You can keep it fully private or make it public on the memory wall.",
  },
  {
    q: "Can I add videos and voice notes?",
    a: "Yes — photos, videos, and voice memories are all supported on every memorial.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emberdark">
              <PawPrint className="h-3.5 w-3.5" /> Digital memorials for beloved pets
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-6xl">
              Where love <span className="text-ember">never leaves.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-bark/70">
              Create a beautiful digital memorial for your pet — their photos, their story,
              and every memory — kept forever in one place.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/create">
                <Button size="lg">Create a free memorial</Button>
              </Link>
              <Link href="#memories">
                <Button size="lg" variant="outline">Visit the memory wall</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-sand/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">A memorial in three gentle steps</h2>
            <p className="mt-3 text-bark/60">It takes about five minutes. No design skills needed.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }}>
                <Card className="h-full p-6">
                  <CardContent className="pt-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-ember">Step {i + 1}</p>
                    <h3 className="mt-1 font-serif text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bark/65">{s.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Made for remembering</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bark text-cream">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-bark/65">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory wall */}
      <section id="memories" className="bg-sand/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">The memory wall</h2>
            <p className="mt-3 text-bark/60">Pets remembered by the people who loved them most.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {wall.map((m, i) => (
              <MemorialCard key={m.name} memorial={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Simple, honest pricing</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <Card className="h-full p-8">
                <h3 className="font-serif text-2xl font-bold">Memorial</h3>
                <p className="mt-1 text-sm text-bark/60">Everything you need to remember them.</p>
                <p className="mt-6 font-serif text-5xl font-bold">Free</p>
                <ul className="mt-6 space-y-3 text-sm text-bark/75">
                  {["Unlimited photos", "Their story & timeline", "Shareable memorial link", "Tributes from friends"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-sage" /> {t}
                    </li>
                  ))}
                </ul>
                <Link href="/create" className="mt-8 block">
                  <Button variant="outline" className="w-full">Start free</Button>
                </Link>
              </Card>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }}>
              <Card className="h-full border-2 border-ember p-8">
                <h3 className="font-serif text-2xl font-bold">Forever</h3>
                <p className="mt-1 text-sm text-bark/60">Preserved permanently, with everything.</p>
                <p className="mt-6 font-serif text-5xl font-bold">$29 <span className="text-base font-normal text-bark/50">one-time</span></p>
                <ul className="mt-6 space-y-3 text-sm text-bark/75">
                  {["Everything in Memorial", "Video & voice memories", "AI-written tribute", "Priority preservation, forever"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-ember" /> {t}
                    </li>
                  ))}
                </ul>
                <Link href="/create" className="mt-8 block">
                  <Button className="w-full">Create a memorial</Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-sand/60 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Questions, answered gently</h2>
          </motion.div>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark/65">{f.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <PawPrint className="mx-auto h-10 w-10 text-ember" />
          <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
            Their story deserves to live forever.
          </h2>
          <p className="mt-4 text-bark/60">Start their memorial today — it only takes five minutes.</p>
          <Link href="/create" className="mt-8 inline-block">
            <Button size="lg">Create a free memorial</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

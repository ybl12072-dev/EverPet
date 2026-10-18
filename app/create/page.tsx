"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, ImagePlus, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Hamster", "Reptile", "Fish", "Other"];

export default function CreatePage() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("Dog");
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember/10 text-ember">
            <PawPrint className="h-7 w-7" />
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Begin their memorial</h1>
          <p className="mt-2 text-bark/60">Step 1 of 3 — the basics. You can add photos and their story next.</p>
        </div>

        {!done ? (
          <Card className="mt-8 p-2">
            <CardHeader>
              <div className="flex gap-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className={`h-1.5 flex-1 rounded-full ${n === 1 ? "bg-ember" : "bg-bark/10"}`} />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Pet&apos;s name</label>
                <Input
                  placeholder="e.g. Mochi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Species</label>
                <div className="flex flex-wrap gap-2">
                  {speciesOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSpecies(s)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        species === s
                          ? "border-ember bg-ember text-white"
                          : "border-bark/15 text-bark/70 hover:border-bark/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Born</label>
                  <Input type="month" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Passed</label>
                  <Input type="month" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">A favorite memory <span className="font-normal text-bark/50">(optional)</span></label>
                <Textarea placeholder="The moment you'll never forget…" />
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-bark/20 py-8 text-sm text-bark/50 transition-colors hover:border-ember/50 hover:text-ember"
              >
                <ImagePlus className="h-5 w-5" /> Add a photo — the one that feels most like them
              </button>
              <Button
                className="w-full"
                size="lg"
                disabled={!name.trim()}
                onClick={() => setDone(true)}
              >
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="mt-8 p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
                <Check className="h-7 w-7" />
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold">
                {name}&apos;s memorial has begun
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-bark/60">
                This is the MVP scaffold — steps 2 (story & timeline) and 3 (share & tributes)
                are the next pages to build. The data model will live in Supabase; auth comes next.
              </p>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

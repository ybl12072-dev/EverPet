"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface Memorial {
  name: string;
  species: string;
  years: string;
  quote: string;
  color: string;
}

export function MemorialCard({ memorial, index }: { memorial: Memorial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    >
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        <div className={`flex h-36 items-center justify-center ${memorial.color}`}>
          <Heart className="h-10 w-10 text-white/90" fill="currentColor" />
        </div>
        <CardContent className="pt-5">
          <h3 className="font-serif text-xl font-bold text-bark">{memorial.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-bark/50">
            {memorial.species} · {memorial.years}
          </p>
          <p className="mt-3 text-sm italic leading-relaxed text-bark/70">
            &ldquo;{memorial.quote}&rdquo;
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bark/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember text-white">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-bold text-bark">EverPet</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-bark/70 md:flex">
          <Link href="#how" className="hover:text-bark">How it works</Link>
          <Link href="#memories" className="hover:text-bark">Memory wall</Link>
          <Link href="#pricing" className="hover:text-bark">Pricing</Link>
          <Link href="#faq" className="hover:text-bark">FAQ</Link>
        </nav>
        <Link href="/create">
          <Button size="sm">Create a memorial</Button>
        </Link>
      </div>
    </header>
  );
}

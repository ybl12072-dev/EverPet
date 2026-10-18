import Link from "next/link";
import { PawPrint } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-bark/10 bg-sand/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember text-white">
            <PawPrint className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-bold text-bark">EverPet</span>
        </div>
        <p className="text-center text-sm text-bark/60">
          Where love never leaves. A digital home for the pets we&apos;ll always remember.
        </p>
        <div className="flex gap-6 text-sm text-bark/60">
          <Link href="#" className="hover:text-bark">Privacy</Link>
          <Link href="#" className="hover:text-bark">Terms</Link>
          <Link href="#" className="hover:text-bark">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

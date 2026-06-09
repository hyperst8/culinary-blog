import Link from 'next/link';
import { Utensils } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-peach py-10 mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-brand-600" />
            <span className="text-lg font-bold tracking-tight text-text-tertiary">
              Culinary<span className="text-brand-600">Gear</span>
            </span>
          </Link>
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} CulinaryGear. Alle rettigheter reservert.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-text-secondary">
          <Link href="#" className="hover:text-brand-600 transition-colors">Kontakt oss</Link>
          <Link href="#" className="hover:text-brand-600 transition-colors">Personvern</Link>
          <Link href="#" className="hover:text-brand-600 transition-colors">Vilkår</Link>
        </div>
      </div>
    </footer>
  );
}

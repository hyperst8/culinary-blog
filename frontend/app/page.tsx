import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { RecipeCard } from '@/components/ui/RecipeCard';
import { categories, featuredRecipes } from '@/lib/mockData';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="container mt-12 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-xl relative">
            {/* Subtle gradient blob behind text */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10" />

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-text-tertiary leading-[1.1]">
              Matlaging gjort enkelt med <span className="text-brand-600">riktig utstyr</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-md">
              Oppdag en verden av kulinariske muligheter. Vi bygger broen mellom tradisjonell hjemmelaging og moderne kjøkkenteknologi.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/oppskrifter">
                <Button variant="solid" className="w-full sm:w-auto text-md px-8 py-4">UTFORSK UTSTYR</Button>
              </Link>
              <Link href="/oppskrifter">
                <Button variant="outline" className="w-full sm:w-auto text-md px-8 py-4">SE OPPSKRIFTER</Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-surface-muted">
            <img
              src="/images/hero_airfryer.png"
              alt="Moderne kjøkken med airfryer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container">
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <h2 className="text-3xl font-bold text-text-tertiary">Vårt Kjøkkenutstyr</h2>
          <p className="text-text-secondary">Finn det perfekte verktøyet for din neste rett</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="container">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-text-tertiary">Utvalgte oppskrifter</h2>
          <Link href="/oppskrifter" className="hidden sm:flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            Se alle <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <Link href="/oppskrifter" className="sm:hidden flex items-center justify-center gap-1 font-semibold text-brand-600 hover:text-brand-700 transition-colors mt-8">
          Se alle <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Badge } from "./Badge";
import { Recipe, categories } from "@/lib/mockData";
import { Utensils } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const category = categories.find((c) => c.id === recipe.categoryId);
  const categoryName = category ? category.name : "";

  return (
    <Link
      href={`/oppskrifter/${recipe.slug}`}
      className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-muted"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-50">
        {/* Placeholder if no image */}
        <div className="absolute inset-0 flex items-center justify-center text-brand-200">
          <Utensils className="w-12 h-12" />
        </div>

        {/* Actual image - Next.js Image component */}
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Top right icon badge (as seen in design) */}
        <div className="absolute top-3 right-3 w-auto h-8 px-4 bg-white rounded-full flex items-center justify-center text-brand-600 text-sm shadow-sm">
          <span className="inline-flex items-center gap-1.5  px-2.5 py-0.5 text-xs font-medium tracking-wide text-brand-700 ">
            <Utensils className="w-3 h-3" /> {categoryName}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-bold text-lg text-text-tertiary line-clamp-1 group-hover:text-brand-600 transition-colors">
          {recipe.title}
        </h3>

        <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          <Badge type="time">{recipe.time}</Badge>
          <Badge type="calories">{recipe.calories}</Badge>
          <Badge type="category">{recipe.mealType}</Badge>
        </div>
      </div>
    </Link>
  );
}

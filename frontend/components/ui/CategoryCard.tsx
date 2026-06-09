import Link from "next/link";
import { Category } from "@/lib/mockData";
import { getIcon } from "@/utils/utils";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/oppskrifter?kategori=${category.slug}`}
      className="flex flex-col items-center justify-center p-8 bg-surface-muted rounded-2xl hover:bg-brand-50 transition-colors border border-transparent hover:border-brand-100 group"
    >
      <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {getIcon(category.slug, "w-8 h-8")}
      </div>
      <h3 className="font-semibold text-text-tertiary">{category.name}</h3>
    </Link>
  );
}

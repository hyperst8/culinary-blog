import { RecipeCard } from "@/components/ui/RecipeCard";
import { allRecipes, categories } from "@/lib/mockData";
import { getIcon } from "@/utils/utils";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Oppskrifter({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeCategory = (resolvedSearchParams.kategori as string) || "airfryer";
  const currentCategory = categories.find((c) => c.slug === activeCategory) || categories[0];
  const filteredRecipes = allRecipes.filter((recipe) => recipe.categoryId === currentCategory.id);

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-surface rounded-2xl shadow-sm border border-surface-muted p-5 sticky top-24">
            <h2 className="font-bold text-lg text-text-tertiary mb-1">
              Kjøkkenutstyr
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              Filtrer etter utstyr
            </p>

            <div className="flex flex-col gap-2">
              {categories.map((category) => {
                const isActive = category.slug === activeCategory;
                return (
                  <Link
                    key={category.id}
                    href={`/oppskrifter?kategori=${category.slug}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                    }`}
                  >
                    {getIcon(
                      category.slug,
                      `w-5 h-5 ${isActive ? "text-white" : "text-text-secondary"}`,
                    )}
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-tertiary mb-2">
              {currentCategory.name} oppskrifter
            </h1>
            <p className="text-text-secondary text-lg">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? "smakfull rett" : "smakfulle retter"}
            </p>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-2xl border border-surface-muted shadow-xs">
              <p className="text-text-secondary mb-4">Ingen oppskrifter funnet for denne kategorien ennå.</p>
              <Link href="/oppskrifter?kategori=airfryer" className="text-brand-600 hover:text-brand-700 font-semibold underline">
                Vis airfryer-oppskrifter
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}


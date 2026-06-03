import { RecipeCard } from '@/components/ui/RecipeCard';
import { airfryerRecipes, categories } from '@/lib/mockData';
import { Activity, Database01, Thermometer01, Package } from '@untitledui/icons';

export default function Oppskrifter() {
  const getIcon = (slug: string, active: boolean) => {
    const className = `w-5 h-5 ${active ? 'text-white' : 'text-text-secondary'}`;
    switch (slug) {
      case 'airfryer': return <Activity className={className} />;
      case 'jerngryte': return <Database01 className={className} />;
      case 'riskoker': return <Thermometer01 className={className} />;
      case 'stekepanne': return <Package className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const activeCategory = 'airfryer';

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-surface rounded-2xl shadow-sm border border-surface-muted p-5 sticky top-24">
            <h2 className="font-bold text-lg text-text-tertiary mb-1">Kjøkkenutstyr</h2>
            <p className="text-sm text-text-secondary mb-6">Filtrer etter utstyr</p>
            
            <div className="flex flex-col gap-2">
              {categories.map((category) => {
                const isActive = category.slug === activeCategory;
                return (
                  <button 
                    key={category.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                      isActive 
                        ? 'bg-brand-600 text-white shadow-sm' 
                        : 'text-text-secondary hover:bg-surface-muted hover:text-text-primary'
                    }`}
                  >
                    {getIcon(category.slug, isActive)}
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-tertiary mb-2">Airfryer Oppskrifter</h1>
            <p className="text-text-secondary text-lg">12 smakfulle retter</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {airfryerRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

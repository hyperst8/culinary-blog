import { singleRecipe } from '@/lib/mockData';
import { Badge } from '@/components/ui/Badge';
import { Check, InfoCircle, AlertCircle } from '@untitledui/icons';

export default function Oppskrift() {
  const recipe = singleRecipe;

  return (
    <div className="container py-8 md:py-12 max-w-5xl">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-8 shadow-sm">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge type="category" icon={true}>Airfryer</Badge>
        </div>
      </div>

      {/* Header Info Box */}
      <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-surface-muted mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-text-tertiary mb-3">{recipe.title}</h1>
          <p className="text-text-secondary text-lg leading-relaxed">{recipe.description}</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 shrink-0 bg-surface-muted p-4 rounded-xl border border-brand-50">
          <Badge type="time">{recipe.time}</Badge>
          <Badge type="calories">{recipe.calories}</Badge>
          <Badge type="category" icon={false}>{recipe.mealType}</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-12">
        {/* Ingredients */}
        <div>
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-surface-muted sticky top-24">
            <h2 className="text-xl font-bold text-text-tertiary mb-6 flex items-center gap-2">
              <span className="text-brand-600">📋</span> Ingredienser
            </h2>
            <ul className="flex flex-col gap-4">
              {recipe.ingredients?.map((ing, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border-2 border-brand-200 flex shrink-0 items-center justify-center mt-0.5 text-transparent hover:border-brand-500 cursor-pointer transition-colors">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-text-secondary">
                    {ing.amount && <span className="font-semibold text-text-tertiary mr-1">{ing.amount}</span>}
                    {ing.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-bold text-text-tertiary mb-6 flex items-center gap-2">
            <span className="text-brand-600">🍴</span> Fremgangsmåte
          </h2>
          <div className="flex flex-col gap-8 mb-12">
            {recipe.instructions?.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-tertiary mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="grid sm:grid-cols-2 gap-6">
            {recipe.tips?.map((tip, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${
                tip.type === 'equipment' 
                  ? 'bg-brand-50 border-brand-100 text-brand-900' 
                  : 'bg-red-50 border-red-100 text-red-900'
              }`}>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  {tip.type === 'equipment' ? <InfoCircle className="w-5 h-5 text-brand-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
                  {tip.title}
                </h4>
                <p className={`text-sm leading-relaxed ${tip.type === 'equipment' ? 'text-brand-800' : 'text-red-800'}`}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

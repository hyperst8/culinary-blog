import Link from "next/link";
import { equipmentItems } from "@/lib/mockData";
import {
  Cookie,
  Zap,
  Leaf,
  Flame,
  Soup,
  Beef,
  Utensils,
  Sprout,
  Coffee,
  CookingPot,
  Egg,
  Snowflake,
  Cloud,
  Droplet,
  Timer,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cookie,
  Zap,
  Leaf,
  Flame,
  Soup,
  Beef,
  Utensils,
  Sprout,
  Coffee,
  CookingPot,
  Egg,
  Snowflake,
  Cloud,
  Droplet,
  Timer,
};

export default function UtforskUtstyr() {
  return (
    <div className="container py-12 md:py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-tertiary mb-4">
          Utforsk vårt utstyr
        </h1>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          Riktig verktøy gjør halve jobben. Utforsk vårt nøye utvalgte sortiment av moderne og klassisk kjøkkenutstyr designet for å heve din matlagingsopplevelse til neste nivå.
        </p>
      </div>

      {/* Equipment List */}
      <div className="flex flex-col gap-10 md:gap-16">
        {equipmentItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col gap-8 lg:gap-12 items-center bg-surface p-6 md:p-8 lg:p-10 rounded-3xl border border-surface-muted shadow-xs transition-all duration-300 hover:shadow-md ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text Column */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl md:text-3xl font-extrabold text-text-tertiary mb-4">
                  {item.title}
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 text-justify">
                  {item.description}
                </p>

                <h3 className="font-bold text-text-tertiary mb-3 text-sm md:text-base">
                  Vanlige bruksområder
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {item.useAreas.map((area, idx) => {
                    const Icon = iconMap[area.icon] || Utensils;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 py-3 px-4 rounded-xl bg-surface-peach/80 border border-brand-50 text-text-secondary hover:bg-brand-50/50 hover:text-brand-700 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-brand-600 shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{area.name}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={`/oppskrifter?kategori=${item.categorySlug}`}
                  className="inline-block text-center w-full sm:w-auto bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm"
                >
                  UTFORSK
                </Link>
              </div>

              {/* Image Column */}
              <div className="w-full md:w-[45%] shrink-0 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-sm border border-surface-muted bg-surface-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

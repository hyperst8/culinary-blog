import { Button } from '@/components/ui/Button';
import { Package, Repeat01, Edit01 } from '@untitledui/icons';

export default function OmOss() {
  const concepts = [
    {
      title: 'Identifiser',
      description: 'Finn frem utstyret som samler støv bakerst i skapet. Airfryer, riskoker eller den tunge jerngryten.',
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: 'Mestre',
      description: 'Lær de spesifikke teknikkene og triksene som gjør at akkurat ditt apparat presterer på sitt beste.',
      icon: <Repeat01 className="w-6 h-6" />,
    },
    {
      title: 'Skap',
      description: 'Bruk våre spesialtilpassede oppskrifter som er optimalisert for å gi perfekte resultater hver gang.',
      icon: <Edit01 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Intro Section */}
      <section className="container mt-12 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-tertiary leading-[1.15]">
              Vi kobler sammen moderne kjøkken med lidenskapelig matlaging.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              CulinaryGear ble født ut av frustrasjonen over ubrukt potensial. Vi tror at hvert kjøkkenapparat har en historie å fortelle, og vi er her for å hjelpe deg med å skrive din egen.
            </p>
          </div>
          
          <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl bg-surface-muted">
            <img 
              src="/images/about_cooking.png" 
              alt="Person som steker mat i en panne" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft decorative shape behind */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-tertiary">Utstyr-først Konseptet</h2>
          <p className="text-lg text-text-secondary">
            Vi snur tradisjonell matlaging på hodet. I stedet for å starte med en oppskrift, starter vi med utstyret du allerede eier.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-surface rounded-2xl shadow-sm border border-surface-muted hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                {concept.icon}
              </div>
              <h3 className="text-xl font-bold text-text-tertiary mb-3">{concept.title}</h3>
              <p className="text-text-secondary leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

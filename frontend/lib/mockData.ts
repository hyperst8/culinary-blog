export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Ingredient = {
  name: string;
  amount: string;
};

export type Instruction = {
  title: string;
  description: string;
};

export type Tip = {
  type: "equipment" | "warning";
  title: string;
  description: string;
};

export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  time: string;
  calories: string;
  mealType: string;
  tags: string[];
  categoryId: string;
  image: string;
  ingredients?: Ingredient[];
  instructions?: Instruction[];
  tips?: Tip[];
};

export const categories: Category[] = [
  { id: "c1", name: "Airfryer", slug: "airfryer" },
  { id: "c2", name: "Jerngryte", slug: "jerngryte" },
  { id: "c3", name: "Riskoker", slug: "riskoker" },
  { id: "c4", name: "Stekepanne", slug: "stekepanne" },
  { id: "c5", name: "Mikrobølgeovn", slug: "mikro" },
];

export const featuredRecipes: Recipe[] = [
  {
    id: "r1",
    slug: "crispy-kylling-sotpotet",
    title: "Crispy kylling & søtpotet",
    description: "En rask og sunn middag.",
    time: "20 min",
    calories: "450 kcal",
    mealType: "Middag",
    tags: ["Middag", "Healthy"],
    categoryId: "c1",
    image: "/images/recipe_chicken.png",
  },
  {
    id: "r2",
    slug: "klassisk-biffgryte",
    title: "Klassisk biffgryte",
    description: "Langtidskokt og full av smak.",
    time: "120 min",
    calories: "620 kcal",
    mealType: "Middag",
    tags: ["Middag"],
    categoryId: "c2",
    image: "/images/recipe_stew.png",
  },
  {
    id: "r3",
    slug: "energifyllt-frokostpanne",
    title: "Energifyllt frokostpanne",
    description: "Den perfekte starten på dagen.",
    time: "15 min",
    calories: "380 kcal",
    mealType: "Frokost",
    tags: ["Frokost"],
    categoryId: "c4",
    image: "/images/recipe_breakfast.png",
  },
];

export const airfryerRecipes: Recipe[] = [
  {
    id: "a1",
    slug: "crispy-kyllingvinger-hvitlok",
    title: "Crispy kyllingvinger med hvitløk",
    description: "Perfekt som snacks eller hovedrett.",
    time: "25 min",
    calories: "320 kcal",
    mealType: "Middag",
    tags: ["Middag", "Healthy"],
    categoryId: "c1",
    image: "/images/chicken_wings.png",
  },
  {
    id: "a2",
    slug: "perfekte-sotpotet-fries",
    title: "Perfekte søtpotet fries",
    description: "Sprø utenpå og myke inni.",
    time: "15 min",
    calories: "180 kcal",
    mealType: "Snacks",
    tags: ["Snacks"],
    categoryId: "c1",
    image: "/images/sweet_potato_fries.png",
  },
  {
    id: "a3",
    slug: "rask-laks-asparges",
    title: "Rask laks med asparges",
    description: "Sunn og enkel middag på null komma niks.",
    time: "12 min",
    calories: "420 kcal",
    mealType: "Middag",
    tags: ["Middag", "Healthy"],
    categoryId: "c1",
    image: "/images/salmon_asparagus.png",
  },
];

export const singleRecipe: Recipe = {
  id: "r4",
  slug: "spro-airfryer-kylling",
  title: "Sprø airfryer kylling",
  description:
    "En sunnere og utrolig rask måte å lage klassisk 'fried chicken' på. Airfryeren gir en fantastisk sprø skorpe uten behov for store mengder olje.",
  time: "30 min",
  calories: "520 kcal",
  mealType: "Middag",
  tags: ["Middag"],
  categoryId: "c1",
  image: "/images/fried_chicken_hero.png",
  ingredients: [
    { name: "kyllinglår eller bryst", amount: "4 stk" },
    { name: "kulturmelk (for marinering)", amount: "2 dl" },
    { name: "hvetemel", amount: "150g" },
    { name: "paprikapulver", amount: "1 ss" },
    { name: "hvitløkspulver", amount: "1 ts" },
    { name: "Salt & Pepper", amount: "" },
    { name: "Matolje spray", amount: "" },
  ],
  instructions: [
    {
      title: "Mariner kyllingen",
      description:
        "Legg kyllingbitene i en bolle med kulturmelk. La det marinere i kjøleskapet i minst 30 minutter (helst lenger for saftigere resultat).",
    },
    {
      title: "Forbered paneringen",
      description:
        "I en annen vid bolle, bland sammen mel, paprikapulver, hvitløkspulver, salt og en god klype sort pepper.",
    },
    {
      title: "Paner kyllingen",
      description:
        "Ta en og en kyllingbit ut av marinaden (la overflødig væske renne av) og dekk den grundig i melblandingen. Trykk melet litt fast slik at det sitter godt.",
    },
    {
      title: "Steking i Airfryer",
      description:
        "Forvarm airfryeren til 200°C. Spray kyllingbitene lett med matolje på begge sider. Legg dem i kurven (ikke overfyll) og stek i ca. 18-20 minutter. Snu dem halvveis og spray ev. med litt mer olje der det er tørt mel.",
    },
  ],
  tips: [
    {
      type: "equipment",
      title: "Utstyrtips",
      description:
        "For ekstra sprøhet i airfryeren er matoljespray alfa og omega. Airfryeren trenger *litt* fett for å skape skorpen, ellers vil melet bare bli tørt og pudrete. Spray jevnt, men lett.",
    },
    {
      type: "warning",
      title: "Unngå overfylling",
      description:
        "La det være rom mellom bitene i kurven for optimal luftsirkulasjon.",
    },
  ],
};

export type EquipmentUseArea = {
  name: string;
  icon: string;
};

export type Equipment = {
  id: string;
  title: string;
  description: string;
  image: string;
  categorySlug: string;
  useAreas: EquipmentUseArea[];
};

export const equipmentItems: Equipment[] = [
  {
    id: "e1",
    title: "Airfryer",
    description: "Det moderne kjøkkenets må-ha. En airfryer bruker rask luftsirkulasjon til å tilberede mat raskt og jevnt med lite eller ingen olje. Den er perfekt for å oppnå en sprø tekstur på alt fra grønnsaker to proteiner, noe som gjør den til et sunnere alternativ til frityrsteking, samtidig som du sparer betydelig med tid og energi sammenlignet med en tradisjonell stekeovn.",
    image: "/images/equipment_airfryer.png",
    categorySlug: "airfryer",
    useAreas: [
      { name: "Sprø snacks", icon: "Cookie" },
      { name: "Raske proteiner", icon: "Zap" },
      { name: "Bakte grønnsaker", icon: "Leaf" },
      { name: "Gjenoppvarming", icon: "Flame" },
    ],
  },
  {
    id: "e2",
    title: "Jerngryte",
    description: "Hjørnesteinen i langtidskoking. En støpejernsgryte av høy kvalitet gir enestående varmelagring og varmefordeling. Perfekt for gryteretter, bresering og brødbaking. Den kan flyttes sømløst fra komfyren til stekeovnen og direkte til middagsbordet. Grytens holdbarhet gjør at den ofte varer i generasjoner og utvikler en naturlig slipp-lett-overflate over tid.",
    image: "/images/equipment_jerngryte.png",
    categorySlug: "jerngryte",
    useAreas: [
      { name: "Gryteretter", icon: "Soup" },
      { name: "Grytebrød", icon: "Flame" },
      { name: "Bresert kjøtt", icon: "Beef" },
      { name: "Frityrsteking", icon: "Flame" },
    ],
  },
  {
    id: "e3",
    title: "Riskoker",
    description: "Presisjonskoking for perfekte riskorn. Moderne riskokere bruker avansert 'fuzzy logic'-teknologi for å justere koketid og temperatur dynamisk. Dette sikrer perfekt, luftig ris, perfekt tilberedt quinoa eller kremet grøt uten konstant tilsyn, slik at du kan fokusere på andre deler av matlagingen.",
    image: "/images/equipment_riskoker.png",
    categorySlug: "riskoker",
    useAreas: [
      { name: "Perfekt ris", icon: "Utensils" },
      { name: "Quinoa & korn", icon: "Sprout" },
      { name: "Frokostgrøt", icon: "Coffee" },
      { name: "Dampede grønnsaker", icon: "Leaf" },
    ],
  },
];

export const allRecipes: Recipe[] = [
  ...featuredRecipes,
  ...airfryerRecipes,
  {
    id: "jg1",
    slug: "klassisk-biffgryte",
    title: "Klassisk biffgryte i jerngryte",
    description: "En fyldig og varmende biffgryte som koker seg mør i støpejernsgryten. Perfekt søndagsmiddag.",
    time: "120 min",
    calories: "620 kcal",
    mealType: "Middag",
    tags: ["Middag", "Tradisjonell"],
    categoryId: "c2",
    image: "/images/recipe_stew.png",
  },
  {
    id: "jg2",
    slug: "langtidskokt-lammeskank",
    title: "Langtidskokt lammeskank",
    description: "Møre lammeskanker som faller av benet etter noen timer i jerngryten med rødvin og rotgrønnsaker.",
    time: "180 min",
    calories: "750 kcal",
    mealType: "Middag",
    tags: ["Middag", "Festmat"],
    categoryId: "c2",
    image: "/images/recipe_stew.png",
  },
  {
    id: "rk1",
    slug: "perfekt-sushiris",
    title: "Perfekt sushiris i riskoker",
    description: "Det hemmelige trikset bak god sushi er perfekt kokt og krydret ris. Her får du det til hver gang.",
    time: "30 min",
    calories: "280 kcal",
    mealType: "Tilbehør",
    tags: ["Mellommåltid", "Asiatisk"],
    categoryId: "c3",
    image: "/images/recipe_breakfast.png",
  },
  {
    id: "rk2",
    slug: "kremet-havregrot-kanel",
    title: "Kremet havregrøt med kanel",
    description: "Lag frokosten superenkel ved å la riskokeren gjøre jobben. Perfekt kremet resultat.",
    time: "15 min",
    calories: "320 kcal",
    mealType: "Frokost",
    tags: ["Frokost", "Sunn"],
    categoryId: "c3",
    image: "/images/recipe_breakfast.png",
  }
];


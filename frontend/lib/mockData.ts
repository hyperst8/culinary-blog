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

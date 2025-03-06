// src/data/conceptsData.js
// Key concepts and definitions for the Geography/CRES exam

export const concepts = [
  {
    id: "orientalism",
    title: "Orientalism",
    definition: "Western conceptions and representations of the East (east of Europe)",
    details: "Coined in 1978 by Edward Said, a Palestinian author, though the term was known before then. Orientalism creates a binary of 'us vs. them' and regards the East as exotic, weak, and vulnerable while portraying the West as powerful and influential.",
    examples: [
      "2003 invasion of Iraq fueled by Western stereotypes that Middle Easterners are terrorists",
      "Rudyard Kipling's 'The White Man's Burden' promoting the idea of 'taming the savages'",
      "Placing blame on outsiders for societal issues to deflect from one's own wrongdoings"
    ],
    relatedConcepts: ["othering", "colonialism", "western-superiority"],
    people: ["Edward Said"],
    sources: ["Orientalism (1978)"]
  },
  {
    id: "intersectionality",
    title: "Intersectionality",
    definition: "Understanding that there are multiple factors that contribute to oppression",
    details: "Recognizes that individuals can face discrimination based on overlapping identities, creating unique experiences of marginalization.",
    examples: [
      "Someone who is a member of the LGBTQ+ community while also being a person of color",
      "The compounded challenges faced by women of color in professional settings"
    ],
    relatedConcepts: ["oppression", "identity", "privilege"],
    people: ["Kimberlé Crenshaw"],
    sources: []
  },
  {
    id: "redlining",
    title: "Redlining",
    definition: "Financial institutions outlining areas to prevent loans and the opening of franchises",
    details: "A discriminatory practice where lenders and insurance companies refused or limited loans, mortgages, and other financial services in specific neighborhoods, typically those with large minority populations.",
    examples: [
      "Makes it difficult for people of color to access necessary financial services",
      "Results in businesses catering to people who have more money, systematically and historically white people"
    ],
    relatedConcepts: ["housing-discrimination", "segregation", "disinvestment"],
    people: [],
    sources: []
  },
  {
    id: "blockbusting",
    title: "Blockbusting",
    definition: "The practice of persuading owners to sell property cheaply because of the fear of people of another ethnic or social group moving into the neighborhood",
    details: "Real estate agents would induce panic selling by white homeowners by suggesting that property values would decline due to an influx of minority residents, then reselling the properties at higher prices to incoming minorities.",
    examples: [
      "Corrupt realtors preying on racial panic",
      "Contributing to neighborhood turnover and segregation"
    ],
    relatedConcepts: ["steering", "white-flight", "housing-discrimination"],
    people: [],
    sources: []
  },
  {
    id: "steering",
    title: "Steering",
    definition: "A method where realtors/city officials purposefully steer people into certain neighborhoods based on their race",
    details: "A form of housing discrimination where real estate agents guide clients toward or away from certain neighborhoods based on their race or ethnicity.",
    examples: [
      "Limiting housing options for minorities",
      "Maintaining segregated neighborhoods despite fair housing laws"
    ],
    relatedConcepts: ["housing-discrimination", "segregation", "redlining"],
    people: [],
    sources: []
  },
  {
    id: "vagrancy-laws",
    title: "Vagrancy Laws",
    definition: "Laws based on the implication of not belonging in a place",
    details: "Used to control the movement and presence of certain populations, often targeting minorities and poor people.",
    examples: [
      "Businesses with bathrooms only for paying customers",
      "Putting conditions on the existence of people - often tied to unhoused people",
      "Emphasis on minorities 'knowing their place'"
    ],
    relatedConcepts: ["jim-crow", "mobility", "policing"],
    people: [],
    sources: []
  },
  {
    id: "sundown-towns",
    title: "Sundown Towns",
    definition: "Communities that excluded non-white residents, particularly after sunset",
    details: "Towns where non-whites were warned to leave by sundown, enforced through intimidation, violence, and local ordinances.",
    examples: [
      "Example of restrictions of mobility specifically targeted at non-white people",
      "Maintained through both formal and informal means"
    ],
    relatedConcepts: ["segregation", "jim-crow", "mobility"],
    people: [],
    sources: []
  },
  {
    id: "creative-destruction",
    title: "Creative Destruction",
    definition: "Economic concept where the old is destroyed to make way for the new",
    details: "In urban contexts, refers to demolition of existing structures and communities to build new developments.",
    examples: [
      "Slum clearance",
      "Mass suburbanization (Levittowns)",
      "The death of the American Downtown"
    ],
    relatedConcepts: ["urban-renewal", "modernism", "suburbanization"],
    people: [],
    sources: []
  },
  {
    id: "edge-cities",
    title: "Edge Cities",
    definition: "Large urban areas outside of cities with a focus on workspaces, shopping, and entertainment",
    details: "According to Joe Garreau's 1990s estimation, characterized by 5,000,000+ square feet of leasable office space, 600,000+ square feet of leasable retail space, more jobs than bedrooms, and perceived by populations as one place.",
    examples: [
      "Suburban business districts",
      "Shopping mall complexes with surrounding development"
    ],
    relatedConcepts: ["suburbanization", "urban-sprawl", "malling-of-america"],
    people: ["Joe Garreau"],
    sources: []
  },
  {
    id: "minstrelsy",
    title: "Minstrelsy",
    definition: "Theatrical performances featuring white performers in blackface depicting racist caricatures",
    details: "Popular form of entertainment in 19th and early 20th century America that reinforced racial stereotypes and contributed to American popular culture.",
    examples: [
      "Thomas Rice with his 'Jim Crow' character",
      "George Washington Dixon with 'Zip Coon' character",
      "UVM Kake Walk (1893-1969)"
    ],
    relatedConcepts: ["blackface", "racism", "popular-culture"],
    people: ["Thomas Rice", "George Washington Dixon", "Al Jolson"],
    sources: []
  },
  {
    id: "cultural-appropriation",
    title: "Cultural Appropriation",
    definition: "The adoption of elements of a minority culture by members of the dominant culture",
    details: "Often involves power imbalances where dominant groups profit from minority cultural expressions without proper acknowledgment or respect.",
    examples: [
      "White artists profiting from Black musical traditions",
      "Mark Wahlberg transitioning from racist attacks to making money from proximity to Black performers"
    ],
    relatedConcepts: ["cultural-appreciation", "racism", "popular-culture"],
    people: ["Mark Wahlberg", "Elvis Presley"],
    sources: []
  },
  {
    id: "gentrification",
    title: "Gentrification",
    definition: "Process of changing an urban area through an influx of more affluent residents and businesses",
    details: "Often leads to increased property values, changes in neighborhood character, and displacement of original residents.",
    examples: [
      "Boston's Roxbury now experiencing mass gentrification and extremely expensive housing",
      "Washington DC's demographic shift from 71% Black in 1970 to less than 50% Black by 2013"
    ],
    relatedConcepts: ["displacement", "urban-renewal", "housing-affordability"],
    people: [],
    sources: []
  },
  {
    id: "assimilation",
    title: "Assimilation",
    definition: "Process by which a person or group's language and culture come to resemble those of another group",
    details: "In American context, often refers to immigrants adopting mainstream 'American' culture, with different expectations based on race and ethnicity.",
    examples: [
      "'Classical' assimilation - melting pot ideal from Chicago School of Sociology (1920s)",
      "The 'model minority' concept suggesting certain minority groups assimilated better",
      "Blackface performances as a mechanism for assimilation by white immigrants"
    ],
    relatedConcepts: ["melting-pot", "model-minority", "immigration"],
    people: [],
    sources: ["Chicago School of Sociology"]
  },
  {
    id: "race-films",
    title: "Race Films",
    definition: "Films produced with Black casts for Black audiences, from 1915 to the early 1950s",
    details: "Early Black cinema that operated outside the mainstream Hollywood studio system during racial segregation.",
    examples: [
      "Films directed by Oscar Micheaux",
      "Films produced by Richard Norman, a white man who recognized the market for Black entertainment"
    ],
    relatedConcepts: ["segregation", "film-industry", "representation"],
    people: ["Oscar Micheaux", "Richard Norman"],
    sources: []
  },
  {
    id: "mobility",
    title: "Mobility",
    definition: "Freedom of movement within and between geographic spaces",
    details: "Highly valued in American society but often restricted for certain groups through formal and informal means.",
    examples: [
      "Sundown towns restricting where Black people could be after dark",
      "Fear of COVID-19 travel restrictions showing how much Americans value freedom of movement",
      "Incarceration as a form of mobility restriction"
    ],
    relatedConcepts: ["freedom", "segregation", "public-space"],
    people: [],
    sources: []
  }
];

export default concepts;

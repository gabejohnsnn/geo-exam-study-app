// src/data/timelineData.js
// Timeline events data organized chronologically

export const timelineEvents = [
  // Before 1830s
  {
    id: "blackface-rise",
    year: "1830s",
    title: "Rise of Blackface & Minstrelsy",
    description: "Rise of blackface in American entertainment as a form of racial caricature",
    details: "Featured performers like Thomas Rice with his 'Jim Crow' character and George Washington Dixon with 'Zip Coon'. These performances became mechanisms for white immigrant assimilation and established lasting stereotypes.",
    category: "Culture",
    relatedTopics: ["minstrelsy", "racism", "popular-culture"],
    people: ["Thomas Rice", "George Washington Dixon"],
  },
  
  // 1850s-1870s
  {
    id: "stephen-foster",
    year: "1826-1864",
    title: "Stephen Foster - 'Father of American Popular Music'",
    description: "Foster's popular music incorporated minstrel themes and racial stereotypes",
    details: "Known for songs like 'Oh! Susanna', Foster moved to Cincinnati in 1846 and was inspired by the cultural environment there. His music was later performed by blackface performers like Al Jolson.",
    category: "Culture",
    relatedTopics: ["minstrelsy", "popular-music"],
    people: ["Stephen Foster", "Al Jolson"],
  },
  
  // 1860s-1870s
  {
    id: "jim-crow-laws",
    year: "1865-1965",
    title: "Jim Crow Era",
    description: "Period of enforced racial segregation through laws and social customs",
    details: "Named after the blackface minstrel character, Jim Crow laws enforced racial segregation in the Southern United States. These laws restricted mobility and rights of Black Americans.",
    category: "Law",
    relatedTopics: ["segregation", "racism", "mobility"],
    relatedPlaces: ["Southern US"],
  },
  
  // 1890s
  {
    id: "uvm-kake-walk",
    year: "1893-1969",
    title: "UVM Kake Walk",
    description: "University tradition featuring students in blackface",
    details: "Began in 1893 at the University of Vermont and didn't end until 1969. Featured white students in blackface performing to songs like 'Cotton Babes', with major community outreach encouraging locals to attend.",
    category: "Culture",
    relatedTopics: ["blackface", "racism", "higher-education"],
    relatedPlaces: ["Vermont"],
  },
  
  // 1900s-1920s
  {
    id: "great-migration",
    year: "1916-1970",
    title: "Great Migration",
    description: "Movement of 6 million African Americans from the South to urban areas in the North and West",
    details: "Changed the demographic makeup of major cities like Boston, Chicago, and Washington DC, contributing to new cultural expressions and community formations.",
    category: "Demographics",
    relatedTopics: ["migration", "urbanization"],
    relatedPlaces: ["Northern US", "Boston", "Chicago", "Washington DC"],
  },
  
  {
    id: "film-industry-development",
    year: "1908-1920s",
    title: "Early Film Industry Development",
    description: "Geographic shifts in the American film industry",
    details: "Starting in New Jersey with Edison, moving to Jacksonville (1908-1920s) for optimal weather and cheaper costs, and finally to Los Angeles for diverse landscapes. Oscar Micheaux created 'race films' in this era.",
    category: "Culture",
    relatedTopics: ["film", "race-films"],
    relatedPlaces: ["New Jersey", "Jacksonville", "Los Angeles"],
    people: ["Thomas Edison", "Oscar Micheaux", "Richard Norman"],
  },
  
  // 1920s-1930s
  {
    id: "dc-chinatown-displacement",
    year: "1920s",
    title: "DC Chinatown Displacement",
    description: "Original Chinatown displaced in Washington DC",
    details: "By 1936, over 800 people were living in the new Chinatown area of DC. This represents one of many cases of urban displacement of Asian American communities.",
    category: "Urban Development",
    relatedTopics: ["displacement", "chinatown"],
    relatedPlaces: ["Washington DC"],
  },
  
  // 1930s
  {
    id: "motion-picture-code",
    year: "1934",
    title: "Motion Picture Production Code",
    description: "Self-censorship code fully enacted for the film industry",
    details: "Followed Hollywood scandals in 1922. The code prohibited content that 'lowered moral standards' and censored displays of interracial relationships, homosexuality, and other content deemed inappropriate.",
    category: "Culture",
    relatedTopics: ["film", "censorship"],
    relatedPlaces: ["Hollywood"],
  },
  
  // 1940s-1950s
  {
    id: "levittowns",
    year: "1947-1951",
    title: "Levittowns Development",
    description: "Mass suburban housing developments with racial restrictions",
    details: "First seen in Nassau County, Long Island, and spread to New Jersey and Pennsylvania. Bill Levit included lease restrictions: 'the tenant agrees not to permit the premises to be used or occupied by any person other than members of the Caucasian race.'",
    category: "Housing",
    relatedTopics: ["suburbanization", "housing-discrimination"],
    relatedPlaces: ["Long Island", "New Jersey", "Pennsylvania"],
    people: ["Bill Levit"],
  },
  
  {
    id: "pruit-igoe",
    year: "1954-1974",
    title: "Pruitt-Igoe Housing Project",
    description: "Failed public housing project in St. Louis",
    details: "Designed by Minoru Yamasaki, this project became symbolic of failed urban planning, modernism, and the shattering of tight-knit communities. It appeared as a penalization for being poor.",
    category: "Housing",
    relatedTopics: ["public-housing", "urban-planning", "modernism"],
    relatedPlaces: ["St. Louis"],
    people: ["Minoru Yamasaki"],
  },
  
  // 1960s
  {
    id: "dc-home-rule",
    year: "1967",
    title: "DC Mayor-Commissioner Appointed",
    description: "Walter Washington appointed as Mayor-Commissioner of DC by LBJ",
    details: "Would later become the first elected African American mayor of a major US city in 1974, when DC was granted limited home rule.",
    category: "Politics",
    relatedTopics: ["home-rule", "representation"],
    relatedPlaces: ["Washington DC"],
    people: ["Walter Washington", "Lyndon B. Johnson"],
  },
  
  {
    id: "fair-housing-act",
    year: "1968",
    title: "Fair Housing Act",
    description: "Title VIII of the Civil Rights Act of 1968",
    details: "Signed on April 11, 1968, shortly after the assassination of Martin Luther King Jr., this law prohibited discrimination in housing based on race, religion, national origin, and later sex, disability, and familial status.",
    category: "Law",
    relatedTopics: ["housing-discrimination", "civil-rights"],
    relatedPlaces: ["United States"],
    people: ["Martin Luther King Jr."],
  },
  
  {
    id: "mlk-riots",
    year: "1968",
    title: "MLK Assassination Riots",
    description: "Civil unrest following the assassination of Martin Luther King Jr.",
    details: "Led to decline in downtown areas in multiple cities, including Washington DC, where riots contributed to most Chinese American residents moving to the suburbs.",
    category: "Civil Unrest",
    relatedTopics: ["riots", "urban-decline"],
    relatedPlaces: ["Washington DC", "Multiple US Cities"],
    people: ["Martin Luther King Jr."],
  },
  
  // 1970s
  {
    id: "boston-busing-crisis",
    year: "1974-1976",
    title: "Boston's Busing Crisis",
    description: "Controversial school desegregation through busing in Boston",
    details: "In June 1974, Federal Judge Arthur Garrity Jr. ruled that Boston's public school system needed desegregation. Phase 1 paired Roxbury (Black) and South Boston (White) neighborhoods, creating significant tensions and protests.",
    category: "Education",
    relatedTopics: ["desegregation", "education", "racism"],
    relatedPlaces: ["Boston", "Roxbury", "South Boston"],
    people: ["Arthur Garrity Jr."],
  },
  
  // 1980s
  {
    id: "dc-crack-epidemic",
    year: "1980s",
    title: "DC Crack Epidemic",
    description: "Drug crisis coincides with real estate speculation in DC",
    details: "The crack epidemic had devastating effects on Washington DC's communities during a period of intense real estate speculation and development.",
    category: "Urban Issues",
    relatedTopics: ["drugs", "real-estate", "urban-change"],
    relatedPlaces: ["Washington DC"],
  },
  
  {
    id: "dc-convention-center",
    year: "1986",
    title: "DC Builds New Convention Center",
    description: "Named after Walter Washington with Chinatown Arch dedicated",
    details: "This development represented the continued evolution of DC's urban landscape and its effect on the Chinatown neighborhood.",
    category: "Urban Development",
    relatedTopics: ["urban-development", "chinatown"],
    relatedPlaces: ["Washington DC", "Shaw Neighborhood"],
    people: ["Walter Washington"],
  },
  
  // 1990s
  {
    id: "barry-arrest",
    year: "1990",
    title: "Mayor Marion Barry Arrested",
    description: "DC Mayor arrested in FBI sting operation",
    details: "Barry had pushed back against federal restrictions on DC's governance. Despite his arrest, he ran for mayor again in 1994 and won, though Congress curtailed his power.",
    category: "Politics",
    relatedTopics: ["governance", "drug-policy"],
    relatedPlaces: ["Washington DC"],
    people: ["Marion Barry"],
  },
  
  {
    id: "rodney-king-riots",
    year: "1992",
    title: "Rodney King Riots",
    description: "Los Angeles riots after police beating of Rodney King",
    details: "Triggered after four white LAPD officers were acquitted in the beating of Black motorist Rodney King. This became an influential event in discussions of racism and police brutality in the US.",
    category: "Civil Unrest",
    relatedTopics: ["police-brutality", "racism", "riots"],
    relatedPlaces: ["Los Angeles"],
    people: ["Rodney King"],
  },
  
  // 2000s
  {
    id: "dc-demographic-shift",
    year: "2013",
    title: "DC's Black Population Drops Below 50%",
    description: "Washington DC becomes less than majority Black after decades",
    details: "After being known as 'Chocolate City' with a 71% Black population in 1970, demographic shifts and gentrification changed the racial makeup of the city.",
    category: "Demographics",
    relatedTopics: ["gentrification", "demographic-change"],
    relatedPlaces: ["Washington DC"],
  },
  
  // MOVE Bombing Philadelphia
  {
    id: "move-bombing",
    year: "1985",
    title: "MOVE Bombing in Philadelphia",
    description: "Police bombing of a predominantly Black neighborhood",
    details: "Philadelphia police dropped a bomb on the MOVE organization's headquarters, killing 11 people including 5 children, and destroying 61 homes. This contradicted Philadelphia's reputation as a progressive city.",
    category: "Civil Unrest",
    relatedTopics: ["police-violence", "racial-tensions"],
    relatedPlaces: ["Philadelphia"],
  }
];

export default timelineEvents;

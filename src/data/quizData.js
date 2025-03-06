// src/data/quizData.js
// Quiz questions for the Geography/CRES exam study app

export const quizQuestions = [
  // Concept Questions
  {
    id: "q1",
    question: "What is Orientalism as defined by Edward Said?",
    options: [
      "Appreciation for Eastern art and culture",
      "Western conceptions and representations of the East that portray the East as exotic, weak and vulnerable",
      "Cultural exchange between East and West",
      "A foreign policy doctrine developed during the Cold War"
    ],
    correctAnswer: 1,
    explanation: "Edward Said defined Orientalism in 1978 as Western conceptions of 'the Orient' that create a binary of 'us vs. them' and regard the East as exotic, weak, and vulnerable while portraying the West as powerful and influential.",
    category: "Concepts",
    relatedConcepts: ["orientalism", "othering"]
  },
  {
    id: "q2",
    question: "What is 'steering' in the context of housing discrimination?",
    options: [
      "The process of urban planning to direct traffic flow",
      "City officials guiding development toward certain neighborhoods",
      "Realtors/city officials purposefully directing people to certain neighborhoods based on race",
      "Advertising homes only in certain publications"
    ],
    correctAnswer: 2,
    explanation: "Steering is a form of housing discrimination where real estate agents guide clients toward or away from certain neighborhoods based on their race or ethnicity.",
    category: "Concepts",
    relatedConcepts: ["steering", "housing-discrimination", "segregation"]
  },
  {
    id: "q3",
    question: "What is intersectionality?",
    options: [
      "The study of road and highway intersections in urban planning",
      "Understanding how multiple factors contribute to oppression based on overlapping identities",
      "The intersection of public and private spaces in urban environments",
      "The crossover of different cultural practices"
    ],
    correctAnswer: 1,
    explanation: "Intersectionality recognizes that individuals can face discrimination based on overlapping identities (such as race, gender, sexuality, class), creating unique experiences of marginalization.",
    category: "Concepts",
    relatedConcepts: ["intersectionality", "oppression", "identity"]
  },
  {
    id: "q4",
    question: "What were 'sundown towns'?",
    options: [
      "Towns that had curfews for all residents after dark",
      "Communities with tourism based on sunset viewing",
      "Towns where non-whites were warned to leave by sundown",
      "Western settlements named for their geographic orientation"
    ],
    correctAnswer: 2,
    explanation: "Sundown towns were communities that excluded non-white residents, particularly after sunset, enforced through intimidation, violence, and local ordinances.",
    category: "Concepts",
    relatedConcepts: ["sundown-towns", "segregation", "mobility"]
  },
  
  // Historical Events Questions
  {
    id: "q5",
    question: "What was the significance of the 1985 MOVE bombing in Philadelphia?",
    options: [
      "It led to the first Black mayor of Philadelphia",
      "It contradicted Philadelphia's reputation as a progressive city when police bombed a predominantly Black neighborhood",
      "It was the first example of community organizing among minority groups",
      "It established new urban renewal policies"
    ],
    correctAnswer: 1,
    explanation: "The MOVE bombing in 1985, when Philadelphia police dropped a bomb on the MOVE organization's headquarters, killing 11 people and destroying 61 homes, contradicted Philadelphia's reputation as a progressive city.",
    category: "Historical Events",
    relatedPlaces: ["Philadelphia"]
  },
  {
    id: "q6",
    question: "What was the Boston Busing Crisis of 1974-1976?",
    options: [
      "A transportation workers' strike that paralyzed the city",
      "A controversial school desegregation program ordered by a federal judge",
      "A budget crisis that affected public transportation",
      "A series of protests against highway construction"
    ],
    correctAnswer: 1,
    explanation: "The Boston Busing Crisis occurred when Federal Judge Arthur Garrity Jr. ruled that Boston's public school system needed desegregation and ordered busing between neighborhoods like Roxbury (Black) and South Boston (White), creating significant tensions and protests.",
    category: "Historical Events",
    relatedPlaces: ["Boston", "Roxbury", "South Boston"]
  },
  {
    id: "q7",
    question: "What was UVM's Kake Walk and when did it end?",
    options: [
      "A dance competition that ended in 1980",
      "A university tradition featuring students in blackface that ended in 1969",
      "A fundraising bake sale that continued until 1990",
      "A winter festival that still continues today"
    ],
    correctAnswer: 1,
    explanation: "UVM's Kake Walk was a university tradition that began in 1893 and featured white students in blackface performing to songs like 'Cotton Babes'. It finally ended in 1969 after years of protests.",
    category: "Historical Events",
    relatedPlaces: ["Vermont"],
    relatedConcepts: ["blackface", "minstrelsy"]
  },
  {
    id: "q8",
    question: "What characterized Levittowns in the 1940s-50s?",
    options: [
      "Integrated housing developments designed to promote racial harmony",
      "Urban renewal projects in city centers",
      "Mass suburban housing developments with explicit racial restrictions",
      "Government housing for returning veterans without racial restrictions"
    ],
    correctAnswer: 2,
    explanation: "Levittowns were mass suburban housing developments that included lease restrictions: 'the tenant agrees not to permit the premises to be used or occupied by any person other than members of the Caucasian race.'",
    category: "Historical Events",
    relatedConcepts: ["housing-discrimination", "suburbanization"]
  },
  
  // Geographic Focus Questions
  {
    id: "q9",
    question: "Why was Washington DC known as 'Chocolate City'?",
    options: [
      "For its famous chocolate industry",
      "Because it had a majority Black population (71% in 1970)",
      "Due to the color of its government buildings",
      "Because of a popular song about the city"
    ],
    correctAnswer: 1,
    explanation: "Washington DC was known as 'Chocolate City' because in 1964, it and Newark, NJ were the only two US cities with majority Black populations. By 1970, DC was 71% Black.",
    category: "Geographic Focus",
    relatedPlaces: ["Washington DC"]
  },
  {
    id: "q10",
    question: "What is significant about DC's governance structure?",
    options: [
      "It has more representatives in Congress than any other city",
      "It is governed directly by the United Nations",
      "Despite a population larger than Vermont, it has extremely limited self-governance and no full voting representation in Congress",
      "It is the only US city with an elected king"
    ],
    correctAnswer: 2,
    explanation: "Despite having over 700K residents (more than Vermont), DC has no congressional vote, Congress can abolish its government at will, and its laws and budget need Congressional approval.",
    category: "Geographic Focus",
    relatedPlaces: ["Washington DC"],
    relatedConcepts: ["home-rule", "representation"]
  },
  {
    id: "q11",
    question: "How did Somali immigration affect Maine?",
    options: [
      "It had no significant impact due to small numbers",
      "It contributed to downtown economies, farming innovations, and increasing political representation",
      "It led to the state passing restrictive immigration laws",
      "It created a tourism boom centered on Somali culture"
    ],
    correctAnswer: 1,
    explanation: "Somali immigrants had significant impacts on downtown economies in places like Lewiston and Portland, brought more sustainable farming practices to Maine, and gained political representation with figures like Safiya Khalid and Deqa Dhalac.",
    category: "Geographic Focus",
    relatedPlaces: ["Maine", "Lewiston", "Portland"]
  },
  {
    id: "q12",
    question: "What happened to the neighborhood of Roxbury in Boston after WWII?",
    options: [
      "It became an industrial zone",
      "It was demolished for highway construction",
      "It transformed from a Jewish neighborhood to the heart of Black culture in Boston",
      "It became an exclusive suburb for wealthy residents"
    ],
    correctAnswer: 2,
    explanation: "Roxbury was a longstanding Jewish neighborhood before WWII and White Flight; afterward, it became the heart of Black culture in Boston.",
    category: "Geographic Focus",
    relatedPlaces: ["Boston", "Roxbury"],
    relatedConcepts: ["white-flight", "segregation"]
  },
  
  // Connecting Concepts Questions
  {
    id: "q13",
    question: "How did minstrelsy relate to immigrant assimilation in American history?",
    options: [
      "It had no connection to immigration",
      "It was a form of protest against immigration policies",
      "It was a mechanism for white immigrant assimilation into American culture",
      "It celebrated diverse immigrant contributions to American culture"
    ],
    correctAnswer: 2,
    explanation: "Blackface performances served as a mechanism for assimilation by white immigrants, allowing them to distinguish themselves from Black Americans and claim whiteness.",
    category: "Connections",
    relatedConcepts: ["minstrelsy", "assimilation", "blackface"]
  },
  {
    id: "q14",
    question: "How did housing policies like redlining and blockbusting work together to shape American cities?",
    options: [
      "They promoted integration and diversity in neighborhoods",
      "They were tools for urban renewal that benefited all residents",
      "They created and maintained segregated neighborhoods through discrimination and economic exploitation",
      "They had no significant impact on urban development"
    ],
    correctAnswer: 2,
    explanation: "Redlining prevented loans in minority areas, while blockbusting used racial panic to get white homeowners to sell cheaply and then resell at higher prices to minorities, together maintaining segregation and extracting wealth from both communities.",
    category: "Connections",
    relatedConcepts: ["redlining", "blockbusting", "segregation", "housing-discrimination"]
  },
  {
    id: "q15",
    question: "How does the concept of mobility connect to race and urban development in the US?",
    options: [
      "Mobility has not been a significant factor in racial dynamics",
      "Restrictions on mobility (through sundown towns, vagrancy laws, etc.) have been used to control and marginalize non-white populations",
      "Mobility has always been equally accessible to all racial groups",
      "Mobility refers only to economic class movement, not physical movement"
    ],
    correctAnswer: 1,
    explanation: "Freedom of movement has been highly valued in American society but often restricted for certain groups through formal means (like sundown towns, vagrancy laws) and informal means, limiting where people of color could live, work, and travel.",
    category: "Connections",
    relatedConcepts: ["mobility", "sundown-towns", "vagrancy-laws", "segregation"]
  }
];

export const quizCategories = [
  {
    id: "concepts",
    name: "Key Concepts",
    description: "Test your knowledge of important concepts and definitions"
  },
  {
    id: "historical-events",
    name: "Historical Events",
    description: "Questions about significant historical events related to race and place"
  },
  {
    id: "geographic-focus",
    name: "Geographic Case Studies",
    description: "Questions about specific cities and regions discussed in the course"
  },
  {
    id: "connections",
    name: "Making Connections",
    description: "Questions that require connecting different concepts and examples"
  }
];

export default { quizQuestions, quizCategories };

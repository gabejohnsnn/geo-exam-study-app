// src/data/geographicData.js
// Geographic case studies for the Geography/CRES exam

export const geographicData = [
  {
    id: "boston",
    name: "Boston",
    state: "Massachusetts",
    region: "New England",
    description: "Boston presents a complex case of racial history, segregation, and urban change",
    keyFeatures: [
      "Roxbury as the historical heart of Black culture in Boston",
      "1974-1976 Busing Crisis",
      "Gentrification and demographic shifts"
    ],
    historicalEvents: [
      {
        id: "roxbury-history",
        title: "Roxbury Neighborhood History",
        period: "Pre-WWII to Present",
        description: "Originally a Jewish neighborhood before WWII and White Flight; became the heart of Black culture in Boston. In the 1960s, residents fought against the city's attempt to build a 12-lane I-95 Expressway through the district."
      },
      {
        id: "boston-busing-crisis",
        title: "Boston's Busing Crisis",
        period: "1974-1976",
        description: "Federal Judge Arthur Garrity Jr. ruled that Boston's public school system needed desegregation. Phase 1 paired Roxbury (Black) and South Boston (White) neighborhoods, creating significant tensions and protests."
      },
      {
        id: "boston-gentrification",
        title: "Modern Gentrification",
        period: "1990s-Present",
        description: "Mass gentrification has led to extremely expensive housing. Boston Public Schools now have 45,000 students, down from 95,000. New upper-class residents are more likely to use private schools."
      }
    ],
    keyFigures: [
      {
        name: "New Edition",
        description: "R&B group from Roxbury with the 1983 hit 'Candy Girl'. Members Bobby Brown and Bell Biv DeVoe went on to successful solo careers."
      },
      {
        name: "Mark Wahlberg",
        description: "Subject of what Jeff Melnick termed 'Cultural Cleansing' - committed racially motivated attacks in 1986-88 but by 1990 had 'operationalized and monetized' his proximity to Black performers."
      },
      {
        name: "Arthur Garrity Jr.",
        description: "Federal Judge who ordered the desegregation of Boston schools in 1974, leading to the controversial busing program."
      }
    ],
    concepts: ["segregation", "white-flight", "gentrification", "cultural-appropriation", "busing"]
  },
  {
    id: "washington-dc",
    name: "Washington DC",
    state: "District of Columbia",
    region: "Mid-Atlantic",
    description: "The nation's capital with a unique governance structure and significant Black cultural history",
    keyFeatures: [
      "'Chocolate City' - historically majority Black population (71% in 1970)",
      "Limited home rule and representation issues",
      "Chinatown development and displacement",
      "Gentrification changing demographics (Black population below 50% by 2013)"
    ],
    historicalEvents: [
      {
        id: "dc-home-rule",
        title: "Limited Home Rule",
        period: "1973-Present",
        description: "Despite a population larger than Vermont, DC has extremely limited self-governance. In 1973, the federal government granted DC home rule with very limited power. Walter Washington became the first elected African-American mayor of a major US city in 1974."
      },
      {
        id: "dc-chinatown",
        title: "Chinatown Development",
        period: "1920s-Present",
        description: "The original Chinatown was displaced in the 1920s. By 1936, over 800 people lived in the new Chinatown. After the 1968 riots following MLK's assassination, most Chinese-American residents moved to suburbs. In the 1980s, DC built a new convention center named after Walter Washington and dedicated the Chinatown Arch."
      },
      {
        id: "dc-crack-epidemic",
        title: "Crack Epidemic and 'The Plan'",
        period: "1980s-1990s",
        description: "The crack epidemic paralyzed DC during a real estate speculation boom. Mayor Marion Barry was arrested in 1990 in an FBI sting, but later ran again in 1994 and won. Some residents believed in 'The Plan' - a conspiracy theory that the government was trying to eradicate DC's Black population through restrictions on home rule."
      },
      {
        id: "dc-demographic-change",
        title: "Demographic Shifts",
        period: "1970-Present",
        description: "In 1964, DC and Newark, NJ were the only two US cities with majority Black populations. By 2013, DC's Black population had dropped below 50%, slowly returning to a white majority after decades of being majority Black."
      }
    ],
    keyFigures: [
      {
        name: "Walter Washington",
        description: "First elected African-American mayor of a major US city (1974)."
      },
      {
        name: "Marion Barry",
        description: "Controversial DC mayor who pushed back against federal restrictions on DC's governance. Despite his 1990 arrest, he ran for mayor again in 1994 and won."
      },
      {
        name: "Ben and Virginia Ali",
        description: "Founders of Ben's Chili Bowl (est. 1958), which became a cultural institution in DC. The restaurant expanded significantly after Barack Obama's visit following his election."
      }
    ],
    concepts: ["home-rule", "gentrification", "displacement", "demographic-change", "governance"]
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    region: "Mid-Atlantic",
    description: "A city with progressive reputation contradicted by events like the 1985 MOVE bombing",
    keyFeatures: [
      "1985 MOVE bombing of a predominantly Black neighborhood",
      "Contradiction between progressive image and racial history"
    ],
    historicalEvents: [
      {
        id: "move-bombing",
        title: "MOVE Bombing",
        period: "1985",
        description: "Philadelphia police dropped a bomb on the MOVE organization's headquarters, killing 11 people including 5 children, and destroying 61 homes. This contradicted Philadelphia's reputation as a progressive city."
      }
    ],
    concepts: ["police-violence", "racial-tensions", "urban-governance"]
  },
  {
    id: "maine-somalis",
    name: "Lewiston and Portland",
    state: "Maine",
    region: "New England",
    description: "Case study of Somali immigration to America's oldest and whitest state",
    keyFeatures: [
      "Somali refugee resettlement in Maine",
      "Impact on local economy, farming, and politics",
      "Reactions shaped by 2003 Battle of Mogadishu"
    ],
    historicalEvents: [
      {
        id: "somali-immigration",
        title: "Somali Immigration to Maine",
        period: "2000s-Present",
        description: "Maine, the oldest and whitest state in the US, saw significant Somali refugee resettlement. Perceptions were influenced by the deaths of two Mainers in the 2003 Battle of Mogadishu, which depicted Somalis as brutal."
      },
      {
        id: "somali-contributions",
        title: "Somali Community Contributions",
        period: "2000s-Present",
        description: "Somalis have had significant impact on downtown economies, brought more sustainable farming practices to Maine, and increasingly gained political representation with figures like Safiya Khalid (Lewiston City Council) and Deqa Dhalac (South Portland Mayor)."
      }
    ],
    concepts: ["assimilation", "immigration", "resurgent-ethnicity", "place-stratification"]
  }
];

export default geographicData;

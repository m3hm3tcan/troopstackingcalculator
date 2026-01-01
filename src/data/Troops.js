export const guardsmen = {
  Ranged: {
    leadership: 1,
    colors: [
      "radial-gradient(circle,rgba(148, 153, 148, 1) 0%, rgba(66, 65, 65, 1) 100%)",
      "radial-gradient(circle,rgba(106, 173, 102, 1) 0%, rgba(10, 92, 44, 1) 100%",
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Ranged",
    units: [
      "Archer I",
      "Archer II",
      "Archer III",
      "Archer IV",
      "Archer V",
      "Heavy Arbalester VI",
      "Heavy Arbalester VII",
      "Purifier I",
      "Purifier II",
    ],
    strength: 50,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 52 },
      { name: "Flying", strengthPercentage: 67 },
    ],
  },
  Melee: {
    leadership: 1,
    colors: [
      "radial-gradient(circle,rgba(148, 153, 148, 1) 0%, rgba(66, 65, 65, 1) 100%)",
      "radial-gradient(circle,rgba(106, 173, 102, 1) 0%, rgba(10, 92, 44, 1) 100%",
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Melee",
    units: [
      "Spearman I",
      "Spearman II",
      "Spearman III",
      "Spearman IV",
      "Spearman V",
      "Heavy Halberdier VI",
      "Heavy Halberdier VII",
      "Punisher I",
      "Punisher II",
    ],
    strength: 50,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 39 },
      { name: "Beasts", strengthPercentage: 80 },
    ],
  },
  Mounted: {
    leadership: 2,
    colors: [
      "radial-gradient(circle,rgba(148, 153, 148, 1) 0%, rgba(66, 65, 65, 1) 100%)",
      "radial-gradient(circle,rgba(106, 173, 102, 1) 0%, rgba(10, 92, 44, 1) 100%",
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Mounted",
    units: [
      "Rider I",
      "Rider II",
      "Rider III",
      "Rider IV",
      "Rider V",
      "Mounted Knight VI",
      "Mounted Knight VII",
      "Smiter I",
      "Smiter II",
    ],
    strength: 100,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 65 },
      { name: "Fortifications", strengthPercentage: 54 },
    ],
  },
  Flying: {
    leadership: 20,
    colors: [
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Flying",
    units: [
      "Battle Griffin V",
      "Battle Griffin VI",
      "Battle Griffin VII",
      "Corax I",
      "Corax II",
    ],
    strength: 10000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 395 },
      { name: "Fortifications", strengthPercentage: 208 },
    ],
  },
};

export const specialist = {
  Ranged: {
    leadership: 1,
    colors: [
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Ranged",
    units: [
      "Deadshot V",
      "Deadshot VI",
      "Deadshot VII",
      "Legitimist I",
      "Legitimist II",
    ],
    strength: 520,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 122 },
      { name: "Flying", strengthPercentage: 170 },
    ],
  },
  Melee: {
    leadership: 1,
    unitType: "Melee",
    colors: [
      "radial-gradient(circle,rgba(148, 153, 148, 1) 0%, rgba(66, 65, 65, 1) 100%)",
      "radial-gradient(circle,rgba(106, 173, 102, 1) 0%, rgba(10, 92, 44, 1) 100%",
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    units: [
      "Swordsman I",
      "Swordsman II",
      "Swordsman III",
      "Swordsman IV",
      "Swordsman V",
      "Heavy Knight VI",
      "Heavy Knight VII",
      "Duelist I",
      "Duelist II",
    ],
    strength: 50,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 20 },
      { name: "Beasts", strengthPercentage: 40 },
    ],
  },
  Mounted: {
    leadership: 2,
    colors: [
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Mounted",
    units: [
      "Lion Rider V",
      "Lion Rider VI",
      "Lion Rider VII",
      "Whitemane I",
      "Whitemane II",
    ],
    strength: 1050,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 165 },
      { name: "Fortifications", strengthPercentage: 137 },
    ],
  },
  Flying: {
    leadership: 1,
    colors: [
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    ],
    unitType: "Flying",
    units: [
      "Vulture V",
      "Vulture VI",
      "Vulture VII",
      "Royal Lion I",
      "Royal Lion II",
    ],
    strength: 520,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 197 },
      { name: "Fortifications", strengthPercentage: 104 },
    ],
  },
};

export const engineerCorps = {
  SiegeEngine: {
    leadership: 10,
    unitType: "Siege Engine",
    colors: [
      "radial-gradient(circle,rgba(148, 153, 148, 1) 0%, rgba(66, 65, 65, 1) 100%)",
      "radial-gradient(circle,rgba(106, 173, 102, 1) 0%, rgba(10, 92, 44, 1) 100%",
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
      "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
      "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
    ],
    units: [
      "Catapult I",
      "Catapult II",
      "Catapult III",
      "Catapult IV",
      "Catapult V",
      "Siege Ballistae VI",
      "Siege Ballistae VII",
    ],
    strength: 250,
    strengthAgainst: [{ name: "Fortifications", strengthPercentage: 65 }],
  },
};

// "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
// "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
// "radial-gradient(circle,rgba(255, 217, 136, 1) 0%, rgba(127, 53, 7, 1) 62%)",
// "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
// "radial-gradient(circle,rgba(255, 234, 0, 1) 0%, rgba(102, 95, 0, 1) 62%)",
// "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
// "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",

export const MonstersUnits = [
  {
    dominance: 7,
    unitType: "Flying",
    category: "Dragons",
    color:
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
    name: "(III)Emerald Dragon",
    strength: 4500,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 185 },
      { name: "Giants", strengthPercentage: 72 },
    ],
  },
  {
    dominance: 13,
    category: "Dragons",
    unitType: "Ranged",
    color:
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
    name: "(IV)Magic Dragon",
    strength: 15000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 216 },
      { name: "Melee", strengthPercentage: 169 },
    ],
  },
  {
    dominance: 20,
    category: "Dragons",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgb(247, 196, 86) 0%, rgba(127, 53, 7, 1) 62%)",
    name: "(V)Desert Vanquisher",
    strength: 42000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 253 }],
  },
  {
    dominance: 33,
    category: "Dragons",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "(VI)Crystal Dragon",
    strength: 120000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 258 }],
  },
  {
    dominance: 44,
    category: "Dragons",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "(VII)Black Dragon",
    strength: 330000,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 570 }],
  },
  {
    dominance: 53,
    category: "Dragons",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
    name: "(I)Devastator I",
    strength: 650000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 1281 },
      { name: "Giants", strengthPercentage: 667 },
    ],
  },
  {
    dominance: 53,
    category: "Dragons",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "(II)Devastator II",
    strength: 1170000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 1922 },
      { name: "Giants", strengthPercentage: 1000 },
    ],
  },
  {
    dominance: 3,
    category: "Elementals",
    unitType: "Ranged",
    color:
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
    name: "(III)Water Elemental",
    strength: 1900,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 113 },
      { name: "Flying", strengthPercentage: 144 },
    ],
  },
  {
    dominance: 15,
    category: "Elementals",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
    name: "(IV)Ice Phoenix",
    strength: 17000,
    strengthAgainst: [{ name: "Flying", strengthPercentage: 223 }],
  },
  {
    dominance: 21,
    category: "Elementals",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgb(247, 196, 86) 0%, rgba(127, 53, 7, 1) 62%)",
    name: "(V)Flaming Centaur",
    strength: 44000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 415 }],
  },
  {
    dominance: 35,
    category: "Elementals",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "(VI)Ruby Golem",
    strength: 130000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 380 },
      { name: "Melee", strengthPercentage: 486 },
    ],
  },
  {
    dominance: 45,
    category: "Elementals",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "(VII)Wind Lord",
    strength: 310000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 387 }],
  },
  {
    dominance: 54,
    category: "Elementals",
    unitType: "Flying",
    color:
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
    name: "(I)Fire Phoenix I",
    strength: 660000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 701 },
      { name: "Dragons", strengthPercentage: 1247 },
    ],
  },
  {
    dominance: 54,
    category: "Elementals",
    unitType: "Flying",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "(II)Fire Phoenix II",
    strength: 1190000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 1051 },
      { name: "Dragons", strengthPercentage: 1871 },
    ],
  },
  {
    dominance: 8,
    category: "Giants",
    unitType: "Flying",
    color:
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
    name: "(III)Stone Gargoyle",
    strength: 5200,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 185 }],
  },
  {
    dominance: 11,
    category: "Giants",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
    name: "(IV)Many-Armed Guardian",
    strength: 13000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 115 }],
  },
  {
    dominance: 23,
    category: "Giants",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgb(247, 196, 86) 0%, rgba(127, 53, 7, 1) 62%)",
    name: "(V)Ettin",
    strength: 48000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 334 }],
  },
  {
    dominance: 30,
    category: "Giants",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "(VI)Troll Rider",
    strength: 110000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 380 },
      { name: "Fortifications", strengthPercentage: 486 },
    ],
  },
  {
    dominance: 43,
    category: "Giants",
    unitType: "Ranged",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "(VII)Destructive Colossus",
    strength: 290000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 752 },
      { name: "Flying", strengthPercentage: 547 },
    ],
  },
  {
    dominance: 55,
    category: "Giants",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
    name: "(I)Kraken I",
    strength: 670000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 991 },
      { name: "Beasts", strengthPercentage: 957 },
    ],
  },
  {
    dominance: 55,
    category: "Giants",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "(II)Kraken II",
    strength: 1210000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 1486 },
      { name: "Beasts", strengthPercentage: 1435 },
    ],
  },
  {
    dominance: 6,
    category: "Beasts",
    unitType: "Mounted",
    name: "(III)Battle Boar",
    color:
      "radial-gradient(circle,rgba(0, 212, 255, 1) 0%, rgba(39, 39, 171, 1) 88%, rgba(2, 0, 36, 1) 100%",
    strength: 3900,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 144 },
      { name: "Ranged", strengthPercentage: 113 },
    ],
  },
  {
    dominance: 10,
    category: "Beasts",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(191, 171, 237, 1) 0%, rgba(56, 49, 110, 1) 100%)",
    name: "(IV)Gorgon Medusa",
    strength: 12000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 277 },
      { name: "Flying", strengthPercentage: 108 },
    ],
  },
  {
    dominance: 22,
    category: "Beasts",
    unitType: "Flying",
    color:
      "radial-gradient(circle,rgb(247, 196, 86) 0%, rgba(127, 53, 7, 1) 62%)",
    name: "(V)Fearsome Manticore",
    strength: 46000,
    strengthAgainst: [
      { name: "Flying", strengthPercentage: 253 },
      { name: "Giants", strengthPercentage: 324 },
    ],
  },
  {
    dominance: 34,
    category: "Beasts",
    unitType: "Melee",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "(VI)Jungle Destroyer",
    strength: 130000,
    strengthAgainst: [
      { name: "mounted", strengthPercentage: 243 },
      { name: "Dragons", strengthPercentage: 243 },
    ],
  },
  {
    dominance: 41,
    category: "Beasts",
    unitType: "Mounted",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "(VII)Ancient Terror",
    strength: 280000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 752 },
      { name: "Fortifications", strengthPercentage: 547 },
    ],
  },
  {
    dominance: 52,
    category: "Beasts",
    unitType: "Ranged",
    color:
      "radial-gradient(circle,rgba(155, 155, 155, 1) 0%, rgba(79, 130, 140, 1) 100%)",
    name: "(I)Trickster I",
    strength: 640000,
    strengthAgainst: [
      { name: "Flying", strengthPercentage: 940 },
      { name: "Elementals", strengthPercentage: 1008 },
    ],
  },
  {
    dominance: 52,
    category: "Beasts",
    unitType: "Ranged",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "(II)Trickster II",
    strength: 1150000,
    strengthAgainst: [
      { name: "Flying", strengthPercentage: 1410 },
      { name: "Elementals", strengthPercentage: 1512 },
    ],
  },
];

export const MercenaryUnits = [
  {
    authority: 1,
    unitType: "Ranged",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Trailseeker VI",
    strength: 1890,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 198 },
      { name: "Flying", strengthPercentage: 254 },
    ],
  },
  {
    authority: 1,
    unitType: "Ranged",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Arbalester VI",
    strength: 1900,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 394 },
      { name: "Flying", strengthPercentage: 509 },
    ],
  },
  {
    authority: 1,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Legionary VI",
    strength: 1900,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 295 },
      { name: "Beasts", strengthPercentage: 608 },
    ],
  },
  {
    authority: 1,
    unitType: "EpicMonsterHunter",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Epic Monster Hunter VI",
    strength: 2030,
    strengthAgainst: [{ name: "Epic Monsters", strengthPercentage: 609 }],
  },
  {
    authority: 1,
    unitType: "Mounted",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Chariot VI",
    strength: 3800,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 493 },
      { name: "Siege Engine", strengthPercentage: 410 },
    ],
  },
  {
    authority: 10,
    unitType: "Flying",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Shedu VI",
    strength: 18900,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 296 },
      { name: "Fortifications", strengthPercentage: 156 },
    ],
  },
  {
    authority: 30,
    unitType: "Mounted",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Death Chariot",
    strength: 57000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 60 }],
  },
  {
    authority: 37,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Bone Golem",
    strength: 70000,
    strengthAgainst: [{ name: "Dragons", strengthPercentage: 40 }],
  },
  {
    authority: 39,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Ent",
    strength: 73000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 55 },
      { name: "Dragons", strengthPercentage: 45 },
    ],
  },
  {
    authority: 57,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Cursed Dendroid",
    strength: 110000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 65 },
      { name: "Dragons", strengthPercentage: 50 },
    ],
  },
  {
    authority: 68,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Abomination",
    strength: 130000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 60 },
      { name: "Elementals", strengthPercentage: 50 },
    ],
  },
  {
    authority: 95,
    unitType: "Melee",
    category: "Mercenary VI",
    color:
      "radial-gradient(circle,rgba(235, 115, 115, 1) 0%, rgba(84, 0, 0, 1) 62%)",
    name: "Archdemon",
    strength: 180000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 60 },
      { name: "Beasts", strengthPercentage: 40 },
    ],
  },

  // LVL VII
  {
    authority: 1,
    unitType: "Ranged",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Arbalester VII",
    strength: 3400,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 570 },
      { name: "Flying", strengthPercentage: 729 },
    ],
  },
  {
    authority: 1,
    unitType: "Ranged",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Trailseeker VII",
    strength: 3400,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 286 },
      { name: "Flying", strengthPercentage: 364 },
    ],
  },
  {
    authority: 1,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Legionary VII",
    strength: 3400,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 295 },
      { name: "Beasts", strengthPercentage: 608 },
    ],
  },
  {
    authority: 1,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Knight VI",
    strength: 3400,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 752 },
      { name: "Beasts", strengthPercentage: 911 },
    ],
  },
  {
    authority: 1,
    unitType: "EpicMonsterHunter",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Epic Monster Hunter VII",
    strength: 3740,
    strengthAgainst: [{ name: "Epic Monsters", strengthPercentage: 934 }],
  },
  {
    authority: 2,
    unitType: "Mounted",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Rhino Rider",
    strength: 6800,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 377 },
      { name: "Siege Engine", strengthPercentage: 274 },
    ],
  },

  {
    authority: 1,
    unitType: "Mounted",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Chariot VII",
    strength: 6800,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 752 },
      { name: "Siege Engine", strengthPercentage: 547 },
    ],
  },
  {
    authority: 10,
    unitType: "Siege Engine",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Palintone",
    strength: 17000,
    strengthAgainst: [{ name: "Fortifications", strengthPercentage: 740 }],
  },
  {
    authority: 33,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Jungle King",
    strength: 110000,
    strengthAgainst: [
      { name: "Elementals", strengthPercentage: 911 },
      { name: "Mounted", strengthPercentage: 387 },
    ],
  },
  {
    authority: 40,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Sphynx",
    strength: 136000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 934 },
      { name: "Fortifications", strengthPercentage: 365 },
    ],
  },

  {
    authority: 40,
    unitType: "Flying",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Shedu VII",
    strength: 136000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 377 },
      { name: "Fortifications", strengthPercentage: 274 },
    ],
  },

  {
    authority: 40,
    unitType: "Mounted",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Sea Lord",
    strength: 140000,
    strengthAgainst: [
      { name: "Dragons", strengthPercentage: 547 },
      { name: "Ranged", strengthPercentage: 752 },
    ],
  },
  {
    authority: 50,
    unitType: "Flying",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Golden Dragon",
    strength: 170000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 934 },
      { name: "Giants", strengthPercentage: 365 },
    ],
  },
  {
    authority: 45,
    unitType: "Flying",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Lightning Lord",
    strength: 153000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 934 },
      { name: "Beasts", strengthPercentage: 365 },
    ],
  },
  {
    authority: 164,
    unitType: "Ranged",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Overload",
    strength: 200000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 60 },
      { name: "Beasts", strengthPercentage: 50 },
    ],
  },

  {
    authority: 164,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Life Dragon",
    strength: 240000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 60 },
      { name: "Giants", strengthPercentage: 50 },
    ],
  },
  {
    authority: 128,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Sandworm",
    strength: 430000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 75 },
      { name: "Dragons", strengthPercentage: 50 },
    ],
  },
  {
    authority: 164,
    unitType: "Melee",
    category: "Mercenary VII",
    color:
      "radial-gradient(circle,rgb(189, 180, 80) 0%, rgba(102, 95, 0, 1) 62%)",
    name: "Fire Lord",
    strength: 560000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 80 },
      { name: "Dragons", strengthPercentage: 45 },
    ],
  },

  //level II
  {
    authority: 1,
    unitType: "Melee",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Slavic Warrior",
    strength: 11000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 1000 },
      { name: "Beasts", strengthPercentage: 2050 },
    ],
  },
  {
    authority: 1,
    unitType: "Ranged",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Highlander",
    strength: 11000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 1333 },
      { name: "Flying", strengthPercentage: 1717 },
    ],
  },
  {
    authority: 1,
    unitType: "Melee",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Scarface",
    strength: 11000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 500 }],
  },
  {
    authority: 2,
    unitType: "Mounted",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Quicksand",
    strength: 22000,
    strengthAgainst: [
      { name: "Ranged", strengthPercentage: 1667 },
      { name: "Siege Engine", strengthPercentage: 1384 },
    ],
  },
  {
    authority: 20,
    unitType: "Flying",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Warregal",
    strength: 220000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 1999 },
      { name: "Fortifications", strengthPercentage: 1051 },
    ],
  },
  {
    authority: 20,
    unitType: "Flying",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Jago",
    strength: 220000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 1000 },
      { name: "Fortifications", strengthPercentage: 525 },
    ],
  },
  {
    authority: 38,
    unitType: "Melee",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Demonic Salamander",
    strength: 410000,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 65 }],
  },
  {
    authority: 1,
    unitType: "EpicMonsterHunter",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Superior Epic Monster Hunter",
    strength: 410000,
    strengthAgainst: [{ name: "Epic Monsters", strengthPercentage: 1000 }],
  },
  {
    authority: 20,
    unitType: "Ranged",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Eternal Cannoneer",
    strength: 440000,
    strengthAgainst: [{ name: "Flying", strengthPercentage: 65 }],
  },
  {
    authority: 43,
    unitType: "Mounted",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Warden",
    strength: 470000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 70 }],
  },
  {
    authority: 63,
    unitType: "Flying",
    category: "Mercenary II",
    color:
      "radial-gradient(circle,rgba(117, 140, 107, 1) 0%, rgba(30, 94, 0, 1) 100%)",
    name: "Wyvern",
    strength: 690000,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 75 }],
  },
];

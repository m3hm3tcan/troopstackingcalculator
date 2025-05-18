// Example data (shortened for clarity, add your full data here)
export const guardsmen = {
  Ranged: {
    leadership: 1,
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
      { name: "Beast", strengthPercentage: 80 },
    ],
  },
  Mounted: {
    leadership: 2,
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
      { name: "Siege Engines", strengthPercentage: 54 },
    ],
  },
  Flying: {
    leadership: 20,
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
      { name: "Fortification", strengthPercentage: 208 },
    ],
  },
};

export const specialist = {
  Ranged: {
    leadership: 1,
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
      { name: "Beast", strengthPercentage: 40 },
    ],
  },
  Mounted: {
    leadership: 2,
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
      { name: "Siege Engines", strengthPercentage: 137 },
    ],
  },
  Flying: {
    leadership: 1,
    unitType: "Flying",
    units: ["Vulture V", "Vulture VI", "Vulture VII"],
    strength: 520,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 197 },
      { name: "Fortification", strengthPercentage: 104 },
    ],
  },
};

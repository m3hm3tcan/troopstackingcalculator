export const Enemies = {
  Ghoul: {
    name: "Ghoul",
    strength: 28,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 15 }],
  },
  DeathHoundRider: {
    name: "DeathHound Rider",
    strength: 1100,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 40 }],
  },
  Banshee: {
    name: "Banshee",
    strength: 100,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 45 }],
  },
  Dwarf: {
    name: "Dwarf",
    strength: 28,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 10 }],
  },
  Centaur: {
    name: "Centaur",
    strength: 2600,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 50 }],
  },
  ElvenArcher: {
    name: "Elven Archer",
    strength: 100,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 35 }],
  },
  Skeleton: {
    name: "Skeleton",
    strength: 56,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 15 }],
  },
  DeathRider: {
    name: "Death Rider",
    strength: 3200,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 50 }],
  },
  WitchDoctor: {
    name: "Witch Doctor",
    strength: 150,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 25 }],
  },
  Goblin: {
    name: "Goblin",
    strength: 28,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 10 }],
  },
  OgreShaman: {
    name: "Ogre Shaman",
    strength: 3200,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 60 }],
  },
  WolfRider: {
    name: "Wolf Rider",
    strength: 150,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 60 }],
  },
  Fiend: {
    name: "Fiend",
    strength: 28,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 15 }],
  },
  Overseer: {
    name: "Overseer",
    strength: 6500,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 70 }],
  },
  Magog: {
    name: "Magog",
    strength: 50,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 30 }],
  },
  DarkRider: {
    name: "Dark Rider",
    strength: 5800,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 50 }],
  },
  PegasusRider: {
    name: "Pegasus Rider",
    strength: 8200,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 60 }],
  },
  Druid: {
    name: "Druid",
    strength: 900,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 25 }],
  },
  Vampire: {
    name: "Vampire",
    strength: 9900,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 60 }],
  },
  Werewolf: {
    name: "Werewolf",
    strength: 360,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 45 }],
  },
  StormCrow: {
    name: "Storm Crow",
    strength: 13000,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 55 }],
  },
  AxeThrower: {
    name: "Axe Thrower",
    strength: 360,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 45 }],
  },
  Cerberus: {
    name: "Cerberus",
    strength: 17000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 65 }],
  },
  HornedDemon: {
    name: "Horned Demon",
    strength: 720,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 40 }],
  },
  JaguarRider: {
    name: "Jaguar Rider",
    strength: 270,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 30 }],
  },
  Necromancer: {
    name: "Necromancer",
    strength: 720,
    strengthAgainst: [{ name: "Melee", strengthPercentage: 50 }],
  },
};

// Example EnemySquads data simplified (replace with your full data)
export const EnemySquads = [
  {
    level: 1,
    category: "Common",
    name: "Undead Squad",
    squad: [{ count: 90, monster: Enemies.Ghoul }],
  },
  {
    level: 1,
    category: "Rare",
    name: "Undead Squad",
    squad: [
      { count: 2, name: Enemies.DeathHoundRider },
      { count: 16, name: Enemies.Banshee },
      { count: 56, name: Enemies.Ghoul },
    ],
  },
  {
    level: 2,
    category: "Common",
    name: "Elf",
    squad: [{ count: 140, monster: Enemies.Dwarf }],
  },
  {
    level: 2,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 3, name: Enemies.Centaur },
      { count: 7, name: Enemies.ElvenArcher },
      { count: 140, name: Enemies.Dwarf },
    ],
  },
  {
    level: 3,
    category: "Common",
    name: "Cursed",
    squad: [{ count: 110, monster: Enemies.Skeleton }],
  },
  {
    level: 3,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 2, name: Enemies.DeathRider },
      { count: 25, name: Enemies.WitchDoctor },
      { count: 23, name: Enemies.Skeleton },
    ],
  },
  {
    level: 4,
    category: "Common",
    name: "Barbarian",
    squad: [{ count: 330, monster: Enemies.Goblin }],
  },
  {
    level: 4,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 4, name: Enemies.OgreShaman },
      { count: 39, name: Enemies.WolfRider },
      { count: 70, name: Enemies.Goblin },
    ],
  },
  {
    level: 5,
    category: "Common",
    name: "Inferno",
    squad: [{ count: 500, monster: Enemies.Fiend }],
  },
  {
    level: 5,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 3, name: Enemies.Overseer },
      { count: 180, name: Enemies.Magog },
      { count: 110, name: Enemies.Fiend },
    ],
  },
  {
    level: 6,
    category: "Common",
    name: "Undead",
    squad: [{ count: 210, monster: Enemies.Banshee }],
  },
  {
    level: 6,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 5, name: Enemies.DarkRider },
      { count: 13, name: Enemies.DeathHoundRider },
      { count: 48, name: Enemies.Banshee },
    ],
  },
  {
    level: 7,
    category: "Common",
    name: "Elf",
    squad: [{ count: 330, monster: Enemies.ElvenArcher }],
  },
  {
    level: 7,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 4, name: Enemies.PegasusRider },
      { count: 25, name: Enemies.Druid },
      { count: 220, name: Enemies.ElvenArcher },
    ],
  },
  {
    level: 8,
    category: "Common",
    name: "Cursed",
    squad: [{ count: 330, monster: Enemies.WitchDoctor }],
  },
  {
    level: 8,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 5, name: Enemies.Vampire },
      { count: 97, name: Enemies.Werewolf },
      { count: 230, name: Enemies.WitchDoctor },
    ],
  },
  {
    level: 9,
    category: "Common",
    name: "Barbarian",
    squad: [{ count: 510, monster: Enemies.WolfRider }],
  },
  {
    level: 9,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 6, name: Enemies.StormCrow },
      { count: 150, name: Enemies.AxeThrower },
      { count: 2150, name: Enemies.WolfRider },
    ],
  },
  {
    level: 10,
    category: "Common",
    name: "Inferno",
    squad: [{ count: 2300, monster: Enemies.Magog }],
  },
  {
    level: 10,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 7, name: Enemies.Cerberus },
      { count: 120, name: Enemies.HornedDemon },
      { count: 1700, name: Enemies.Magog },
    ],
  },
  {
    level: 11,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 1200, monster: Enemies.ElvenArcher },
      { count: 1900, monster: Enemies.Dwarf },
    ],
  },
  {
    level: 11,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 21, name: Enemies.PegasusRider },
      { count: 1300, name: Enemies.ElvenArcher },
      { count: 4500, name: Enemies.Dwarf },
    ],
  },
  {
    level: 12,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 1200, monster: Enemies.WolfRider },
      { count: 2800, monster: Enemies.Goblin },
    ],
  },
  {
    level: 12,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 550, monster: Enemies.JaguarRider },
      { count: 110, monster: Enemies.Skeleton },
    ],
  },
  {
    level: 12,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 19, name: Enemies.StormCrow },
      { count: 1300, name: Enemies.WolfRider },
      { count: 6800, name: Enemies.Goblin },
    ],
  },
  {
    level: 12,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 21, name: Enemies.Vampire },
      { count: 1000, name: Enemies.WitchDoctor },
      { count: 2800, name: Enemies.Skeleton },
    ],
  },
  {
    level: 13,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 4500, monster: Enemies.Magog },
      { count: 3400, monster: Enemies.Fiend },
    ],
  },
  {
    level: 13,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 18, name: Enemies.Cerberus },
      { count: 4600, name: Enemies.Magog },
      { count: 8300, name: Enemies.Fiend },
    ],
  },

  {
    level: 14,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 1500, monster: Enemies.JaguarRider },
      { count: 2000, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 14,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 370, monster: Enemies.Druid },
      { count: 510, monster: Enemies.Dwarf },
    ],
  },
  {
    level: 14,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 57, name: Enemies.Vampire },
      { count: 1600, name: Enemies.JaguarRider },
      { count: 7600, name: Enemies.Skeleton },
    ],
  },
  {
    level: 14,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 56, name: Enemies.PegasusRider },
      { count: 380, name: Enemies.Druid },
      { count: 12000, name: Enemies.Dwarf },
    ],
  },

  {
    level: 15,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 850, monster: Enemies.HornedDemon },
      { count: 9400, monster: Enemies.Fiend },
    ],
  },
  {
    level: 15,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 1400, monster: Enemies.AxeThrower },
      { count: 7700, monster: Enemies.Goblin },
    ],
  },
  {
    level: 15,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 50, name: Enemies.Cerberus },
      { count: 880, name: Enemies.HornedDemon },
      { count: 53000, name: Enemies.Fiend },
    ],
  },
  {
    level: 15,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 53, name: Enemies.PegasusRider },
      { count: 1400, name: Enemies.AxeThrower },
      { count: 19000, name: Enemies.Goblin },
    ],
  },

  {
    level: 15,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 850, monster: Enemies.Druid },
      { count: 3300, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 15,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 620, monster: Enemies.DeathHoundRider },
      { count: 2900, monster: Enemies.Banshee },
    ],
  },
  {
    level: 15,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 160, name: Enemies.DarkRider },
      { count: 990, name: Enemies.Necromancer },
      { count: 7100, name: Enemies.Banshee },
    ],
  },
  {
    level: 15,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 130, name: Enemies.PegasusRider },
      { count: 890, name: Enemies.Druid },
      { count: 8000, name: Enemies.ElvenArcher },
    ],
  },
  {
    level: 15,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 120, name: Enemies.Vampire },
      { count: 3300, name: Enemies.JaguarRider },
      { count: 6000, name: Enemies.WitchDoctor },
    ],
  },
];
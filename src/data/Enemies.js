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
  FirehorseRider: {
    name: "Firehorse Rider",
    strength: 4100,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 50 }],
  },
  Headsman: {
    name: "Headsman",
    strength: 2300,
    strengthAgainst: [{ name: "Mounted", strengthPercentage: 45 }],
  },
  Ifrit: {
    name: "Ifrit",
    strength: 44000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 70 },
      { name: "Dragons", strengthPercentage: 40 },
    ],
  },
  GiantZombie: {
    name: "Giant Zombie",
    strength: 33000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 70 },
      { name: "Beast", strengthPercentage: 45 },
    ],
  },
  ScorpionRider: {
    name: "Scorpion Rider",
    strength: 37000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 40 }],
  },
  Bear: {
    name: "Bear",
    strength: 22000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 70 },
      { name: "Elementals", strengthPercentage: 50 },
    ],
  },
  Gargoyle: {
    name: "Gargoyle",
    strength: 19000,
    strengthAgainst: [
      { name: "Mounted", strengthPercentage: 70 },
      { name: "Elementals", strengthPercentage: 45 },
    ],
  },
  FirewormRider: {
    name: "Fireworm Rider",
    strength: 50000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 55 }],
  },
  BullRider: {
    name: "Bull Rider",
    strength: 29000,
    strengthAgainst: [{ name: "Ranged", strengthPercentage: 55 }],
  },
  Cyclops: {
    name: "Cyclops",
    strength: 45000,
    strengthAgainst: [
      { name: "Melee", strengthPercentage: 45 },
      { name: "Fortifications", strengthPercentage: 100 },
      { name: "Beast", strengthPercentage: 40 },
    ],
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
    level: 16,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 850, monster: Enemies.Druid },
      { count: 3300, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 16,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 620, monster: Enemies.DeathHoundRider },
      { count: 2900, monster: Enemies.Banshee },
    ],
  },
  {
    level: 16,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 160, name: Enemies.DarkRider },
      { count: 990, name: Enemies.Necromancer },
      { count: 7100, name: Enemies.Banshee },
    ],
  },
  {
    level: 16,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 130, name: Enemies.PegasusRider },
      { count: 890, name: Enemies.Druid },
      { count: 8000, name: Enemies.ElvenArcher },
    ],
  },
  {
    level: 16,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 120, name: Enemies.Vampire },
      { count: 3300, name: Enemies.JaguarRider },
      { count: 6000, name: Enemies.WitchDoctor },
    ],
  },

  {
    level: 17,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 2700, monster: Enemies.AxeThrower },
      { count: 2700, monster: Enemies.WolfRider },
    ],
  },
  {
    level: 17,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 260, monster: Enemies.FirehorseRider },
      { count: 640, monster: Enemies.HornedDemon },
    ],
  },
  {
    level: 17,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 1100, monster: Enemies.DeathHoundRider },
      { count: 710, monster: Enemies.Necromancer },
    ],
  },
  {
    level: 18,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 4200, monster: Enemies.Werewolf },
      { count: 2400, monster: Enemies.JaguarRider },
    ],
  },
  {
    level: 18,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 4600, monster: Enemies.AxeThrower },
      { count: 26000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 18,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 1500, monster: Enemies.Druid },
      { count: 20000, monster: Enemies.Dwarf },
    ],
  },
  {
    level: 19,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 2500, monster: Enemies.Necromancer },
      { count: 1100, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 19,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 640, monster: Enemies.Centaur },
      { count: 17000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 19,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 2600, monster: Enemies.HornedDemon },
      { count: 29000, monster: Enemies.Fiend },
    ],
  },
  {
    level: 20,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 4100, monster: Enemies.JaguarRider },
      { count: 9700, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 20,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 8100, monster: Enemies.AxeThrower },
      { count: 45000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 20,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 4500, monster: Enemies.HornedDemon },
      { count: 28000, monster: Enemies.Magog },
    ],
  },
  {
    level: 21,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 16000, monster: Enemies.JaguarRider },
      { count: 12000, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 21,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 3200, monster: Enemies.DeathHoundRider },
      { count: 15000, monster: Enemies.Banshee },
    ],
  },
  {
    level: 21,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 7200, monster: Enemies.HornedDemon },
      { count: 44000, monster: Enemies.Magog },
    ],
  },
  {
    level: 21,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 13000, monster: Enemies.AxeThrower },
      { count: 12000, monster: Enemies.WolfRider },
    ],
  },
  {
    level: 21,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 4400, monster: Enemies.Druid },
      { count: 17000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 22,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 25000, monster: Enemies.JaguarRider },
      { count: 8100, monster: Enemies.Werewolf },
    ],
  },
  {
    level: 22,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 3700, monster: Enemies.DeathHoundRider },
      { count: 140000, monster: Enemies.Ghoul },
    ],
  },
  {
    level: 22,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 11000, monster: Enemies.HornedDemon },
      { count: 120000, monster: Enemies.Fiend },
    ],
  },
  {
    level: 22,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 21000, monster: Enemies.AxeThrower },
      { count: 110000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 22,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 1900, monster: Enemies.Centaur },
      { count: 4400, monster: Enemies.Druid },
    ],
  },
  {
    level: 23,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 30000, monster: Enemies.Werewolf },
      { count: 17000, monster: Enemies.JaguarRider },
    ],
  },
  {
    level: 23,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 8100, monster: Enemies.DeathHoundRider },
      { count: 140000, monster: Enemies.Ghoul },
    ],
  },
  {
    level: 23,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 3100, monster: Enemies.FirehorseRider },
      { count: 110000, monster: Enemies.Magog },
    ],
  },
  {
    level: 23,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 33000, monster: Enemies.AxeThrower },
      { count: 34000, monster: Enemies.WolfRider },
    ],
  },
  {
    level: 23,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 3800, monster: Enemies.Centaur },
      { count: 42000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 24,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 5300, monster: Enemies.DeathRider },
      { count: 130000, monster: Enemies.Skeleton },
    ],
  },
  {
    level: 24,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 14000, monster: Enemies.Necromancer },
      { count: 9200, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 24,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 5000, monster: Enemies.FirehorseRider },
      { count: 310000, monster: Enemies.Fiend },
    ],
  },
  {
    level: 24,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 5800, monster: Enemies.OgreShaman },
      { count: 290000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 24,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 3800, monster: Enemies.Centaur },
      { count: 42000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 25,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 8400, monster: Enemies.DeathRider },
      { count: 77000, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 25,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 9700, monster: Enemies.Headsman },
      { count: 96000, monster: Enemies.Banshee },
    ],
  },
  {
    level: 25,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 5000, monster: Enemies.Overseer },
      { count: 280000, monster: Enemies.Magog },
    ],
  },
  {
    level: 25,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 9200, monster: Enemies.OgreShaman },
      { count: 35000, monster: Enemies.AxeThrower },
    ],
  },
  {
    level: 25,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 9400, monster: Enemies.Centaur },
      { count: 110000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 26,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 13000, monster: Enemies.DeathRider },
      { count: 49000, monster: Enemies.Werewolf },
    ],
  },
  {
    level: 26,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 15000, monster: Enemies.Headsman },
      { count: 14000, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 26,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 8300, monster: Enemies.FirehorseRider },
      { count: 5300, monster: Enemies.Overseer },
    ],
  },
  {
    level: 26,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 14000, monster: Enemies.OgreShaman },
      { count: 53000, monster: Enemies.AxeThrower },
    ],
  },
  {
    level: 26,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 15000, monster: Enemies.Centaur },
      { count: 18000, monster: Enemies.Druid },
    ],
  },
  {
    level: 27,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 19000, monster: Enemies.DeathRider },
      { count: 460000, monster: Enemies.Skeleton },
    ],
  },
  {
    level: 27,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 51000, monster: Enemies.Headsman },
      { count: 34000, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 27,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 11000, monster: Enemies.Overseer },
      { count: 7400, monster: Enemies.FirehorseRider },
    ],
  },
  {
    level: 27,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 20000, monster: Enemies.OgreShaman },
      { count: 1000000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 27,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 22000, monster: Enemies.Centaur },
      { count: 860000, monster: Enemies.Dwarf },
    ],
  },
  {
    level: 28,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 28000, monster: Enemies.DeathRider },
      { count: 260000, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 28,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 33000, monster: Enemies.Headsman },
      { count: 330000, monster: Enemies.Banshee },
    ],
  },
  {
    level: 28,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 26000, monster: Enemies.FirehorseRider },
      { count: 900000, monster: Enemies.Magog },
    ],
  },
  {
    level: 28,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 30000, monster: Enemies.OgreShaman },
      { count: 1500000, monster: Enemies.Goblin },
    ],
  },
  {
    level: 28,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 32000, monster: Enemies.Centaur },
      { count: 350000, monster: Enemies.ElvenArcher },
    ],
  },
  {
    level: 29,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 41000, monster: Enemies.DeathRider },
      { count: 160000, monster: Enemies.Werewolf },
    ],
  },
  {
    level: 29,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 49000, monster: Enemies.Headsman },
      { count: 44000, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 29,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 24000, monster: Enemies.Overseer },
      { count: 92000, monster: Enemies.HornedDemon },
    ],
  },
  {
    level: 29,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 45000, monster: Enemies.OgreShaman },
      { count: 170000, monster: Enemies.AxeThrower },
    ],
  },
  {
    level: 29,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 47000, monster: Enemies.Centaur },
      { count: 58000, monster: Enemies.Druid },
    ],
  },

  {
    level: 30,
    category: "Common",
    name: "Cursed",
    squad: [
      { count: 61000, monster: Enemies.DeathRider },
      { count: 560000, monster: Enemies.WitchDoctor },
    ],
  },
  {
    level: 30,
    category: "Common",
    name: "Undead",
    squad: [
      { count: 73000, monster: Enemies.Headsman },
      { count: 65000, monster: Enemies.DeathHoundRider },
    ],
  },
  {
    level: 30,
    category: "Common",
    name: "Inferno",
    squad: [
      { count: 56000, monster: Enemies.FirehorseRider },
      { count: 3500000, monster: Enemies.Fiend },
    ],
  },
  {
    level: 30,
    category: "Common",
    name: "Barbarian",
    squad: [
      { count: 66000, monster: Enemies.OgreShaman },
      { count: 250000, monster: Enemies.AxeThrower },
    ],
  },
  {
    level: 30,
    category: "Common",
    name: "Elf",
    squad: [
      { count: 70000, monster: Enemies.Centaur },
      { count: 780000, monster: Enemies.ElvenArcher },
    ],
  },

  // RARE Monster Squads //////////////////////////////////////////////

  {
    level: 17,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 290, name: Enemies.DarkRider },
      { count: 13000, name: Enemies.Banshee },
      { count: 45000, name: Enemies.Ghoul },
    ],
  },
  {
    level: 17,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 100, name: Enemies.StormCrow },
      { count: 2800, name: Enemies.AxeThrower },
      { count: 6700, name: Enemies.WolfRider },
    ],
  },
  {
    level: 17,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 89, name: Enemies.Vampire },
      { count: 1600, name: Enemies.HornedDemon },
      { count: 23000, name: Enemies.Magog },
    ],
  },
  {
    level: 18,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 220, name: Enemies.Vampire },
      { count: 11000, name: Enemies.WitchDoctor },
      { count: 29000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 18,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 230, name: Enemies.PegasusRider },
      { count: 14000, name: Enemies.ElvenArcher },
      { count: 51000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 18,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 180, name: Enemies.StormCrow },
      { count: 12000, name: Enemies.WolfRider },
      { count: 64000, name: Enemies.Goblin },
    ],
  },
  {
    level: 19,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 160, name: Enemies.Vampire },
      { count: 490, name: Enemies.FirehorseRider },
      { count: 17000, name: Enemies.Fiend },
    ],
  },
  {
    level: 19,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 520, name: Enemies.DarkRider },
      { count: 3100, name: Enemies.Necromancer },
      { count: 81000, name: Enemies.Ghoul },
    ],
  },
  {
    level: 19,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 410, name: Enemies.PegasusRider },
      { count: 2800, name: Enemies.Druid },
      { count: 91000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 20,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 280, name: Enemies.Vampire },
      { count: 800, name: Enemies.FirehorseRider },
      { count: 72000, name: Enemies.Magog },
    ],
  },
  {
    level: 20,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 380, name: Enemies.Vampire },
      { count: 7900, name: Enemies.Werewolf },
      { count: 51000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 20,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 330, name: Enemies.StormCrow },
      { count: 8900, name: Enemies.AxeThrower },
      { count: 110000, name: Enemies.Goblin },
    ],
  },

  {
    level: 21,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 440, name: Enemies.Vampire },
      { count: 860, name: Enemies.Overseer },
      { count: 110000, name: Enemies.Magog },
    ],
  },
  {
    level: 21,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 630, name: Enemies.Vampire },
      { count: 17000, name: Enemies.JaguarRider },
      { count: 31000, name: Enemies.WitchDoctor },
    ],
  },
  {
    level: 21,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 520, name: Enemies.StormCrow },
      { count: 14000, name: Enemies.AxeThrower },
      { count: 34000, name: Enemies.WolfRider },
    ],
  },
  {
    level: 21,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 700, name: Enemies.PegasusRider },
      { count: 4800, name: Enemies.Druid },
      { count: 43000, name: Enemies.ElvenArcher },
    ],
  },
  {
    level: 21,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 900, name: Enemies.DarkRider },
      { count: 5500, name: Enemies.Necromancer },
      { count: 39000, name: Enemies.Banshee },
    ],
  },

  {
    level: 22,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 680, name: Enemies.Vampire },
      { count: 170000, name: Enemies.Magog },
      { count: 310000, name: Enemies.Fiend },
    ],
  },
  {
    level: 22,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 980, name: Enemies.Vampire },
      { count: 48000, name: Enemies.WitchDoctor },
      { count: 130000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 22,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 810, name: Enemies.StormCrow },
      { count: 53000, name: Enemies.WolfRider },
      { count: 280000, name: Enemies.Goblin },
    ],
  },
  {
    level: 22,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 1100, name: Enemies.PegasusRider },
      { count: 66000, name: Enemies.ElvenArcher },
      { count: 240000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 22,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 1400, name: Enemies.DarkRider },
      { count: 61000, name: Enemies.Banshee },
      { count: 220000, name: Enemies.Ghoul },
    ],
  },
  {
    level: 23,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 1000, name: Enemies.Vampire },
      { count: 19000, name: Enemies.HornedDemon },
      { count: 480000, name: Enemies.Fiend },
    ],
  },
  {
    level: 23,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 1500, name: Enemies.Vampire },
      { count: 31000, name: Enemies.Werewolf },
      { count: 200000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 23,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 1300, name: Enemies.StormCrow },
      { count: 34000, name: Enemies.AxeThrower },
      { count: 440000, name: Enemies.Goblin },
    ],
  },
  {
    level: 23,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 1700, name: Enemies.PegasusRider },
      { count: 11000, name: Enemies.Druid },
      { count: 370000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 23,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 2200, name: Enemies.DarkRider },
      { count: 13000, name: Enemies.Necromancer },
      { count: 340000, name: Enemies.Ghoul },
    ],
  },
  {
    level: 24,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 1600, name: Enemies.Vampire },
      { count: 29000, name: Enemies.HornedDemon },
      { count: 410000, name: Enemies.Magog },
    ],
  },
  {
    level: 24,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 2300, name: Enemies.Vampire },
      { count: 64000, name: Enemies.JaguarRider },
      { count: 48000, name: Enemies.Werewolf },
    ],
  },
  {
    level: 24,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 1900, name: Enemies.StormCrow },
      { count: 53000, name: Enemies.AxeThrower },
      { count: 130000, name: Enemies.WolfRider },
    ],
  },
  {
    level: 24,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 2600, name: Enemies.PegasusRider },
      { count: 18000, name: Enemies.Druid },
      { count: 160000, name: Enemies.ElvenArcher },
    ],
  },
  {
    level: 24,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 3400, name: Enemies.DarkRider },
      { count: 20000, name: Enemies.Necromancer },
      { count: 150000, name: Enemies.Banshee },
    ],
  },
  {
    level: 25,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 970, name: Enemies.Ifrit },
      { count: 640000, name: Enemies.Magog },
      { count: 1100000, name: Enemies.Fiend },
    ],
  },
  {
    level: 25,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 1100, name: Enemies.GiantZombie },
      { count: 180000, name: Enemies.WitchDoctor },
      { count: 480000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 25,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 1100, name: Enemies.ScorpionRider },
      { count: 200000, name: Enemies.WolfRider },
      { count: 1000000, name: Enemies.Goblin },
    ],
  },
  {
    level: 25,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 1500, name: Enemies.Bear },
      { count: 250000, name: Enemies.ElvenArcher },
      { count: 880000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 25,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 1600, name: Enemies.Gargoyle },
      { count: 230000, name: Enemies.Banshee },
      { count: 810000, name: Enemies.Ghoul },
    ],
  },

  {
    level: 26,
    category: "Rare",
    name: "Inferno",
    squad: [
      { count: 1300, name: Enemies.FirewormRider },
      { count: 66000, name: Enemies.HornedDemon },
      { count: 1700000, name: Enemies.Fiend },
    ],
  },
  {
    level: 26,
    category: "Rare",
    name: "Cursed",
    squad: [
      { count: 1900, name: Enemies.BullRider },
      { count: 110000, name: Enemies.Werewolf },
      { count: 720000, name: Enemies.Skeleton },
    ],
  },
  {
    level: 26,
    category: "Rare",
    name: "Barbarian",
    squad: [
      { count: 1300, name: Enemies.Cyclops },
      { count: 120000, name: Enemies.AxeThrower },
      { count: 1600000, name: Enemies.Goblin },
    ],
  },
  {
    level: 26,
    category: "Rare",
    name: "Elf",
    squad: [
      { count: 2300, name: Enemies.Bear },
      { count: 42000, name: Enemies.Druid },
      { count: 1300000, name: Enemies.Dwarf },
    ],
  },
  {
    level: 26,
    category: "Rare",
    name: "Undead",
    squad: [
      { count: 2400, name: Enemies.Gargoyle },
      { count: 32000, name: Enemies.DeathHoundRider },
      { count: 1200000, name: Enemies.Ghoul },
    ],
  },
];

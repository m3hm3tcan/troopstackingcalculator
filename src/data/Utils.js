import { Enemies } from "../data/Enemies"; // veya doğru yol

export const strengthRatio = 0.8;
export const bonusStrengthRatio = 0.5;

// 🔁 Shared scoring logic
const calculateAdjustedStrength = (baseStrength, bonusPercent) => {
  return baseStrength * (1 + bonusStrengthRatio * (bonusPercent / 100));
};

const computeMaxBonus = (strengthAgainst, enemyUnitTypes) =>
  strengthAgainst
    .filter((sa) => enemyUnitTypes.includes(sa.name))
    .reduce((max, sa) => Math.max(max, sa.strengthPercentage), 0);

const scoreTroopAgainstEnemies = (unit, enemySquad) => {
  return enemySquad.reduce((total, enemy) => {
    const enemyObj = enemy.name?.unitType ? enemy.name : Enemies[enemy.name]; // gerekli çözümleme

    if (!enemyObj || !enemyObj.unitType) return total;

    const bonus =
      unit.strengthAgainstPercent > 0 &&
      unit.strengthAgainstPercent &&
      unit.unitType === enemyObj.unitType
        ? unit.strengthAgainstPercent / 100
        : 0;

    const effectiveStrength =
      unit.baseStrength * (1 + bonus * bonusStrengthRatio);

    return total + effectiveStrength * enemy.count;
  }, 0);
};

// ✅ Flatten and score Troops
export const flattenTroops = (troopsObj, enemyUnitTypes, enemySquad) => {
  const troopsList = [];

  Object.values(troopsObj).forEach((group) => {
    const { unitType, units, strength, strengthAgainst, colors } = group;

    units.forEach((unitName, i) => {
      const base = strength * Math.pow(1 + strengthRatio, i);
      const bonus = computeMaxBonus(strengthAgainst, enemyUnitTypes);
      const adjusted = calculateAdjustedStrength(base, bonus);
      const unit = {
        unitName,
        unitType,
        unitColor: colors[i],
        baseStrength: adjusted,
        strengthAgainstPercent: bonus,
        leadership: group.leadership,
      };
      unit.score = scoreTroopAgainstEnemies(unit, enemySquad);
      troopsList.push(unit);
    });
  });

  return troopsList.sort((a, b) => b.score - a.score);
};

export const flattenGuardsmanTroops = (
  troopsObj,
  enemyUnitTypes,
  enemySquad
) => {
  return troopsObj
    .map((merc) => {
      const bonus = computeMaxBonus(merc.strengthAgainst, enemyUnitTypes);
      const adjusted = calculateAdjustedStrength(merc.strength, bonus);
      const unit = {
        unitName: merc.name,
        unitType: merc.unitType,
        unitColor: merc.color,
        category: merc.category,
        baseStrength: adjusted,
        strengthAgainstPercent: bonus,
        leadership: merc.leadership,
      };
      unit.score = scoreTroopAgainstEnemies(unit, enemySquad);
      return unit;
    })
    .sort((a, b) => b.score - a.score);
};

export const flattenSpecialistTroops = (
  troopsObj,
  enemyUnitTypes,
  enemySquad
) => {
  return troopsObj
    .map((merc) => {
      const bonus = computeMaxBonus(merc.strengthAgainst, enemyUnitTypes);
      const adjusted = calculateAdjustedStrength(merc.strength, bonus);
      const unit = {
        unitName: merc.name,
        unitType: merc.unitType,
        unitColor: merc.color,
        category: merc.category,
        baseStrength: adjusted,
        strengthAgainstPercent: bonus,
        leadership: merc.leadership,
      };
      unit.score = scoreTroopAgainstEnemies(unit, enemySquad);
      return unit;
    })
    .sort((a, b) => b.score - a.score);
};

// 🧟 Flatten and score Monsters
export const flattenMonsters = (monstersArray, enemyUnitTypes, enemySquad) => {
  return monstersArray
    .map((monster) => {
      const bonus = computeMaxBonus(monster.strengthAgainst, enemyUnitTypes);
      const adjusted = calculateAdjustedStrength(monster.strength, bonus);
      const unit = {
        unitName: monster.name,
        unitType: monster.unitType,
        unitColor: monster.color,
        category: monster.category,
        baseStrength: adjusted,
        strengthAgainstPercent: bonus,
        leadership: monster.dominance,
      };
      unit.score = scoreTroopAgainstEnemies(unit, enemySquad);
      return unit;
    })
    .sort((a, b) => b.score - a.score);
};

// 🛡️ Flatten and score Mercenaries
export const flattenMercenaries = (
  MercenaryArray,
  enemyUnitTypes,
  enemySquad
) => {
  return MercenaryArray.map((merc) => {
    const bonus = computeMaxBonus(merc.strengthAgainst, enemyUnitTypes);
    const adjusted = calculateAdjustedStrength(merc.strength, bonus);
    const unit = {
      unitName: merc.name,
      unitType: merc.unitType,
      unitColor: merc.color,
      category: merc.category,
      baseStrength: adjusted,
      strengthAgainstPercent: bonus,
      leadership: merc.authority,
    };
    unit.score = scoreTroopAgainstEnemies(unit, enemySquad);
    return unit;
  }).sort((a, b) => b.score - a.score);
};

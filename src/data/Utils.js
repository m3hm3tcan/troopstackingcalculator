export const strengthRatio = 0.8;
export const bonusStrengthRatio = 0.5;

// Flatten troops with strength calculation
export const flattenTroops = (troopsObj, enemyUnitTypes) => {
  const troopsList = [];
  Object.values(troopsObj).forEach((group) => {
    const { unitType, units, strength, strengthAgainst } = group;
    units.forEach((unitName, i) => {
      const baseStrength = strength * Math.pow(1 + strengthRatio, i);
      // Find max bonus against enemy types
      const maxBonus = strengthAgainst
        .filter((sa) => enemyUnitTypes.includes(sa.name))
        .reduce((max, sa) => Math.max(max, sa.strengthPercentage), 0);

      const adjustedStrength =
        baseStrength * (1 + bonusStrengthRatio * (maxBonus / 100));

      troopsList.push({
        unitName,
        unitType,
        baseStrength: adjustedStrength,
        strengthAgainstPercent: maxBonus,
        leadership: group.leadership,
      });
    });
  });
  return troopsList;
};

export const flattenMonsters = (monstersArray, enemyUnitTypes) => {
  return monstersArray.map((monster) => {
    const { category, name, unitType, strength, strengthAgainst, dominance } =
      monster;

    // Find max bonus against enemy types
    const maxBonus = strengthAgainst
      .filter((sa) => enemyUnitTypes.includes(sa.name))
      .reduce((max, sa) => Math.max(max, sa.strengthPercentage), 0);

    const adjustedStrength =
      strength * (1 + bonusStrengthRatio * (maxBonus / 100));

    return {
      unitName: name,
      unitType,
      category,
      baseStrength: adjustedStrength,
      strengthAgainstPercent: maxBonus,
      leadership: dominance, // Using 'leadership' field to match output format
    };
  });
};

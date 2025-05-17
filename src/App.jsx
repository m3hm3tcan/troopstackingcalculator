import React, { useState, useMemo } from "react";
import "./App.css";

// Example data (shortened for clarity, add your full data here)
const guardsmen = {
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

const specialist = {
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

const Enemies = {
  Ghoul: { name: 'Ghoul', strength: 28, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 15 }] },
  DeathHoundRider: { name: 'DeathHound Rider', strength: 1100, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 40 }] },
  Banshee: { name: 'Banshee', strength: 100, strengthAgainst: [{ name: 'Melee', strengthPercentage: 45 }] },
  Dwarf: { name: 'Dwarf', strength: 28, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 10 }] },
  Centaur: { name: 'Centaur', strength: 2600, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 50 }] },
  ElvenArcher: { name: 'Elven Archer', strength: 100, strengthAgainst: [{ name: 'Melee', strengthPercentage: 35 }] },
  Skeleton: { name: 'Skeleton', strength: 56, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 15 }] },
  DeathRider: { name: 'Death Rider', strength: 3200, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 50 }] },
  WitchDoctor: { name: 'Witch Doctor', strength: 150, strengthAgainst: [{ name: 'Melee', strengthPercentage: 25 }] },
  Goblin: { name: 'Goblin', strength: 28, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 10 }] },
  OgreShaman: { name: 'Ogre Shaman', strength: 3200, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 60 }] },
  WolfRider: { name: 'Wolf Rider', strength: 150, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 60 }] },
  Fiend: { name: 'Fiend', strength: 28, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 15 }] },
  Overseer: { name: 'Overseer', strength: 6500, strengthAgainst: [{ name: 'Melee', strengthPercentage: 70 }] },
  Magog: { name: 'Magog', strength: 50, strengthAgainst: [{ name: 'Melee', strengthPercentage: 30 }] },
  DarkRider: { name: 'Dark Rider', strength: 5800, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 50 }] },
  PegasusRider: { name: 'Pegasus Rider', strength: 8200, strengthAgainst: [{ name: 'Melee', strengthPercentage: 60 }] },
  Druid: { name: 'Druid', strength: 900, strengthAgainst: [{ name: 'Melee', strengthPercentage: 25 }] },
  Vampire: { name: 'Vampire', strength: 9900, strengthAgainst: [{ name: 'Melee', strengthPercentage: 60 }] },
  Werewolf: { name: 'Werewolf', strength: 360, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 45 }] },
  StormCrow: { name: 'Storm Crow', strength: 13000, strengthAgainst: [{ name: 'Melee', strengthPercentage: 55 }] },
  AxeThrower: { name: 'Axe Thrower', strength: 360, strengthAgainst: [{ name: 'Melee', strengthPercentage: 45 }] },
  Cerberus: { name: 'Cerberus', strength: 17000, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 65 }] },
  HornedDemon: { name: 'Horned Demon', strength: 720, strengthAgainst: [{ name: 'Mounted', strengthPercentage: 40 }] },
  JaguarRider: { name: 'Jaguar Rider', strength: 270, strengthAgainst: [{ name: 'Ranged', strengthPercentage: 30 }] },
  Necromancer: { name: 'Necromancer', strength: 720, strengthAgainst: [{ name: 'Melee', strengthPercentage: 50 }] },
}

// Example EnemySquads data simplified (replace with your full data)
const EnemySquads = [
  { level: 1, category: 'Common', name: 'Undead Squad', squad: [{ count: 90, monster: Enemies.Ghoul }] },
  { level: 1, category: 'Rare', name: 'Undead Squad', squad: [{ count: 2, name: Enemies.DeathHoundRider }, { count: 16, name: Enemies.Banshee }, { count: 56, name: Enemies.Ghoul }] },
  { level: 2, category: 'Common', name: 'Elf', squad: [{ count: 140, monster: Enemies.Dwarf }] },
  { level: 2, category: 'Rare', name: 'Elf', squad: [{ count: 3, name: Enemies.Centaur }, { count: 7, name: Enemies.ElvenArcher }, { count: 140, name: Enemies.Dwarf }] },
  { level: 3, category: 'Common', name: 'Cursed', squad: [{ count: 110, monster: Enemies.Skeleton }] },
  { level: 3, category: 'Rare', name: 'Cursed', squad: [{ count: 2, name: Enemies.DeathRider }, { count: 25, name: Enemies.WitchDoctor }, { count: 23, name: Enemies.Skeleton }] },
  { level: 4, category: 'Common', name: 'Barbarian', squad: [{ count: 330, monster: Enemies.Goblin }] },
  { level: 4, category: 'Rare', name: 'Barbarian', squad: [{ count: 4, name: Enemies.OgreShaman }, { count: 39, name: Enemies.WolfRider }, { count: 70, name: Enemies.Goblin }] },
  { level: 5, category: 'Common', name: 'Inferno', squad: [{ count: 500, monster: Enemies.Fiend }] },
  { level: 5, category: 'Rare', name: 'Inferno', squad: [{ count: 3, name: Enemies.Overseer }, { count: 180, name: Enemies.Magog }, { count: 110, name: Enemies.Fiend }] },
  { level: 6, category: 'Common', name: 'Undead', squad: [{ count: 210, monster: Enemies.Banshee }] },
  { level: 6, category: 'Rare', name: 'Undead', squad: [{ count: 5, name: Enemies.DarkRider }, { count: 13, name: Enemies.DeathHoundRider }, { count: 48, name: Enemies.Banshee }] },
  { level: 7, category: 'Common', name: 'Elf', squad: [{ count: 330, monster: Enemies.ElvenArcher }] },
  { level: 7, category: 'Rare', name: 'Elf', squad: [{ count: 4, name: Enemies.PegasusRider }, { count: 25, name: Enemies.Druid }, { count: 220, name: Enemies.ElvenArcher }] },
  { level: 8, category: 'Common', name: 'Cursed', squad: [{ count: 330, monster: Enemies.WitchDoctor }] },
  { level: 8, category: 'Rare', name: 'Cursed', squad: [{ count: 5, name: Enemies.Vampire }, { count: 97, name: Enemies.Werewolf }, { count: 230, name: Enemies.WitchDoctor }] },
  { level: 9, category: 'Common', name: 'Barbarian', squad: [{ count: 510, monster: Enemies.WolfRider }] },
  { level: 9, category: 'Rare', name: 'Barbarian', squad: [{ count: 6, name: Enemies.StormCrow }, { count: 150, name: Enemies.AxeThrower }, { count: 2150, name: Enemies.WolfRider }] },
  { level: 10, category: 'Common', name: 'Inferno', squad: [{ count: 2300, monster: Enemies.Magog }] },
  { level: 10, category: 'Rare', name: 'Inferno', squad: [{ count: 7, name: Enemies.Cerberus }, { count: 120, name: Enemies.HornedDemon }, { count: 1700, name: Enemies.Magog }] },
  { level: 11, category: 'Common', name: 'Elf', squad: [{ count: 1200, monster: Enemies.ElvenArcher }, { count: 1900, monster: Enemies.Dwarf }] },
  { level: 11, category: 'Rare', name: 'Elf', squad: [{ count: 21, name: Enemies.PegasusRider }, { count: 1300, name: Enemies.ElvenArcher }, { count: 4500, name: Enemies.Dwarf }] },
  { level: 12, category: 'Common', name: 'Barbarian', squad: [{ count: 1200, monster: Enemies.WolfRider }, { count: 2800, monster: Enemies.Goblin }] },
  { level: 12, category: 'Common', name: 'Cursed', squad: [{ count: 550, monster: Enemies.JaguarRider }, { count: 110, monster: Enemies.Skeleton }] },
  { level: 12, category: 'Rare', name: 'Barbarian', squad: [{ count: 19, name: Enemies.StormCrow }, { count: 1300, name: Enemies.WolfRider }, { count: 6800, name: Enemies.Goblin }] },
  { level: 12, category: 'Rare', name: 'Cursed', squad: [{ count: 21, name: Enemies.Vampire }, { count: 1000, name: Enemies.WitchDoctor }, { count: 2800, name: Enemies.Skeleton }] },
  { level: 13, category: 'Common', name: 'Inferno', squad: [{ count: 4500, monster: Enemies.Magog }, { count: 3400, monster: Enemies.Fiend }] },
  { level: 13, category: 'Rare', name: 'Inferno', squad: [{ count: 18, name: Enemies.Cerberus }, { count: 4600, name: Enemies.Magog }, { count: 8300, name: Enemies.Fiend }] },

  { level: 14, category: 'Common', name: 'Cursed', squad: [{ count: 1500, monster: Enemies.JaguarRider }, { count: 2000, monster: Enemies.WitchDoctor }] },
  { level: 14, category: 'Common', name: 'Elf', squad: [{ count: 370, monster: Enemies.Druid }, { count: 510, monster: Enemies.Dwarf }] },
  { level: 14, category: 'Rare', name: 'Cursed', squad: [{ count: 57, name: Enemies.Vampire }, { count: 1600, name: Enemies.JaguarRider }, { count: 7600, name: Enemies.Skeleton }] },
  { level: 14, category: 'Rare', name: 'Elf', squad: [{ count: 56, name: Enemies.PegasusRider }, { count: 380, name: Enemies.Druid }, { count: 12000, name: Enemies.Dwarf }] },

  { level: 15, category: 'Common', name: 'Inferno', squad: [{ count: 850, monster: Enemies.HornedDemon }, { count: 9400, monster: Enemies.Fiend }] },
  { level: 15, category: 'Common', name: 'Barbarian', squad: [{ count: 1400, monster: Enemies.AxeThrower }, { count: 7700, monster: Enemies.Goblin }] },
  { level: 15, category: 'Rare', name: 'Inferno', squad: [{ count: 50, name: Enemies.Cerberus }, { count: 880, name: Enemies.HornedDemon }, { count: 53000, name: Enemies.Fiend }] },
  { level: 15, category: 'Rare', name: 'Barbarian', squad: [{ count: 53, name: Enemies.PegasusRider }, { count: 1400, name: Enemies.AxeThrower }, { count: 19000, name: Enemies.Goblin }] },

  { level: 15, category: 'Common', name: 'Elf', squad: [{ count: 850, monster: Enemies.Druid }, { count: 3300, monster: Enemies.ElvenArcher }] },
  { level: 15, category: 'Common', name: 'Undead', squad: [{ count: 620, monster: Enemies.DeathHoundRider }, { count: 2900, monster: Enemies.Banshee }] },
  { level: 15, category: 'Rare', name: 'Undead', squad: [{ count: 160, name: Enemies.DarkRider }, { count: 990, name: Enemies.Necromancer }, { count: 7100, name: Enemies.Banshee }] },
  { level: 15, category: 'Rare', name: 'Elf', squad: [{ count: 130, name: Enemies.PegasusRider }, { count: 890, name: Enemies.Druid }, { count: 8000, name: Enemies.ElvenArcher }] },
  { level: 15, category: 'Rare', name: 'Cursed', squad: [{ count: 120, name: Enemies.Vampire }, { count: 3300, name: Enemies.JaguarRider }, { count: 6000, name: Enemies.WitchDoctor }] },
]
const strengthRatio = 0.8;
const bonusStrengthRatio = 0.5;

function App() {
  const [selectedSquadIndex, setSelectedSquadIndex] = useState(0);
  const [userPopulation, setUserPopulation] = useState(12000);
  const [selectedTroops, setSelectedTroops] = useState([]);
  const [enemyStrengthThreshold, setEnemyStrengthThreshold] = useState(30); // User input threshold

  const selectedSquad = EnemySquads[selectedSquadIndex] || { squad: [] };

  // Get enemy unit types in the selected squad
  const enemyUnitTypes = useMemo(() => {
    const types = new Set();
    selectedSquad.squad.forEach(({ monster, name }) => {
      // Some data uses monster, some use name directly, handle both
      const enemy = monster || name;
      if (enemy?.unitType) types.add(enemy.unitType);
    });
    return Array.from(types);
  }, [selectedSquad]);

  // Flatten troops with strength calculation
  const flattenTroops = (troopsObj) => {
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
        });
      });
    });
    return troopsList;
  };

  // Combine guardsmen + specialist and filter troops by enemy strengthAgainst threshold
  const allTroops = useMemo(() => {
    const guards = flattenTroops(guardsmen).map((t) => ({
      ...t,
      mainType: "Guardsmen",
    }));
    const specs = flattenTroops(specialist).map((t) => ({
      ...t,
      mainType: "Specialist",
    }));

    // We want to exclude any troop where enemy has strengthAgainst on that troop type >= threshold
    // Check enemy's strengthAgainst to troop's unitType
    return [...guards, ...specs].filter((troop) => {
      // For each enemy unit in squad, check if its strengthAgainst against troop.unitType >= threshold
      return !selectedSquad.squad.some(({ monster, name }) => {
        const enemy = monster || name;
        if (!enemy?.strengthAgainst) return false;
        const sa = enemy.strengthAgainst.find((sa) => sa.name === troop.unitType);
        return sa && sa.strengthPercentage >= enemyStrengthThreshold;
      });
    });
  }, [enemyUnitTypes, selectedSquad.squad, enemyStrengthThreshold]);

  // Toggle troop selection
  const toggleTroop = (unitName) => {
    setSelectedTroops((prev) =>
      prev.includes(unitName) ? prev.filter((t) => t !== unitName) : [...prev, unitName]
    );
  };

  // Calculate troop counts based on population and selected troops
  const results = useMemo(() => {
    if (userPopulation <= 0 || selectedTroops.length === 0) return [];

    const troops = allTroops.filter((t) => selectedTroops.includes(t.unitName));
    if (troops.length === 0) return [];

    const totalInverseStrength = troops.reduce((acc, t) => acc + 1 / t.baseStrength, 0);

    return troops.map((t) => {
      const count = Math.floor((userPopulation / totalInverseStrength) / t.baseStrength);
      return {
        unitName: t.unitName,
        count,
        totalStrength: count * t.baseStrength,
        mainType: t.mainType,
      };
    });
  }, [userPopulation, selectedTroops, allTroops]);

  // Split troops for UI checkboxes
  const guardsmenUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Guardsmen");
  }, [allTroops]);

  const specialistUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Specialist");
  }, [allTroops]);

  return (
    <div className="container">
      <h1>Troop Attack Calculator</h1>

      <label>
        Select Enemy Squad:{" "}
        <select
          value={selectedSquadIndex}
          onChange={(e) => setSelectedSquadIndex(Number(e.target.value))}
        >
          {EnemySquads.map((squad, idx) => (
            <option key={idx} value={idx}>
              {`Lvl ${squad.level} - ${squad.category} - ${squad.name}`}
            </option>
          ))}
        </select>
      </label>

      <div className="section">
        <label>
          Total Population to Deploy:{" "}
          <input
            type="number"
            min={1}
            value={userPopulation}
            onChange={(e) => setUserPopulation(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="section">
        <label>
          Enemy Strength Threshold (%):{" "}
          <input
            type="number"
            min={0}
            max={100}
            value={enemyStrengthThreshold}
            onChange={(e) => setEnemyStrengthThreshold(Number(e.target.value))}
          />
          <small>Exclude troop types enemy is very strong against (≥ threshold)</small>
        </label>
      </div>

      <div className="section">
        <h3 className="title">Guardsmen Troops</h3>
        <div className="troop-list">
          {guardsmenUnits.map(({ unitName }) => (
            <label key={unitName} className="troop-label">
              <input
                type="checkbox"
                checked={selectedTroops.includes(unitName)}
                onChange={() => toggleTroop(unitName)}
              />{" "}
              {unitName}
            </label>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="title">Specialist Troops</h3>
        <div className="troop-list">
          {specialistUnits.map(({ unitName }) => (
            <label key={unitName} className="troop-label">
              <input
                type="checkbox"
                checked={selectedTroops.includes(unitName)}
                onChange={() => toggleTroop(unitName)}
              />{" "}
              {unitName}
            </label>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Attack Troops Distribution</h2>
        {results.length === 0 ? (
          <p>Please select troops and enter a valid population.</p>
        ) : (
          <table className="result-table">
            <thead>
              <tr>
                <th>Main Troop Type</th>
                <th>Troop Unit</th>
                <th className="count">Count</th>
                <th className="total-strength">Total Strength</th>
              </tr>
            </thead>
            <tbody>
              {results.map(({ unitName, count, totalStrength, mainType }) => (
                <tr key={unitName}>
                  <td>{mainType}</td>
                  <td>{unitName}</td>
                  <td className="count">{count}</td>
                  <td className="total-strength">{totalStrength.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
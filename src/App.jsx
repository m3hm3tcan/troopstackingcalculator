import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import InfoModal from "./components/InfoModal/InfoModal";
import {
  guardsmen,
  specialist,
  siegeEngines,
  MonstersUnits,
} from "./data/Troops";
import { Enemies, EnemySquads } from "./data/Enemies";
import { flattenMonsters, flattenTroops } from "./data/Utils";
import HuniLogo from "./assets/funnel.svg";
import UserManualModal from "./components/UserManualModal";

const loadFromStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  try {
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedSquadIndex, setSelectedSquadIndex] = useState(
    loadFromStorage("selectedSquadIndex", 0)
  );
  const [dominancePopulation, setDominancePopulation] = useState(
    loadFromStorage("dominancePopulation", 0)
  );

  const [userPopulation, setUserPopulation] = useState(
    loadFromStorage("userPopulation", 0)
  );

  const [selectedTroops, setSelectedTroops] = useState(
    loadFromStorage("selectedTroops", [])
  );

  const [selectedMonsterTroops, setSelectedMonsterTroops] = useState(
    loadFromStorage("selectedMonsterTroops", [])
  );

  const [enemyStrengthThreshold, setEnemyStrengthThreshold] = useState(
    loadFromStorage("enemyStrengthThreshold", 30)
  ); // User input threshold

  useEffect(() => {
    saveToStorage("selectedSquadIndex", selectedSquadIndex);
  }, [selectedSquadIndex]);

  useEffect(() => {
    saveToStorage("userPopulation", userPopulation);
  }, [userPopulation]);

  useEffect(() => {
    saveToStorage("dominancePopulation", dominancePopulation);
  }, [dominancePopulation]);

  useEffect(() => {
    saveToStorage("selectedTroops", selectedTroops);
  }, [selectedTroops]);

  useEffect(() => {
    saveToStorage("selectedMonsterTroops", selectedMonsterTroops);
  }, [selectedMonsterTroops]);

  useEffect(() => {
    saveToStorage("enemyStrengthThreshold", enemyStrengthThreshold);
  }, [enemyStrengthThreshold]);

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

  // Combine guardsmen + specialist and filter troops by enemy strengthAgainst threshold
  const allTroops = useMemo(() => {
    const guards = flattenTroops(guardsmen, enemyUnitTypes).map((t) => ({
      ...t,
      mainType: "Guardsmen",
    }));
    const specs = flattenTroops(specialist, enemyUnitTypes).map((t) => ({
      ...t,
      mainType: "Specialist",
    }));

    const engines = flattenTroops(siegeEngines, enemyUnitTypes).map((t) => ({
      ...t,
      mainType: "Siege Engine",
    }));

    const monsterTroopsUnits = flattenMonsters(
      MonstersUnits,
      enemyUnitTypes
    ).map((t) => ({
      ...t,
      mainType: "MonstersUnits",
    }));

    // const

    // We want to exclude any troop where enemy has strengthAgainst on that troop type >= threshold
    // Check enemy's strengthAgainst to troop's unitType
    return [...guards, ...specs, ...engines, ...monsterTroopsUnits].filter(
      (troop) => {
        // For each enemy unit in squad, check if its strengthAgainst against troop.unitType >= threshold
        return !selectedSquad.squad.some(({ monster, name }) => {
          const enemy = monster || name;
          if (!enemy?.strengthAgainst) return false;
          const sa = enemy.strengthAgainst.find(
            (sa) => sa.name === troop.unitType
          );
          return sa && sa.strengthPercentage >= enemyStrengthThreshold;
        });
      }
    );
  }, [enemyUnitTypes, selectedSquad.squad, enemyStrengthThreshold]);

  // Toggle troop selection
  const toggleTroop = (unitName) => {
    setSelectedTroops((prev) =>
      prev.includes(unitName)
        ? prev.filter((t) => t !== unitName)
        : [...prev, unitName]
    );
  };

  const toggleMonsterTroop = (unitName) => {
    setSelectedMonsterTroops((prev) =>
      prev.includes(unitName)
        ? prev.filter((t) => t !== unitName)
        : [...prev, unitName]
    );
  };

  // Calculate troop counts based on population and selected troops
  const results = useMemo(() => {
    if (userPopulation <= 0 || selectedTroops.length === 0) return [];

    const troops = allTroops.filter((t) => selectedTroops.includes(t.unitName));
    if (troops.length === 0) return [];

    const totalInverseStrength = troops.reduce(
      (acc, t) =>
        acc + (t.leadership > 0 ? 1 / (t.baseStrength / t.leadership) : 0),
      0
    );

    return troops.map((t) => {
      const effectiveStrength = t.baseStrength / t.leadership;
      const proportion = 1 / effectiveStrength / totalInverseStrength;
      const count = Math.floor((userPopulation * proportion) / t.leadership);

      return {
        unitName: t.unitName,
        count,
        totalStrength: count * t.baseStrength,
        leadership: t.leadership,
        mainType: t.mainType,
      };
    });
  }, [userPopulation, selectedTroops, allTroops]);

const dominanceResult = useMemo(() => {
  if (selectedMonsterTroops.length === 0 || selectedTroops.length === 0)
    return [];

  // Select only the monster units
  const troops = allTroops.filter((t) =>
    selectedMonsterTroops.includes(t.unitName)
  );

  if (troops.length === 0) return [];

  // Calculate the average total strength per unit from regular troops
  const totalTroopStrength = selectedTroops.reduce((acc, unitName) => {
    const troop = allTroops.find((unit) => unit.unitName === unitName);
    return acc + (troop ? troop.baseStrength : 0);
  }, 0);

  const avgTroopStrength = totalTroopStrength / selectedTroops.length;

  return troops.map((t) => {
    // Set monster unit total strength equal to avg troop strength
    const count = Math.floor(avgTroopStrength / t.baseStrength);

    return {
      unitName: t.unitName,
      count,
      totalStrength: count * t.baseStrength,
      leadership: t.leadership,
      mainType: t.mainType,
    };
  });
}, [dominancePopulation, selectedMonsterTroops, selectedTroops, allTroops]);

  // Split troops for UI checkboxes
  const guardsmenUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Guardsmen");
  }, [allTroops]);

  const specialistUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Specialist");
  }, [allTroops]);

  const engineUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Siege Engine");
  }, [allTroops]);

  const monstersUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "MonstersUnits");
  }, [allTroops]);

  // Group units by their type
  const categories = ["Mounted", "Melee", "Ranged", "Flying"];
  const enginescategories = ["Siege Engine"];
  const monsterCategories = ["Dragons", "Beasts", "Elementals", "Giants"];

  const groupedUnits = categories.reduce((acc, category) => {
    acc[category] = guardsmenUnits
      .filter((unit) => unit.unitType === category)
      .map((unit) => unit.unitName);
    return acc;
  }, {});

  const groupedUnitsSpecialist = categories.reduce((acc, category) => {
    acc[category] = specialistUnits
      .filter((unit) => unit.unitType === category)
      .map((unit) => unit.unitName);
    return acc;
  }, {});

  const groupedUnitsEngines = enginescategories.reduce((acc, category) => {
    acc[category] = engineUnits
      .filter((unit) => unit.unitType === category)
      .map((unit) => unit.unitName);
    return acc;
  }, {});

  const groupedUnitsMonsters = monsterCategories.reduce((acc, category) => {
    acc[category] = monstersUnits
      .filter((unit) => unit.category === category)
      .map((unit) => unit.unitName);
    return acc;
  }, {});

  const removeLocalData = () => {
    localStorage.clear();

    setEnemyStrengthThreshold(30);
    setUserPopulation(0);
    setDominancePopulation(0);
    setSelectedTroops([]);
    setSelectedSquadIndex(0);

    localStorage.setItem("selectedTroops", []);
  };

  const [showManualModal, setShowManualModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div>
          <h1>
            <img src={HuniLogo} height={30} width={30} />
            Hunililer -TotalBattle Attack Calculator{" "}
            <span className="navbar-subtitle title-italic">
              powered by Ceo, Ejderya Uzra, Felharon, Turk & Last Ottoman and
              coded by Tarkan and the Wolf
            </span>
          </h1>
          <p className="navbar-subtitle">
            Plan your attacks wisely with real-time troop stats
          </p>
        </div>
        <div>
          <button
            className="info-button"
            aria-label="Open Info"
            onClick={() => setShowInfoModal(true)}
          >
            ℹ️ <span>Information</span>
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="main-section">
          <InfoModal
            isOpen={showInfoModal}
            onClose={() => setShowInfoModal(false)}
          />

          <div className="section first-section">
            <div className="sub-container">
              <label className="sub-title">
                Select Enemy Squad:{" "}
                <select
                  value={selectedSquadIndex}
                  onChange={(e) =>
                    setSelectedSquadIndex(Number(e.target.value))
                  }
                >
                  {EnemySquads.sort((a, b) => {
                    if (a.level !== b.level) {
                      return a.level - b.level;
                    }
                    if (a.category !== b.category) {
                      return a.category.localeCompare(b.category);
                    }
                    return a.name.localeCompare(b.name);
                  }).map((squad, idx) => (
                    <option key={idx} value={idx}>
                      {`Lvl ${squad.level} - ${squad.category} - ${squad.name}`}
                    </option>
                  ))}
                </select>
              </label>
              <div className="input-group">
                <label className="sub-title">
                  Total Population to Deploy:{" "}
                  <input
                    type="string"
                    min={1}
                    value={userPopulation}
                    onChange={(e) => setUserPopulation(Number(e.target.value))}
                  />
                </label>

                <label className="sub-title">
                  Total Dominance to Deploy:{" "}
                  <input
                    type="string"
                    min={1}
                    value={dominancePopulation}
                    onChange={(e) =>
                      setDominancePopulation(Number(e.target.value))
                    }
                  />
                </label>

                <label className="sub-title">
                  Enemy Strength Threshold (%):{" "}
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={enemyStrengthThreshold}
                    onChange={(e) =>
                      setEnemyStrengthThreshold(Number(e.target.value))
                    }
                  />
                  <small>
                    Exclude troop types enemy is very strong against (≥
                    threshold)
                  </small>
                </label>
              </div>
              <button onClick={removeLocalData} className="clear-button">
                Clear
              </button>

              <button
                className="manual-button"
                aria-label="Open Manual"
                onClick={() => setShowManualModal(true)}
              >
                <span>How is it working?</span>
              </button>
              <UserManualModal
                isOpen={showManualModal}
                onClose={() => setShowManualModal(false)}
              />
            </div>

            <div>
              <h3 className="title">Guardsmen Troops</h3>
              <table className="troop-table">
                <tbody className="unit-main-title">
                  {categories.map((category) => (
                    <tr className="unit-list">
                      <td colSpan="4">
                        <div className="unit-type-header">{category}</div>
                        {groupedUnits[category].map((unit) => (
                          <label key={unit} className="unit-item">
                            <input
                              type="checkbox"
                              checked={selectedTroops.includes(unit)}
                              onChange={() => toggleTroop(unit)}
                            />
                            {unit}
                          </label>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="title">Specialist Troops</h3>
              <table className="troop-table">
                <tbody className="unit-main-title">
                  {categories.map((category) => (
                    <tr>
                      <td colSpan="4" className="unit-list">
                        <div className="unit-type-header">{category}</div>
                        {groupedUnitsSpecialist[category].map((unit) => (
                          <label key={unit} className="unit-item">
                            <input
                              type="checkbox"
                              checked={selectedTroops.includes(unit)}
                              onChange={() => toggleTroop(unit)}
                            />
                            {unit}
                          </label>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="title">Engineer Corps Troops</h3>
              <table className="troop-table">
                <tbody className="unit-main-title">
                  {enginescategories.map((category) => (
                    <tr>
                      <td colSpan="4" className="unit-list">
                        <div className="unit-type-header">{category}</div>
                        {groupedUnitsEngines[enginescategories].map((unit) => (
                          <label key={unit} className="unit-item">
                            <input
                              type="checkbox"
                              checked={selectedTroops.includes(unit)}
                              onChange={() => toggleTroop(unit)}
                            />
                            {unit}
                          </label>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="title">Monster Troops</h3>
              <table className="troop-table">
                <tbody className="unit-main-title">
                  {monsterCategories.map((category) => (
                    <tr>
                      <td colSpan="4" className="unit-list">
                        <div className="unit-type-header">{category}</div>
                        {groupedUnitsMonsters[category].map((unit) => (
                          <label key={unit} className="unit-item">
                            <input
                              type="checkbox"
                              checked={selectedMonsterTroops.includes(unit)}
                              onChange={() => toggleMonsterTroop(unit)}
                            />
                            {unit}
                          </label>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section second-section">
            <h2>Attack Troops Distribution</h2>
            {results.length === 0 ? (
              <p>Please select troops and enter a valid population.</p>
            ) : (
              <div>
                <h2>Main Troops</h2>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>Main Troop Type</th>
                      <th>Troop Unit</th>
                      <th>Leadership</th>
                      <th className="count">Count</th>
                      {/* <th className="total-strength">Total Strength</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(
                      ({
                        mainType,
                        unitName,
                        count,
                        // totalStrength,
                        leadership,
                      }) => (
                        <tr key={mainType}>
                          <td>{mainType}</td>
                          <td>{unitName}</td>
                          <td className="count">{leadership}</td>
                          <td className="count">{count}</td>
                          {/* <td className="total-strength">
                      {totalStrength.toFixed(2)}
                    </td> */}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {results.length === 0 ? (
              <p>Please select monsters and enter a valid dominance.</p>
            ) : (
              <div>
                <h2>Monsters</h2>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>Monster Unit</th>
                      <th>Dominance</th>
                      <th className="count">Count</th>
                      {/* <th className="total-strength">Total Strength</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {dominanceResult.map(
                      ({
                        unitName,
                        count,
                        // totalStrength,
                        leadership,
                      }) => (
                        <tr key={unitName}>
                          <td>{unitName}</td>
                          <td className="count">{leadership}</td>
                          <td className="count">{count}</td>
                          {/* <td className="total-strength">
                      {totalStrength.toFixed(2)}
                    </td> */}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

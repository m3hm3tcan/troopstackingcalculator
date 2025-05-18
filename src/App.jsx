import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import InfoModal from "./components/InfoModal/InfoModal";
import { guardsmen, specialist } from "./data/Troops";
import { Enemies, EnemySquads } from "./data/Enemies";
import { flattenTroops } from "./data/Utils";
import HuniLogo from "./assets/funnel.svg";

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
  const [userPopulation, setUserPopulation] = useState(
    loadFromStorage("userPopulation", 0)
  );
  const [selectedTroops, setSelectedTroops] = useState(
    loadFromStorage("selectedTroops", [])
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
    saveToStorage("selectedTroops", selectedTroops);
  }, [selectedTroops]);

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

    // We want to exclude any troop where enemy has strengthAgainst on that troop type >= threshold
    // Check enemy's strengthAgainst to troop's unitType
    return [...guards, ...specs].filter((troop) => {
      // For each enemy unit in squad, check if its strengthAgainst against troop.unitType >= threshold
      return !selectedSquad.squad.some(({ monster, name }) => {
        const enemy = monster || name;
        if (!enemy?.strengthAgainst) return false;
        const sa = enemy.strengthAgainst.find(
          (sa) => sa.name === troop.unitType
        );
        return sa && sa.strengthPercentage >= enemyStrengthThreshold;
      });
    });
  }, [enemyUnitTypes, selectedSquad.squad, enemyStrengthThreshold]);

  // Toggle troop selection
  const toggleTroop = (unitName) => {
    setSelectedTroops((prev) =>
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

  // Split troops for UI checkboxes
  const guardsmenUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Guardsmen");
  }, [allTroops]);

  const specialistUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "Specialist");
  }, [allTroops]);

  // Group units by their type
  const categories = ["Mounted", "Melee", "Ranged", "Flying"];
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

  const removeLocalData = () => {
    localStorage.clear();

    setEnemyStrengthThreshold(30);
    setUserPopulation(0);
    setSelectedTroops([]);
    setSelectedSquadIndex(0);

    localStorage.setItem("selectedTroops", []);
  };

  const [scrollY, setScrollY] = useState(150);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 760) {
        setScrollY(150 + window.scrollY);
      } else {
        setScrollY(150); // Keep it fixed on small screens
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Adjust on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
            </div>

            <div>
              <h3 className="title">Guardsmen Troops</h3>
              <table className="troop-table">
                <tbody>
                  {categories.map((category) => (
                    <>
                      <tr key={category}>
                        <td colSpan="4" className="unit-type-header">
                          {category}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="unit-list">
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
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="title">Specialist Troops</h3>
              <table className="troop-table">
                <tbody>
                  {categories.map((category) => (
                    <>
                      <tr key={category}>
                        <td colSpan="4" className="unit-type-header">
                          {category}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="unit-list">
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
                    </>
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

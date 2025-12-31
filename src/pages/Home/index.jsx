import "../../i18n";
import React, { useState, useMemo, useEffect } from "react";
import "./../../App.css";

import InfoModal from "./../../components/InfoModal/InfoModal";
import {
  // guardsmen,
  specialist,
  engineerCorps,
  MonstersUnits,
  MercenaryUnits,
} from "./../../data/Troops";

import { guardsmen } from "./../../data/transformedTroops";
import { Enemies, EnemySquads } from "./../../data/Enemies";
import {
  flattenMonsters,
  flattenTroops,
  flattenGuardsmanTroops,
  flattenMercenaries,
} from "./../../data/Utils";
import UserManualModal from "./../../components/UserManualModal";
import { useTranslation } from "react-i18next";

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

function Home() {
  const { t } = useTranslation();
  // const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  // const [images, setImages] = useState([]);
  // const [newArry, setNewArr] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob("./assets/troops/*.{png,jpg,jpeg,svg}", {
      eager: true,
    });

    const imageMap = {};

    const newArr = {};

    for (const path in modules) {
      const encodedFileName = path.split("/").pop(); // e.g., Archer%20I.png
      const decodedFileName = decodeURIComponent(encodedFileName); // "Archer I.png"
      imageMap[decodedFileName.split(".")[0]] = modules[path].default;

      newArr[decodedFileName] = decodedFileName;
    }
    // setImages(imageMap);
    // setNewArr(newArr);
  }, []);

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedSquadIndex, setSelectedSquadIndex] = useState(
    loadFromStorage("selectedSquadIndex", 0)
  );
  const [dominancePopulation, setDominancePopulation] = useState(
    loadFromStorage("dominancePopulation", 0)
  );

  const [authorityPopulation, setAuthorityPopulation] = useState(
    loadFromStorage("authorityPopulation", 0)
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

  const [selectedMercenaryTroops, setSelectedMercenaryTroops] = useState(
    loadFromStorage("selectedMercenaryTroops", [])
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
    saveToStorage("authorityPopulation", authorityPopulation);
  }, [authorityPopulation]);

  useEffect(() => {
    saveToStorage("selectedTroops", selectedTroops);
  }, [selectedTroops]);

  useEffect(() => {
    saveToStorage("selectedMonsterTroops", selectedMonsterTroops);
  }, [selectedMonsterTroops]);

  useEffect(() => {
    saveToStorage("selectedMercenaryTroops", selectedMercenaryTroops);
  }, [selectedMercenaryTroops]);

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
    const guards = flattenGuardsmanTroops(
      guardsmen,
      enemyUnitTypes,
      selectedSquad.squad
    ).map((t) => ({
      ...t,
      mainType: "Guardsmen",
    }));
    const specs = flattenTroops(
      specialist,
      enemyUnitTypes,
      selectedSquad.squad
    ).map((t) => ({
      ...t,
      mainType: "Specialist",
    }));

    const engines = flattenTroops(
      engineerCorps,
      enemyUnitTypes,
      selectedSquad.squad
    ).map((t) => ({
      ...t,
      mainType: "Siege Engine",
    }));

    const monsterTroopsUnits = flattenMonsters(
      MonstersUnits,
      enemyUnitTypes,
      selectedSquad.squad
    ).map((t) => ({
      ...t,
      mainType: "MonstersUnits",
    }));

    const mercenaryTroopUnits = flattenMercenaries(
      MercenaryUnits,
      enemyUnitTypes,
      selectedSquad.squad
    ).map((t) => ({
      ...t,
      mainType: "MercenaryUnits",
    }));

    return [
      ...guards,
      ...specs,
      ...engines,
      ...monsterTroopsUnits,
      ...mercenaryTroopUnits,
    ].filter((troop) => {
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
  }, [
    enemyUnitTypes,
    selectedSquad.squad,
    enemyStrengthThreshold,
    selectedTroops,
    selectedMonsterTroops,
    selectedMercenaryTroops,
  ]);

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

  const toggleMeMercenaryTroop = (unitName) => {
    setSelectedMercenaryTroops((prev) =>
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
      const unitStrength = t.baseStrength;

      return {
        unitName: t.unitName,
        unitColor: t.unitColor,
        unitStrength,
        count,
        totalStrength: count * t.baseStrength,
        leadership: t.leadership,
        mainType: t.mainType,
      };
    });
  }, [userPopulation, selectedTroops, allTroops]);

  const dominanceResult = useMemo(() => {
    if (
      dominancePopulation <= 0 ||
      selectedMonsterTroops.length === 0 ||
      results.length === 0
    ) {
      return [];
    }

    // Get target totalStrength per unit from human results
    const targetStrengthPerUnit = results[0].totalStrength;

    const troops = allTroops.filter((t) =>
      selectedMonsterTroops.includes(t.unitName)
    );
    if (troops.length === 0) return [];
    // Calculate proposed counts and total dominance cost
    const proposed = troops.map((t) => {
      const count = Math.floor(targetStrengthPerUnit / t.baseStrength);
      const totalDominanceCost = count * t.leadership;
      const unitStrength = t.baseStrength;

      return {
        unitName: t.unitName,
        count,
        unitColor: t.unitColor,
        unitStrength,
        totalStrength: count * t.baseStrength,
        totalDominanceCost,
        leadership: t.leadership,
        mainType: t.mainType,
      };
    });

    // Sum total dominance cost
    const totalCost = proposed.reduce(
      (acc, p) => acc + p.totalDominanceCost,
      0
    );

    // If we’re over budget, scale down all counts proportionally
    if (totalCost > dominancePopulation) {
      const scale = dominancePopulation / totalCost;
      return proposed.map((p) => {
        const scaledCount = Math.floor(p.count * scale);
        return {
          ...p,
          count: scaledCount,
          totalStrength: scaledCount * (p.totalStrength / p.count), // baseStrength * count
        };
      });
    }

    // Otherwise return as-is
    return proposed;
  }, [dominancePopulation, selectedMonsterTroops, allTroops, results]);

  const authorityResult = useMemo(() => {
    if (
      authorityPopulation <= 0 ||
      selectedMercenaryTroops.length === 0 ||
      results.length === 0
    ) {
      return [];
    }

    // Get target totalStrength per unit from human results
    const targetStrengthPerUnit = results[0].totalStrength;

    const troops = allTroops.filter((t) =>
      selectedMercenaryTroops.includes(t.unitName)
    );
    if (troops.length === 0) return [];
    // Calculate proposed counts and total authority cost
    const proposed = troops.map((t) => {
      const count = Math.floor(targetStrengthPerUnit / t.baseStrength);
      const totalAuthorityCost = count * t.leadership;
      const unitStrength = t.baseStrength;

      return {
        unitName: t.unitName,
        count,
        unitColor: t.unitColor,
        unitStrength,
        totalStrength: count * t.baseStrength,
        totalAuthorityCost,
        leadership: t.leadership,
        mainType: t.mainType,
      };
    });

    // Sum total dominance cost
    const totalCost = proposed.reduce(
      (acc, p) => acc + p.totalDominanceCost,
      0
    );

    // If we’re over budget, scale down all counts proportionally
    if (totalCost > authorityPopulation) {
      const scale = authorityPopulation / totalCost;
      return proposed.map((p) => {
        const scaledCount = Math.floor(p.count * scale);
        return {
          ...p,
          count: scaledCount,
          totalStrength: scaledCount * (p.totalStrength / p.count), // baseStrength * count
        };
      });
    }

    // Otherwise return as-is
    return proposed;
  }, [authorityPopulation, selectedMercenaryTroops, allTroops, results]);

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

  const mercenariesUnits = useMemo(() => {
    return allTroops.filter((t) => t.mainType === "MercenaryUnits");
  }, [allTroops]);

  // Group units by their type
  const categories = ["Mounted", "Melee", "Ranged", "Flying"];
  const enginescategories = ["Siege Engine"];
  const monsterCategories = ["Dragons", "Beasts", "Elementals", "Giants"];
  const mercenaryCategories = ["Mercenary VI", "Mercenary VII", "Mercenary II"];

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

  const groupedUnitsMercenaries = mercenaryCategories.reduce(
    (acc, category) => {
      acc[category] = mercenariesUnits
        .filter((unit) => unit.category === category)
        .map((unit) => unit.unitName);
      return acc;
    },
    {}
  );

  const removeLocalData = () => {
    localStorage.clear();

    setSelectedLevel(uniqueLevels[0]);
    setSelectedCategory(uniqueCategories[0]);
    setSelectedName("");

    setEnemyStrengthThreshold(30);
    setUserPopulation(0);
    setDominancePopulation(0);
    setSelectedTroops([]);
    setSelectedSquadIndex(0);
    setSelectedMonsterTroops([]);

    setSelectedMercenaryTroops([]);
    setAuthorityPopulation(0);

    setSection("");

    localStorage.setItem("selectedTroops", []);
  };

  const [showManualModal, setShowManualModal] = useState(false);
  // Extract distinct filter values
  const uniqueLevels = [...new Set(EnemySquads.map((s) => s.level))].sort(
    (a, b) => b - a
  );

  const indexedArray = [...new Set(EnemySquads.map((s) => s.category))].map(
    (value, index) => [index, value]
  );
  indexedArray.sort((a, b) => b[0] - a[0]);

  const uniqueCategories = indexedArray.map((s) => s[1]);

  // Helpers
  const validateOrDefault = (value, validOptions, fallback) =>
    validOptions.includes(value) ? value : fallback;

  // Initialize state with validated stored values
  const [selectedLevel, setSelectedLevel] = useState(() =>
    validateOrDefault(
      loadFromStorage("selectedLevel"),
      uniqueLevels,
      uniqueLevels[0]
    )
  );

  const [selectedCategory, setSelectedCategory] = useState(() =>
    validateOrDefault(
      loadFromStorage("selectedCategory"),
      uniqueCategories,
      uniqueCategories[0]
    )
  );

  const [availableNames, setAvailableNames] = useState([]);
  const [selectedName, setSelectedName] = useState(
    () => loadFromStorage("selectedName") ?? ""
  );

  // Persist selections to storage
  useEffect(() => {
    saveToStorage("selectedLevel", selectedLevel);
  }, [selectedLevel]);

  useEffect(() => {
    saveToStorage("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    saveToStorage("selectedName", selectedName);
  }, [selectedName]);

  // Update names when level/category changes
  useEffect(() => {
    const filteredSquads = EnemySquads.filter(
      (s) => s.level === selectedLevel && s.category === selectedCategory
    );
    const names = filteredSquads.map((s) => s.name);
    setAvailableNames(names);

    // Reset selected name if invalid
    if (!names.includes(selectedName)) {
      setSelectedName(names[0] ?? "");
    }
  }, [selectedLevel, selectedCategory]);

  // Update selected squad index
  useEffect(() => {
    const index = EnemySquads.findIndex(
      (s) =>
        s.level === selectedLevel &&
        s.category === selectedCategory &&
        s.name === selectedName
    );
    setSelectedSquadIndex(index !== -1 ? index : null);

    if (selectedLevel >= 50) {
      if (selectedName === "TintMan - Rise of the Ancients") {
        setEnemyStrengthThreshold(80);
      }
      if (selectedName === "Shadow Invasion") {
        setEnemyStrengthThreshold(75);
      }
      if (selectedName === "Trial of Basilisk") {
        setEnemyStrengthThreshold(75);
      }
      if (selectedName === "Trial of Briareus") {
        setEnemyStrengthThreshold(55);
      }
      if (selectedName === "Ragnarök - Jörmungandr") {
        setEnemyStrengthThreshold(75);
      }
      if (selectedName === "Doomsday") {
        setEnemyStrengthThreshold(75);
      }
      if (selectedName === "Arachne's Swarm") {
        setEnemyStrengthThreshold(55);
      }
      if (selectedName === "Trial of the Chimera") {
        setEnemyStrengthThreshold(65);
      }
    }

    if (selectedLevel < 50) {
      setEnemyStrengthThreshold(30);
    }
  }, [selectedLevel, selectedCategory, selectedName]);

  const [section, setSection] = useState("guardsmen");
  const toggleSection = (index) => {
    if (section === index) {
      setSection("");
    } else {
      setSection(index);
    }
  };

  return (
    <>
      <div className="container">
        <div className="main-section">
          <InfoModal
            isOpen={showInfoModal}
            onClose={() => setShowInfoModal(false)}
          />
          <div className="section first-section">
            <div className="sub-container">
              <label className="sub-title">
                {t("select_enemy_squad")}
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                >
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(Number(e.target.value))}
                  >
                    {uniqueLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {uniqueCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {t(`categories.${cat}`)}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedName}
                    onChange={(e) => setSelectedName(e.target.value)}
                    disabled={availableNames.length === 0}
                  >
                    {availableNames.length === 0 ? (
                      <option>No names available</option>
                    ) : (
                      availableNames.map((name) => (
                        <option key={name} value={name}>
                          {t(`names.${name}`)}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </label>
              <div className="input-group">
                <div className="div-input-text">
                  <label className="sub-title sub-title-numbers">
                    <div className="icon-input-section">
                      <img
                        src="/leadership.svg"
                        alt="leadership img"
                        height={20}
                        width={20}
                      />
                      {t("leadership")}:
                    </div>
                    <input
                      type="string"
                      min={1}
                      value={userPopulation}
                      onChange={(e) =>
                        setUserPopulation(Number(e.target.value))
                      }
                    />
                  </label>
                  <label className="sub-title sub-title-numbers">
                    <div className="icon-input-section">
                      <img
                        src="/dominance.svg"
                        alt="dominance img"
                        height={20}
                        width={20}
                      />
                      {t("dominance")}:
                    </div>

                    <input
                      type="string"
                      min={1}
                      value={dominancePopulation}
                      onChange={(e) =>
                        setDominancePopulation(Number(e.target.value))
                      }
                    />
                  </label>

                  <label className="sub-title sub-title-numbers">
                    <div className="icon-input-section">
                      <img
                        src="/authority.svg"
                        alt="authority img"
                        height={20}
                        width={20}
                      />
                      {t("authority")}:
                    </div>

                    <input
                      type="string"
                      min={1}
                      value={authorityPopulation}
                      onChange={(e) =>
                        setAuthorityPopulation(Number(e.target.value))
                      }
                    />
                  </label>
                </div>
                <p className="sub-title-msg">{t("population-info")}</p>

                <label className="sub-title ">
                  {t("enemy_strength_threshold")}:{" "}
                  <input
                    className="sub-title-numbers"
                    type="number"
                    min={0}
                    max={100}
                    value={enemyStrengthThreshold}
                    onChange={(e) => setEnemyStrengthThreshold(e.target.value)}
                  />
                </label>
                <p className="sub-title-msg">{t("exclude_info")}</p>
              </div>
              <button onClick={removeLocalData} className="clear-button">
                {t("clear")}
              </button>

              <button
                className="manual-button"
                aria-label="Open Manual"
                onClick={() => setShowManualModal(true)}
              >
                <span>{t("manual")}</span>
              </button>
              <UserManualModal
                isOpen={showManualModal}
                onClose={() => setShowManualModal(false)}
              />
            </div>

            <div>
              <h3
                className={`title`}
                onClick={() => toggleSection("guardsmen")}
              >
                <span
                  className={`accordion-arrow ${
                    section === "guardsmen"
                      ? "accordion-arrow-green"
                      : "accordion-arrow-gray"
                  }`}
                >
                  {section === "guardsmen" ? "▲" : "▼"}
                </span>
                {t("guardsmen_troops")}
              </h3>
              {section === "guardsmen" && (
                <table className="troop-table">
                  <tbody className="unit-main-title">
                    {categories.map((category) => (
                      <tr className="unit-list">
                        <td colSpan="4">
                          <div className="unit-type-header">{t(category)}</div>
                          {groupedUnits[category].map((unit) => (
                            <label key={unit} className="unit-item">
                              <input
                                type="checkbox"
                                checked={selectedTroops.includes(unit)}
                                onChange={() => toggleTroop(unit)}
                              />

                              <img
                                src={`/troops/${unit}.png`}
                                alt="img"
                                className="unit-image"
                              />
                              <div className="image-name">
                                <span>{t(unit)}</span>
                              </div>
                            </label>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div>
              <h3
                className={`title`}
                onClick={() => toggleSection("specialist")}
              >
                <span
                  className={`accordion-arrow ${
                    section === "specialist"
                      ? "accordion-arrow-green"
                      : "accordion-arrow-gray"
                  }`}
                >
                  {section === "specialist" ? "▲" : "▼"}
                </span>
                {t("specialist_troops")}
              </h3>
              {section === "specialist" && (
                <table className="troop-table">
                  <tbody className="unit-main-title">
                    {categories.map((category) => (
                      <tr className="unit-list">
                        <td colSpan="4">
                          <div className="unit-type-header">{t(category)}</div>
                          {groupedUnitsSpecialist[category].map((unit) => (
                            <label key={unit} className="unit-item">
                              <input
                                type="checkbox"
                                checked={selectedTroops.includes(unit)}
                                onChange={() => toggleTroop(unit)}
                              />
                              <img
                                src={`/troops/${unit}.png`}
                                alt="img"
                                className="unit-image"
                              />
                              <div className="image-name">
                                <span>{t(unit)}</span>
                              </div>
                            </label>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div>
              <h3 className={`title`} onClick={() => toggleSection("engineer")}>
                <span
                  className={`accordion-arrow ${
                    section === "engineer"
                      ? "accordion-arrow-green"
                      : "accordion-arrow-gray"
                  }`}
                >
                  {section === "engineer" ? "▲" : "▼"}
                </span>
                {t("engineer_troops")}
              </h3>
              <table className="troop-table">
                {section === "engineer" && (
                  <tbody className="unit-main-title">
                    {enginescategories.map((category) => (
                      <tr className="unit-list">
                        <td colSpan="4">
                          <div className="unit-type-header">{t(category)}</div>
                          {groupedUnitsEngines[category].map((unit) => (
                            <label key={unit} className="unit-item">
                              <input
                                type="checkbox"
                                checked={selectedTroops.includes(unit)}
                                onChange={() => toggleTroop(unit)}
                              />
                              <img
                                src={`/troops/${unit}.png`}
                                alt="img"
                                className="unit-image"
                              />
                              <div className="image-name">
                                <span>{t(unit)}</span>
                              </div>
                            </label>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>

            <div>
              <h3 className={`title`} onClick={() => toggleSection("monster")}>
                <span
                  className={`accordion-arrow ${
                    section === "monster"
                      ? "accordion-arrow-green"
                      : "accordion-arrow-gray"
                  }`}
                >
                  {section === "monster" ? "▲" : "▼"}
                </span>
                {t("monster_troops")}
              </h3>
              <table className="troop-table">
                {section === "monster" && (
                  <tbody className="unit-main-title">
                    {monsterCategories.map((category) => (
                      <tr className="unit-list">
                        <td colSpan="4">
                          <div className="unit-type-header">{t(category)}</div>
                          {groupedUnitsMonsters[category].map((unit) => (
                            <label key={unit} className="unit-item">
                              <input
                                type="checkbox"
                                checked={selectedMonsterTroops.includes(unit)}
                                onChange={() => toggleMonsterTroop(unit)}
                              />
                              <img
                                src={`/troops/${unit}.png`}
                                alt="img"
                                className="unit-image"
                              />
                              <div className="image-name">
                                <span>{t(unit)}</span>
                              </div>
                            </label>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>

            <div>
              <h3
                className={`title`}
                onClick={() => toggleSection("mercenary")}
              >
                <span
                  className={`accordion-arrow ${
                    section === "mercenary"
                      ? "accordion-arrow-green"
                      : "accordion-arrow-gray"
                  }`}
                >
                  {section === "mercenary" ? "▲" : "▼"}
                </span>
                Mercenaries
              </h3>
              <table className="troop-table">
                {section === "mercenary" && (
                  <tbody className="unit-main-title">
                    {mercenaryCategories.map((category) => (
                      <tr className="unit-list">
                        <td colSpan="4">
                          <div className="unit-type-header">{t(category)}</div>
                          {groupedUnitsMercenaries[category].map((unit) => (
                            <label key={unit} className="unit-item">
                              <input
                                type="checkbox"
                                checked={selectedMercenaryTroops.includes(unit)}
                                onChange={() => toggleMeMercenaryTroop(unit)}
                              />
                              {t(unit)}
                            </label>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
          <div className="section second-section">
            <h2>{t("attack_troop_distribution")}</h2>

            {/* {results.length > 0 && (
              <>
                <button
                  onClick={() => setShowAnalysisModal(true)}
                  className="analysis-button"
                >
                  🧠 Savaş Analizini Göster
                </button>

                <BattleAnalysisModal
                  isOpen={showAnalysisModal}
                  onClose={() => setShowAnalysisModal(false)}
                  allTroops={allTroops}
                  userPopulation={userPopulation}
                  onSelectRecommended={(unitNames) =>
                    setSelectedTroops(unitNames)
                  }
                />
              </>
            )} */}
            {results.length === 0 ? (
              <p>{t("please_select_troops")}</p>
            ) : (
              <div>
                <h2>{t("main_troops")}</h2>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>{t("main_troop_type")}</th>
                      <th>{t("troop_unit")}</th>
                      <th>{t("leadership_column")}</th>
                      <th className="count">{t("count")}</th>
                      <th className="total-strength">{t("total_strength")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results
                      .sort((a, b) => {
                        if (a.unitStrength < b.unitStrength) return 1;
                        if (a.unitStrength > b.unitStrength) return -1;
                      })
                      .map(
                        ({
                          mainType,
                          unitName,
                          unitColor,
                          count,
                          totalStrength,
                          leadership,
                        }) => (
                          <tr
                            key={unitName}
                            style={{
                              background: `${unitColor}`,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <td>{t(mainType)}</td>
                            <td className="image-and-name">
                              <span>{t(unitName)}</span>
                            </td>
                            <td className="count">{leadership}</td>
                            <td className="count">{count}</td>
                            <td className="total-strength">
                              {totalStrength.toFixed(0)}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            )}

            {results.length === 0 ? (
              <p>{t("please_select_monsters")}</p>
            ) : (
              <div>
                <h2>{t("monster_units")}</h2>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>{t("monster_unit")}</th>
                      <th>{t("dominance_column")}</th>
                      <th className="count">{t("count")}</th>
                      <th className="total-strength">{t("total_strength")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dominanceResult
                      .sort((a, b) => {
                        if (a.unitStrength < b.unitStrength) return 1;
                        if (a.unitStrength > b.unitStrength) return -1;
                      })
                      .map(
                        ({
                          unitName,
                          count,
                          totalStrength,
                          leadership,
                          unitColor,
                        }) => (
                          <tr
                            key={unitName}
                            style={{
                              background: `${unitColor}`,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <td className="image-and-name">
                              <span>{t(unitName)}</span>
                            </td>
                            <td className="count">{leadership}</td>
                            <td className="count">{count}</td>
                            <td className="total-strength">
                              {totalStrength.toFixed(0)}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            )}

            {results.length === 0 ? (
              <p>{t("please_select_mercenaries")}</p>
            ) : (
              <div>
                <h2>{t("mercenary_units")}</h2>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>{t("mercenary_unit")}</th>
                      <th>{t("authority_column")}</th>
                      <th className="count">{t("count")}</th>
                      <th className="total-strength">{t("total_strength")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {authorityResult
                      .sort((a, b) => {
                        if (a.unitStrength < b.unitStrength) return 1;
                        if (a.unitStrength > b.unitStrength) return -1;
                      })
                      .map(
                        ({
                          unitName,
                          count,
                          totalStrength,
                          leadership,
                          unitColor,
                        }) => (
                          <tr
                            key={unitName}
                            style={{
                              background: `${unitColor}`,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <td className="image-and-name">
                              <span>{t(unitName)}</span>
                            </td>
                            <td className="count">{leadership}</td>
                            <td className="count">{count}</td>
                            <td className="total-strength">
                              {totalStrength.toFixed(0)}
                            </td>
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

export default Home;

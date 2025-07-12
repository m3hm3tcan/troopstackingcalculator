import React, { useState, useEffect } from "react";

const POPULATION_LIMIT = 30000;

const leadershipCosts = {
  Ranged: 1,
  Melee: 1,
  Mounted: 2,
  Flying: 20,
};

const baseStats = {
  Ranged: { strength: 50, strengthAgainst: { Melee: 52, Flying: 67 } },
  Melee: { strength: 50, strengthAgainst: { Mounted: 39, Beasts: 80 } },
  Mounted: {
    strength: 100,
    strengthAgainst: { Ranged: 65, Fortifications: 54 },
  },
  Flying: {
    strength: 10000,
    strengthAgainst: { Mounted: 395, Fortifications: 208 },
  },
};

const enemyData = {
  Harpy: { type: "Flying", strength: 100000, weakness: { Melee: 0.8 } },
  Briareus: { type: "Melee", strength: 70000, weakness: { Mounted: 0.45 } },
  CentaurVII: { type: "Mounted", strength: 57000, weakness: { Ranged: 0.6 } },
  Satyr: { type: "Ranged", strength: 70000, weakness: { Flying: 0.5 } },
};

const enemySquads = [
  {
    name: "Trial of Briareus",
    enemies: ["Harpy", "Briareus", "CentaurVII", "Satyr"],
  },
];

const troopTypes = {
  Ranged: {
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
  },
  Melee: {
    units: [
      "Spearman I",
      "Spearman II",
      "Spearman III",
      "Spearman IV",
      "Spearman V",
      "Heavy Halberdier VI",
      "Heavy Halberdier VII",
      "Smiter I",
      "Smiter II",
    ],
  },
  Mounted: {
    units: [
      "Rider I",
      "Rider II",
      "Rider III",
      "Rider IV",
      "Rider V",
      "Mounted Knight VI",
      "Mounted Knight VII",
      "Punisher I",
      "Punisher II",
    ],
  },
  Flying: {
    units: [
      "Battle Griffin V",
      "Battle Griffin VI",
      "Battle Griffin VII",
      "Corax I",
      "Corax II",
    ],
  },
};

function getUnitStats(type, index) {
  const base = baseStats[type];
  const strength = base.strength * Math.pow(1.8, index);
  const strengthAgainst = {};
  for (const key in base.strengthAgainst) {
    strengthAgainst[key] = base.strengthAgainst[key] + index * 0.5;
  }
  return { strength, strengthAgainst };
}

function calculateUnitEffectiveness(unitType, index, selectedSquad) {
  if (!selectedSquad) return null;

  const { strength, strengthAgainst } = getUnitStats(unitType, index);
  const enemies =
    enemySquads.find((s) => s.name === selectedSquad)?.enemies || [];

  if (enemies.length === 0) return null;

  let totalBonus = 0;

  enemies.forEach((enemyName) => {
    const enemy = enemyData[enemyName];
    let bonus = strength;

    if (strengthAgainst[enemy.type]) {
      bonus *= 1 + strengthAgainst[enemy.type] / 100;
    }
    totalBonus += bonus;
  });

  return totalBonus / enemies.length;
}

export default function TroopSelector() {
  const [selectedSquad, setSelectedSquad] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]); // seçilen birimler
  const [unitCounts, setUnitCounts] = useState({}); // otomatik hesaplanan adetler
  const [score, setScore] = useState(0);

  // Checkbox toggle
  const handleUnitToggle = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  // Seçilen birimlerin leadership costları
  const getLeadershipCost = (unit) => {
    const troopType = Object.entries(troopTypes).find(([type, { units }]) =>
      units.includes(unit)
    )?.[0];
    if (!troopType) return 0;
    return leadershipCosts[troopType];
  };

  // Birimlerin otomatik adet dağılımı (populasyon limiti içinde)
  useEffect(() => {
    if (selectedUnits.length === 0) {
      setUnitCounts({});
      setScore(0);
      return;
    }

    // Birimlerin etkinlik güçleri ve maliyetleri
    const unitsWithPower = selectedUnits
      .map((unit) => {
        const troopType = Object.entries(troopTypes).find(([type, { units }]) =>
          units.includes(unit)
        )?.[0];
        if (!troopType) return null;

        const index = troopTypes[troopType].units.indexOf(unit);
        const power =
          calculateUnitEffectiveness(troopType, index, selectedSquad) || 0;
        const cost = leadershipCosts[troopType];

        return { unit, power, cost };
      })
      .filter(Boolean);

    const totalPower = unitsWithPower.reduce((sum, u) => sum + u.power, 0);
    if (totalPower === 0) {
      setUnitCounts({});
      setScore(0);
      return;
    }

    // Toplam populasyon limiti kullanarak adetleri güç oranına göre hesapla
    const counts = {};
    let totalUsedPopulation = 0;

    unitsWithPower.forEach(({ unit, power, cost }) => {
      // Oran hesapla
      const ratio = power / totalPower;
      // Bu birime düşen toplam populasyon
      const allocatedPopulation = POPULATION_LIMIT * ratio;
      // Maliyete bölerek adet hesapla
      const unitCount = Math.floor(allocatedPopulation / cost);

      counts[unit] = unitCount;
      totalUsedPopulation += unitCount * cost;
    });

    setUnitCounts(counts);

    // Puanı hesapla
    let totalScore = 0;
    unitsWithPower.forEach(({ unit, power, cost }) => {
      const count = counts[unit];
      totalScore += power * count;
    });
    setScore(totalScore);
  }, [selectedUnits, selectedSquad]);

  // Disable kontrolü (güç düşükse disable)
  const DISABLE_THRESHOLD = 700;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="squad-select">Select Enemy Squad:</label>
        <select
          id="squad-select"
          value={selectedSquad}
          onChange={(e) => {
            setSelectedSquad(e.target.value);
            setSelectedUnits([]);
            setUnitCounts({});
            setScore(0);
          }}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="">-- Select --</option>
          {enemySquads.map((squad) => (
            <option key={squad.name} value={squad.name}>
              {squad.name}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {Object.entries(troopTypes).map(([type, { units }]) => (
          <div
            key={type}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <h3>{type}</h3>
            {units.map((unit, i) => {
              const effectiveness = calculateUnitEffectiveness(
                type,
                i,
                selectedSquad
              );
              const isDisabled =
                selectedSquad &&
                (effectiveness === null || effectiveness < DISABLE_THRESHOLD);
              const count = unitCounts[unit] || 0;

              return (
                <div
                  key={unit}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    id={unit}
                    checked={selectedUnits.includes(unit)}
                    onChange={() => handleUnitToggle(unit)}
                    disabled={isDisabled}
                  />
                  <label htmlFor={unit} style={{ flexGrow: 1 }}>
                    {unit}{" "}
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: isDisabled ? "red" : "green",
                        marginLeft: "6px",
                      }}
                    >
                      {effectiveness ? effectiveness.toFixed(0) : "-"}
                    </span>
                  </label>
                  <div style={{ minWidth: "40px", textAlign: "right" }}>
                    {count > 0 ? count.toLocaleString() : ""}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>
          Total Population Used:{" "}
          <strong>
            {Object.entries(unitCounts).reduce((sum, [unit, count]) => {
              return sum + count * getLeadershipCost(unit);
            }, 0)}{" "}
            / {POPULATION_LIMIT}
          </strong>
        </p>
        <h2>Total Score: {score.toFixed(2)}</h2>
      </div>
    </div>
  );
}

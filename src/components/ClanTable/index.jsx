import { useState, useEffect } from "react";
import "./index.css";
import stringSimilarity from "string-similarity";

function ClanTable({ memberList = [], chestInfo = [] }) {
  const [selectedMember, setSelectedMember] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Level definitions
  const levelHeaders = [5, 10, 15, 20, 25, 30, 35];

  // Category definitions
  const categoryHeaders = [
    "Citadel",
    "Arena",
    "Clan Wealth",
    "Ancient of Rise",
    "Olimpos",
    "Ragnarok",
    "Other Events",
  ];

  // ----------- 🔍 FIXED: parseChestInfo now works for "string" ----------
  const parseChestInfo = (chestText = "") => {
    const text = chestText.toLowerCase().trim();
    const levelMatch = text.match(/level\s*(\d+)/);
    const level = levelMatch ? parseInt(levelMatch[1]) : null;

    let category = "Unknown";
    if (text.includes("citadel")) category = "Citadel";
    else if (text.includes("arena")) category = "Arena";
    else if (text.includes("wealth")) category = "Clan Wealth";
    else if (text.includes("ancient") || text.includes("vault"))
      category = "Ancient of Rise";
    else if (text.includes("olimpos")) category = "Olimpos";
    else if (text.includes("ragnarok")) category = "Ragnarok";
    else if (text.includes("runic")) category = "Other Events";

    return { level, category };
  };

  // ----------- 🧠 Name fuzzy-match fix ----------
  const normalizeName = (name) => {
    if (!name) return "Unknown";

    const memberNames = memberList.map((m) => m.name);
    const matches = stringSimilarity.findBestMatch(name, memberNames);
    return matches.bestMatch.rating >= 0.65 ? matches.bestMatch.target : name;
  };

  // ------------------- 📊 MAIN DATA AGGREGATOR -------------------
  const aggregateMembers = (members, chestData) => {
    const aggregated = {};

    // Create empty rows for all members
    members.forEach((m) => {
      aggregated[m.name] = {
        name: m.name,
        totalPoints: 0,
      };
      levelHeaders.forEach((lvl) => (aggregated[m.name][`level${lvl}`] = 0));
      categoryHeaders.forEach((cat) => (aggregated[m.name][cat] = 0));
    });

    // Process ALL chest entries
    chestData.forEach((item) => {
      const rawName = item.from || "Unknown";
      const normalizedName = normalizeName(rawName);

      if (!aggregated[normalizedName]) return;

      const sources = Array.isArray(item.source) ? item.source : [];

      sources.forEach((entry) => {
        const { level, category } = parseChestInfo(entry);
        const row = aggregated[normalizedName];

        if (levelHeaders.includes(level)) {
          row[`level${level}`]++;
          row.totalPoints++;
        }

        if (categoryHeaders.includes(category)) {
          row[category]++;
          row.totalPoints++;
        }
      });
    });

    // Sort by total points descending
    return Object.values(aggregated).sort(
      (a, b) => b.totalPoints - a.totalPoints
    );
  };

  const aggregatedMembers = aggregateMembers(memberList, chestInfo);

  const clanTotalChests = aggregatedMembers.reduce(
    (sum, m) => sum + m.totalPoints,
    0
  );

  const uniqueMembers = ["All", ...memberList.map((m) => m.name)];

  const displayedMembers =
    selectedMember === "All"
      ? aggregatedMembers
      : aggregatedMembers.filter(
          (m) => m.name.toLowerCase() === selectedMember.toLowerCase()
        );

  const getWeekInfo = () => {
    if (!chestInfo.length) return null;

    // Take the most recent record
    const latest = chestInfo[chestInfo.length - 1];

    if (!latest.timestamp) return null;

    const [week, year] = latest.timestamp.split("_");
    return { week, year };
  };

  const weekInfo = getWeekInfo();

  return (
    <div className="table-wrapper">
      <div className="clan-summary">
        {/* <h2>Clan Chest Summary</h2> */}
        {weekInfo && (
          <div className="week-info">
            <h3>
              Week {weekInfo.week} - {weekInfo.year}
            </h3>
          </div>
        )}
        <p>
          <strong>Total Clan Chests:</strong> {clanTotalChests}
        </p>
      </div>

      {isMobile && (
        <div className="mobile-filter">
          <label>Select Member:</label>
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
          >
            {uniqueMembers.map((member) => (
              <option key={member}>{member}</option>
            ))}
          </select>
        </div>
      )}

      <table className="clan-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Total Chests</th>
            {levelHeaders.map((lvl) => (
              <th key={lvl}>Lvl {lvl}</th>
            ))}
            {categoryHeaders.map((cat) => (
              <th key={cat}>{cat}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {displayedMembers.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td className="total-point">{m.totalPoints}</td>

              {levelHeaders.map((lvl) => (
                <td key={lvl}>{m[`level${lvl}`]}</td>
              ))}

              {categoryHeaders.map((cat) => (
                <td key={cat}>{m[cat]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClanTable;

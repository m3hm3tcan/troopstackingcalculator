import { useState, useEffect } from "react";
import "./index.css";

function ClanTable({ members }) {
  const [selectedMember, setSelectedMember] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const levelHeaders = [5, 10, 15, 20, 25, 30, 35];
  const categoryHeaders = [
    "Citadel",
    "Arena",
    "Clan Wealth",
    "Ancient of Rise",
    "Olimpos",
    "Ragnarok",
  ];

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

    return { level, category };
  };

  const aggregateMembers = (data) => {
    const aggregated = {};

    data.forEach((item) => {
      const name = item.from || item.name || "Unknown";
      const { level, category } = parseChestInfo(item.source || item.chest);

      if (!aggregated[name]) {
        aggregated[name] = { name, totalPoints: 0, weekid: item.weekid || "Unknown" };
        levelHeaders.forEach((lvl) => (aggregated[name][`level${lvl}`] = 0));
        categoryHeaders.forEach((cat) => (aggregated[name][cat] = 0));
      }

      const m = aggregated[name];

      // Count level-based chest
      if (levelHeaders.includes(level)) {
        m[`level${level}`]++;
        m.totalPoints++;
      }

      // Count category chest (Citadel, Arena, etc.)
      if (categoryHeaders.includes(category)) {
        m[category]++;
        m.totalPoints++;
      }
    });

    return Object.values(aggregated).sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  };

  const aggregatedMembers = aggregateMembers(members);
  const weekInfo = aggregatedMembers.length > 0 ? aggregatedMembers[0].weekid : "Unknown";
  const clanTotalChests = aggregatedMembers.reduce(
    (sum, member) => sum + member.totalPoints,
    0
  );

  const uniqueMembers = ["All", ...new Set(aggregatedMembers.map((m) => m.name))];
  const displayedMembers =
    selectedMember === "All"
      ? aggregatedMembers
      : aggregatedMembers.filter(
          (m) => m.name.toLowerCase() === selectedMember.toLowerCase()
        );

  return (
    <div className="table-wrapper">
      <div className="clan-summary">
        <h2>Clan Chest Summary</h2>
        <p>
          <strong>Week:</strong> {weekInfo}
        </p>
        <p>
          <strong>Total Clan Chests:</strong> {clanTotalChests}
        </p>
      </div>

      {isMobile && (
        <div className="mobile-filter">
          <label htmlFor="memberSelect">Select Member:</label>
          <select
            id="memberSelect"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
          >
            {uniqueMembers.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>
        </div>
      )}

      <table className="clan-table">
        <thead>
          <tr>
            <th>Clan Member Name</th>
            <th>Total Points</th>
            {levelHeaders.map((lvl) => (
              <th key={lvl}>Level {lvl}</th>
            ))}
            {categoryHeaders.map((cat) => (
              <th key={cat}>{cat}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedMembers.map((m, i) => (
            <tr key={i}>
              <td data-label="Clan Member Name">{m.name}</td>
              <td data-label="Total Points" className="total-point">
                {m.totalPoints}
              </td>
              {levelHeaders.map((lvl) => (
                <td key={lvl} data-label={`Level ${lvl}`}>
                  {m[`level${lvl}`]}
                </td>
              ))}
              {categoryHeaders.map((cat) => (
                <td key={cat} data-label={cat}>
                  {m[cat]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClanTable;

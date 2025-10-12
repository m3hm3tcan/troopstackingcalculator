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

  const normalizeName = (name) => {
    if (!name) return "Unknown";
    const memberNames = memberList.map((m) => m.name);
    const matches = stringSimilarity.findBestMatch(name, memberNames);
    return matches.bestMatch.rating > 0.7 ? matches.bestMatch.target : name;
  };

  const aggregateMembers = (members, chestData) => {
    const aggregated = {};

    // Initialize all members with 0 stats
    members.forEach((m) => {
      aggregated[m.name] = {
        name: m.name,
        totalPoints: 0,
      };
      levelHeaders.forEach((lvl) => (aggregated[m.name][`level${lvl}`] = 0));
      categoryHeaders.forEach((cat) => (aggregated[m.name][cat] = 0));
    });

    chestData.forEach((item) => {
      const rawName = item.from || "Unknown";
      const name = normalizeName(rawName);

      if (!aggregated[name]) return;

      const { level, category } = parseChestInfo(item.source || item.chest);
      const m = aggregated[name];

      if (levelHeaders.includes(level)) {
        m[`level${level}`]++;
        m.totalPoints++;
      }

      if (categoryHeaders.includes(category)) {
        m[category]++;
        m.totalPoints++;
      }
    });

    // Sort by totalPoints descending
    return Object.values(aggregated).sort(
      (a, b) => b.totalPoints - a.totalPoints
    );
  };

  const aggregatedMembers = aggregateMembers(memberList, chestInfo);
  const clanTotalChests = aggregatedMembers.reduce(
    (sum, member) => sum + member.totalPoints,
    0
  );

  const uniqueMembers = ["All", ...memberList.map((m) => m.name)];
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

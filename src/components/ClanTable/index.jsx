import "./index.css";

function ClanTable({ members }) {
  const headers = [
    "Clan Member Name",
    "Total Points",
    "Level 5",
    "Level 10",
    "Level 15",
    "Level 20",
    "Level 25",
    "Level 30",
    "Level 35",
    "Normal Crypt",
    "Rare Crypt",
    "Epic Crypt",
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

    let rarity = "Normal";
    if (text.includes("rare")) rarity = "Rare";
    else if (text.includes("epic")) rarity = "Epic";

    let category = "Unknown";
    if (text.includes("crypt")) category = "Crypt";
    else if (text.includes("citadel")) category = "Citadel";
    else if (text.includes("arena")) category = "Arena";
    else if (text.includes("wealth")) category = "Clan Wealth";
    else if (text.includes("ancient")) category = "Ancient of Rise";
    else if (text.includes("olimpos")) category = "Olimpos";
    else if (text.includes("ragnarok")) category = "Ragnarok";

    return { level, rarity, category };
  };

  const aggregateMembers = (data) => {
    const aggregated = {};

    data.forEach((item) => {
      const name = item.from || item.name || "Unknown";
      const { level, rarity, category } = parseChestInfo(
        item.source || item.chest
      );

      if (!aggregated[name]) {
        aggregated[name] = {
          name,
          totalPoints: 0,
          level5: 0,
          level10: 0,
          level15: 0,
          level20: 0,
          level25: 0,
          level30: 0,
          level35: 0,
          normalCrypt: 0,
          rareCrypt: 0,
          epicCrypt: 0,
          citadel: 0,
          arena: 0,
          clanWealth: 0,
          ancientOfRise: 0,
          olimpos: 0,
          ragnarok: 0,
          weekid: item.weekid || "Unknown",
        };
      }

      const m = aggregated[name];

      if (level && m[`level${level}`] !== undefined) m[`level${level}`]++;
      if (category === "Crypt") {
        if (rarity === "Rare") m.rareCrypt++;
        else if (rarity === "Epic") m.epicCrypt++;
        else m.normalCrypt++;
      } else if (category === "Citadel") m.citadel++;
      else if (category === "Arena") m.arena++;
      else if (category === "Clan Wealth") m.clanWealth++;
      else if (category === "Ancient of Rise") m.ancientOfRise++;
      else if (category === "Olimpos") m.olimpos++;
      else if (category === "Ragnarok") m.ragnarok++;

      m.totalPoints++;
    });

    return Object.values(aggregated).sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  };

  const aggregatedMembers = aggregateMembers(members);

  const clanTotalChests = aggregatedMembers.reduce(
    (sum, member) => sum + member.totalPoints,
    0
  );

  const weekInfo =
    aggregatedMembers.length > 0 ? aggregatedMembers[0].weekid : "Unknown";

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

      <table className="clan-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {aggregatedMembers.map((m, i) => (
            <tr key={i}>
              <td data-label="Clan Member Name">{m.name}</td>
              <td data-label="Total Points" className="total-point">
                {m.totalPoints}
              </td>
              <td data-label="Level 5">{m.level5}</td>
              <td data-label="Level 10">{m.level10}</td>
              <td data-label="Level 15">{m.level15}</td>
              <td data-label="Level 20">{m.level20}</td>
              <td data-label="Level 25">{m.level25}</td>
              <td data-label="Level 30">{m.level30}</td>
              <td data-label="Level 35">{m.level35}</td>
              <td data-label="Normal Crypt">{m.normalCrypt}</td>
              <td data-label="Rare Crypt">{m.rareCrypt}</td>
              <td data-label="Epic Crypt">{m.epicCrypt}</td>
              <td data-label="Citadel">{m.citadel}</td>
              <td data-label="Arena">{m.arena}</td>
              <td data-label="Clan Wealth">{m.clanWealth}</td>
              <td data-label="Ancient of Rise">{m.ancientOfRise}</td>
              <td data-label="Olimpos">{m.olimpos}</td>
              <td data-label="Ragnarok">{m.ragnarok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClanTable;

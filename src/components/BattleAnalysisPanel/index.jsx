import React from "react";

const BattleAnalysisPanel = ({
  allTroops,
  userPopulation,
  onSelectRecommended,
}) => {
  if (!allTroops || allTroops.length === 0 || userPopulation <= 0) {
    return <p>Gösterilecek analiz verisi bulunamadı.</p>;
  }

  // En yüksek skora sahip birlikleri al (top 10)
  const topTroops = [...allTroops]
    .filter((t) => typeof t.score === "number" && t.score > 0)
    .slice(0, 10);

  // Toplam baz etkili güç (skora dayalı değil, dağıtım için)
  const totalStrength = topTroops.reduce((acc, t) => acc + t.baseStrength, 0);

  // Her birlik için önerilen gönderim adedi
  const recommended = topTroops.map((t) => {
    const proportion = t.baseStrength / totalStrength;
    const count = Math.floor((userPopulation * proportion) / t.leadership);
    return {
      ...t,
      count,
    };
  });

  return (
    <div className="battle-analysis">
      <h3>🎯 Düşmana Karşı En Etkili Birlikler</h3>
      <table>
        <thead>
          <tr>
            <th>Birlik Adı</th>
            <th>Tür</th>
            <th>Skor</th>
            <th>Bonus (%)</th>
            <th>Önerilen Sayı</th>
          </tr>
        </thead>
        <tbody>
          {recommended.map((unit) => (
            <tr key={unit.unitName}>
              <td>{unit.unitName}</td>
              <td>{unit.mainType}</td>
              <td>{Math.round(unit.score)}</td>
              <td>{unit.strengthAgainstPercent || 0}</td>
              <td>{unit.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="suggest-button"
        onClick={() =>
          onSelectRecommended(recommended.map((unit) => unit.unitName))
        }
      >
        💡 Önerilen Birlikleri Seç
      </button>
    </div>
  );
};

export default BattleAnalysisPanel;

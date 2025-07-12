import React from "react";
import BattleAnalysisPanel from "../BattleAnalysisPanel";
import "./index.css";

const BattleAnalysisModal = ({
  isOpen,
  onClose,
  allTroops,
  userPopulation,
  onSelectRecommended, // yeni: önerilen birlikleri seçme fonksiyonu
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <BattleAnalysisPanel
          allTroops={allTroops}
          userPopulation={userPopulation}
          onSelectRecommended={onSelectRecommended}
        />
      </div>
    </div>
  );
};

export default BattleAnalysisModal;

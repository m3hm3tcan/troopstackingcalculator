import React from "react";
import "./InfoModal.css";

function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        <div className="modal-header">
          <h2>ℹ️ Troop Attack Calculator - Information</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <p>
            This tool helps you optimize your troop selection and distribution
            when attacking enemy squads based on their unit types and
            weaknesses.
          </p>

          <h4>🔧 UI Inputs & How They Work</h4>
          <ul>
            <li>
              <strong>Enemy Squad Selector:</strong> A dropdown where you choose
              an enemy squad (including its level and type).
            </li>
            <li>
              <strong>Total Population Input:</strong> The total number of troop
              population you want to deploy (e.g., 12,000).
            </li>
            <li>
              <strong>Troop Selection Checkboxes:</strong> Troops are grouped
              under "Guardsmen" and "Specialists" by their main type (Ranged,
              Melee, Mounted, Flying, etc.). You can select multiple individual
              troops to include in the attack.
            </li>
            <li>
              <strong>Enemy Bonus Threshold:</strong> An optional input that
              controls the sensitivity of filtering. If an enemy has a strength
              bonus against a troop type higher than this threshold, troops of
              that type will be excluded.
            </li>
          </ul>

          <h4>⚙️ UI Behavior & Interactions</h4>
          <ul>
            <li>
              Changing the enemy squad dynamically updates the troop
              availability.
            </li>
            <li>
              The troop list is filtered to remove any units that belong to a
              unit type the enemy is especially strong against (based on the
              threshold you define).
            </li>
            <li>
              After selecting your troops, the calculator computes how many of
              each troop to send based on their effectiveness and your available
              population.
            </li>
            <li>
              The result shows a table listing the selected units, the number of
              each to deploy, their main troop type, and the total effective
              strength.
            </li>
          </ul>

          <h4>🧮 Strength Calculation Formula</h4>
          <pre>
            {`BaseStrength = InitialStrength × (1 + growthRatio)^levelIndex
AdjustedStrength = BaseStrength × (1 + bonusRatio × MaxBonus / 100)`}
          </pre>
          <p>
            <strong>InitialStrength</strong>: Base power of the troop type.{" "}
            <strong>growthRatio</strong> accounts for troop tier level.{" "}
            <strong>MaxBonus</strong> is the highest percentage bonus against
            the current enemy.
          </p>

          <h4>📐 Mathematical Formula: Troop Distribution</h4>
          <p>
            The distribution algorithm ensures each selected troop contributes
            equally to the total strength using inverse weighting:
          </p>
          <pre>
            {`Weight[i] = 1 / AdjustedStrength[i]
TotalWeight = Σ Weight[i] for all i

Count[i] = floor((TotalPopulation × Weight[i]) / TotalWeight)

TotalStrength[i] = Count[i] × AdjustedStrength[i]`}
          </pre>
          <p className="note">
            This ensures stronger troops get fewer units, while weaker troops
            get more, balancing the total power output evenly across all
            selected units.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;

import "./index.css"; // Create CSS for styling if needed

const UserManualModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2>User Manual / Instructions</h2>
        <div className="manual-content">
          <h3>🪖 Step-by-Step Instructions</h3>
          <ol>
            <li>
              <strong>Select Enemy Squad:</strong> Choose the target enemy from
              the dropdown. Listed as: <br />
              <code>Lvl X - Category - Name</code>
            </li>
            <li>
              <strong>Enter Your Population:</strong> Input how much population
              you want to use for the attack.
            </li>
            <li>
              <strong>Set Enemy Strength Threshold:</strong> Troops countered
              stronger than this threshold will be excluded automatically.
            </li>
            <li>
              <strong>Select Troops:</strong> Tick checkboxes for troops you
              want to consider. Grouped under Guardsmen & Specialist.
            </li>
            <li>
              <strong>View Attack Troops Distribution:</strong> See calculated
              troop counts, leadership usage, and troop types.
            </li>
          </ol>

          <h3>📌 Notes</h3>
          <ul>
            <li>
              <strong>Leadership:</strong> Higher leadership means more
              population cost per troop.
            </li>
            <li>
              All troop values are based on your current selections and enemy
              squad stats.
            </li>
            <li>
              Use the <strong>Clear</strong> button to reset all settings and
              clear local storage.
            </li>
          </ul>

          <h3>🧮 Formula</h3>
          <pre>
            EffectiveStrength = baseStrength / leadership totalInverseStrength =
            ∑ (1 / effectiveStrength) count = floor((userPopulation * (1 /
            effectiveStrength) / totalInverseStrength) / leadership)
          </pre>
        </div>
      </div>
    </div>
  );
};

export default UserManualModal;

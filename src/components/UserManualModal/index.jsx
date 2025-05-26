import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const UserManualModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <div className="user-manual">
          <h3>{t("userManual.overviewTitle")}</h3>
          <p>{t("userManual.overviewText")}</p>

          <h3>{t("userManual.gettingStartedTitle")}</h3>
          <ul>
            {t("userManual.gettingStartedPoints", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>

          <h3>{t("userManual.inputsControlsTitle")}</h3>
          <ul>
            {t("userManual.inputsControlsPoints", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>

          <h3>{t("userManual.troopSelectionTitle")}</h3>
          <p>{t("userManual.troopSelectionIntro")}</p>
          <ul>
            {t("userManual.troopTypes", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>
          <p>{t("userManual.troopSelectionNote")}</p>

          <h3>{t("userManual.resultsTitle")}</h3>
          <ul>
            {t("userManual.resultsPoints", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>

          <h3>{t("userManual.featuresTitle")}</h3>
          <ul>
            {t("userManual.featuresPoints", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>

          <h3>{t("userManual.tipsTitle")}</h3>
          <ul>
            {t("userManual.tipsPoints", { returnObjects: true }).map(
              (tip, i) => (
                <li key={i}>{tip}</li>
              )
            )}
          </ul>

          <h3>{t("userManual.troubleshootingTitle")}</h3>
          <ul>
            {t("userManual.troubleshootingPoints", { returnObjects: true }).map(
              ({ label, text }, i) => (
                <li key={i}>
                  <strong>{label}</strong> {text}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserManualModal;

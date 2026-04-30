import "./KriptoInfo.css";
import { useTranslation } from "react-i18next";

const KriptoInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="kripto-info">
      <div className="hero">
        <h1>{t("mouseAutomation.title")}</h1>
        <p>{t("mouseAutomation.subtitle")}</p>

        <p>
          <a
            href="/taytay/TayTayMouse.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("mouseAutomation.download")}
          </a>
        </p>
      </div>

      <section>
        <h2>{t("mouseAutomation.aboutTitle")}</h2>
        <p>{t("mouseAutomation.aboutText")}</p>
      </section>

      <section>
        <h2>{t("mouseAutomation.featuresTitle")}</h2>
        <ul>
          <li>{t("mouseAutomation.features.recording")}</li>
          <li>{t("mouseAutomation.features.playback")}</li>
          <li>{t("mouseAutomation.features.randomness")}</li>
          <li>{t("mouseAutomation.features.repeat")}</li>
          <li>{t("mouseAutomation.features.hotkey")}</li>
          <li>{t("mouseAutomation.features.overlay")}</li>
          <li>{t("mouseAutomation.features.speedup")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("mouseAutomation.usageTitle")}</h2>

        {[1, 2, 3, 4].map((step) => (
          <div className="step" key={step}>
            <h3>{t(`mouseAutomation.steps.${step}.title`)}</h3>
            <p>{t(`mouseAutomation.steps.${step}.text`)}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{t("mouseAutomation.settingsTitle")}</h2>

        {["delay", "random", "repeat"].map((setting) => (
          <div className="setting-card" key={setting}>
            <h3>{t(`mouseAutomation.settings.${setting}.title`)}</h3>
            <p>{t(`mouseAutomation.settings.${setting}.text`)}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{t("mouseAutomation.hotkeysTitle")}</h2>
        <div className="hotkey">
          <span>D</span>
          <p>{t("mouseAutomation.hotkeys.stop")}</p>
        </div>
      </section>

      <section>
        <h2>{t("mouseAutomation.warningTitle")}</h2>
        <p className="warning">{t("mouseAutomation.warningText")}</p>
      </section>
    </div>
  );
};

export default KriptoInfo;

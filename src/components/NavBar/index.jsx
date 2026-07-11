import { Link } from "react-router-dom";
import "../../i18n";
import "./index.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const isTurkish = (i18n.resolvedLanguage || i18n.language).startsWith("tr");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header-cover">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 className="navbar-title">
            <img src="hunililer_icon.png" alt="Logo" className="logo-image" />
            <span>{t("title")}</span>
          </h1>

          <span className="navbar-subtitle title-italic">{t("subtitle")}</span>
          <div className="navbar-links">
            <Link to="/" className="nav-link">
              {isTurkish ? "Ana Sayfa" : "Home"}
            </Link>
            <Link to="/clan-chest-info" className="nav-link">
              {isTurkish ? "Klan Sandığı Bilgisi" : "Clan Chest Info"}
            </Link>
            <Link to="/clan-chest-collector" className="nav-link">
              {isTurkish ? "Sandık Otomasyonu" : "Chest Collector App"}
            </Link>
          </div>
        </div>

        <div className="header-btn-group">
          <select
            id="language"
            onChange={changeLanguage}
            value={i18n.language}
            className="language-dd"
          >
            <option value="tr">Turkish</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;

import { Link } from "react-router-dom";
import "../../i18n";
import "./index.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <nav className="navbar">
        <div>
          <h1>
            <img src="funnel.svg" height={30} width={30} alt="Logo" />
            {t("title")}
          </h1>
          <span className="navbar-subtitle title-italic">{t("subtitle")}</span>
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
      <div>
        <div className="navbar-bottom">
          <Link to="/clan" className="nav-link">
            {t("clan")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

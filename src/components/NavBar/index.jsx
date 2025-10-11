import "../../i18n";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className="navbar">
      <div>
        <h1>
          <img src="funnel.svg" height={30} width={30} />
          {t("title")}
        </h1>
        <span className="navbar-subtitle title-italic">{t("subtitle")}</span>
        {/* <p className="navbar-subtitle">{t("description")}</p> */}
      </div>
      <div>
        <div className="header-btn-group">
          <div></div>
          <div>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

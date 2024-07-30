import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>{t("settings")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={handleToggleTheme}>
        Cambiar a tema {currentTheme === "light" ? "oscuro" : "claro"}
      </button>
    </div>
  );
};

export default Settings;

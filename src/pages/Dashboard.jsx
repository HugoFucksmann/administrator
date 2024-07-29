import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("dashboard")}</h1>
      <p>{t("welcome")}!</p>
      <nav>
        <ul>
          <li>
            <Link to="/projects">{t("projects")}</Link>
          </li>
          <li>
            <Link to="/tasks">{t("tasks")}</Link>
          </li>
          <li>
            <Link to="/settings">{t("settings")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;

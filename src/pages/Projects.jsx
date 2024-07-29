import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const addProject = () => {
    const project = prompt(t("addProject"));
    if (project) {
      const newProjects = [...projects, project];
      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects));
    }
  };

  return (
    <div>
      <h1>{t("projects")}</h1>
      <button onClick={addProject}>{t("addProject")}</button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

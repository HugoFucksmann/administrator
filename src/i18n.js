import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        dashboard: "Dashboard",
        projects: "Projects",
        tasks: "Tasks",
        settings: "Settings",
        addProject: "Add Project",
        addTask: "Add Task",
        // Add more translations as needed
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido",
        dashboard: "Tablero",
        projects: "Proyectos",
        tasks: "Tareas",
        settings: "Configuraciones",
        addProject: "Agregar Proyecto",
        addTask: "Agregar Tarea",
        // Add more translations as needed
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

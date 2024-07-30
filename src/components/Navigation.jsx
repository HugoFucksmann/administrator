import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";

import Settings from "../pages/Settings";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import RecoverPassword from "../pages/login/RecoverPassword";
import Sidebar from "./Sidebar";
import ViewLayout from "./ViewLayout";
import TaskPage from "../pages/Tasks/Tasks";

const Navigation = () => {
  const { user } = useAuth();

  return (
    <Router>
      {user ? (
        <ViewLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ViewLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
};

export default Navigation;

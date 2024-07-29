import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SidebarContainer = styled.aside`
  width: ${(props) => (props.expanded === "true" ? "200px" : "40px")};
  background: ${(props) => props.theme.colors.card};

  padding: 6px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  height: 100vh;

  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.1)" : "transparent"};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconLabel = styled.span`
  margin-left: 10px;
  display: ${(props) => (props.expanded === "true" ? "inline" : "none")};
`;

const Sidebar = () => {
  const [expanded, setExpanded] = useState("false");
  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => {
    setExpanded((prev) => (prev === "true" ? "false" : "true"));
  };

  const sidebarItems = [
    { icon: <DashboardIcon />, label: "Dashboard", route: "/" },
    { icon: <FolderIcon />, label: "Proyectos", route: "/projects" },
    { icon: <AssignmentIcon />, label: "Tareas", route: "/tasks" },
    { icon: <SettingsIcon />, label: "Configuración", route: "/settings" },
  ];

  return (
    <SidebarContainer expanded={expanded}>
      <IconButton
        onClick={toggleSidebar}
        style={{ alignSelf: "flex-start", marginBottom: 20 }}
        sx={{
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      {sidebarItems.map((item, index) => (
        <Tooltip
          key={index}
          title={expanded === "true" ? "" : item.label}
          placement="right"
          onClick={() => navigate(item.route)}
        >
          <IconContainer
            as={Link}
            to={item.route}
            active={location.pathname === item.route}
          >
            {item.icon}
            <IconLabel expanded={expanded}>{item.label}</IconLabel>
          </IconContainer>
        </Tooltip>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

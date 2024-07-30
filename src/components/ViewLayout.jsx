import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #ebebeb;
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  height: calc(100vh - 80px);
  overflow: auto;
  box-shadow: 3px 3px 6px rgba(171, 171, 207, 0.9);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Breadcrumbs = styled.div`
  font-size: 16px;
`;

const ViewLayout = ({ children }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        {/*  <TopBar>
          <Breadcrumbs>
            {pathnames.map((path, index) => (
              <span key={index}>
                {path}
                {index < pathnames.length - 1 ? " > " : ""}
              </span>
            ))}
          </Breadcrumbs>
        </TopBar> */}
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default ViewLayout;

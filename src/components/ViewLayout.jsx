import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #ebebeb;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  height: calc(100vh - 80px);
`;

const ViewLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default ViewLayout;

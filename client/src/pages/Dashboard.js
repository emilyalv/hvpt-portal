import React from "react";
// import { Container } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import ModuleList from "../components/ModulesList";

//Get The Modules for this user; Pass the Modules to the ModuleTable component

const Dashboard = () => {
  return (
    <Container>
      <h1
        style={{
          color: "#072AC8",
          paddingTop: "35px",
          paddingBottom: "35px",
          fontFamily: "Open Sans",
        }}
      >
        My Learning Dashboard
      </h1>
      <ModuleList />
    </Container>
  );
};

export default Dashboard;

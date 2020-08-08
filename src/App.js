import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./styles.css";
//components
import AddAgent from "./components/AddAgent";
import Dog from "./components/Dog";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SupportTeam from "./components/SupportTeam";
import AgentCard from "./components/AgentCard";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import UpdateAgentForm from "./components/UpdateAgentForm";
//Private route and Context
import PrivateRoute from "./components/PrivateRoute";
import { AgentContext, AgentProvider } from "./Context/AgentsContext";

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Dog /> */}
      <div>
        <AgentProvider>
          <PrivateRoute exact path="/support-team" component={SupportTeam} />
        </AgentProvider>
        <AgentProvider>
          <PrivateRoute
            exact
            path="/update-agent/:id"
            component={UpdateAgentForm}
          />
        </AgentProvider>
        <AgentProvider>
          <Route path="/agents/:id" component={AgentCard} />
        </AgentProvider>
        <AgentProvider>
          <PrivateRoute exact path="/add-agent" component={AddAgent} />
        </AgentProvider>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={Home} />

        {/* <AgentProvider>
          <PrivateRoute exact path="/support-team" component={SupportTeam} />

          <PrivateRoute
            exact
            path="/update-agent/:id"
            component={UpdateAgentForm}
          />

          <Route path="/agents/:id" component={AgentCard} />

          <PrivateRoute exact path="/add-agent" component={AddAgent} />

          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Home} />
        </AgentProvider> */}
      </div>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./styles.css";
//components
import AddPlayer from "./components/AddPlayer";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Players from "./components/Players";
import PlayerCard from "./components/PlayerCard";
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
      <div>
        <AgentProvider>
          <PrivateRoute exact path="/players" component={Players} />
        </AgentProvider>
        <AgentProvider>
          <PrivateRoute
            exact
            path="/update-player/:id"
            component={UpdateAgentForm}
          />
        </AgentProvider>
        <AgentProvider>
          <Route path="/agents/:id" component={PlayerCard} />
        </AgentProvider>
        <AgentProvider>
          <PrivateRoute exact path="/add-player" component={AddPlayer} />
        </AgentProvider>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={Home} />
      </div>
      <Footer />
    </div>
  );
}

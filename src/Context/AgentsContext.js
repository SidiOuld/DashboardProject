import React, { createContext, useState, useEffect } from "react";
import axiosWithAuth from "../components/util/axiosWithAuth";

export const AgentContext = createContext();

export const AgentProvider = (props) => {
  const [agentsList, setAgentsList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setAgentsList(res.data))
      .catch((error) => console.log(error));
  }, [agentsList]);

  return (
    <AgentContext.Provider value={[agentsList, setAgentsList]}>
      {props.children}
    </AgentContext.Provider>
  );
};

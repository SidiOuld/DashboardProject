import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AgentContext } from "../Context/AgentsContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 25px auto;
  .teamCard {
    border-radius: 15px;
    width: 204px;
    margin: 5px auto;
    margin-bottom: 25px;
    background: white;
    box-shadow: 8px 8px 4px #ccac08, -8px -8px 4px #eec006;
    p {
      margin: 10px;
    }
    .teamCard__img {
      width: 200px;
      height: 200px;
      padding: 10px;
      border-radius: 15px;
      object-fit: cover;
    }
  }
`;

function SupportTeam() {
  const [agentsList, setAgentsList] = useContext(AgentContext);

  return (
    <Container>
      {agentsList.map((agent) => {
        console.log("agent id", agent.id);
        return (
          <Link to={`/agents/${agent.id}`} key={agent.id}>
            <div className="teamCard" id={"id" + agent.id}>
              <div className="userCard__userImage">
                <img
                  src="https://www.wellandgood.com/wp-content/uploads/2019/07/GettyImages-1159767394.jpg"
                  alt="agent profile"
                  height="200"
                  className="teamCard__img"
                />
              </div>
              <div>
                <p>{agent.name}</p>
                <p>{agent.email}</p>
              </div>
              {console.log("data from context", agentsList)}
            </div>
          </Link>
        );
      })}
    </Container>
  );
}

export default SupportTeam;

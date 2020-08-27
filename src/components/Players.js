import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AgentContext } from "../Context/AgentsContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  background-color: #a4a71e;
  margin: auto;
  padding: 25px;
  .teamCard {
    border-radius: 15px;
    width: 204px;
    margin: 5px 10px;
    margin-bottom: 25px;
    background: white;

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
  @media only screen and (max-width: 930px) {
    height: 100%;
  }
`;

function Players() {
  const [agentsList] = useContext(AgentContext);

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

export default Players;

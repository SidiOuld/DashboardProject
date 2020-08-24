import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "./util/axiosWithAuth";
// import Data from "../data";
import styled from "styled-components";
import { AgentContext } from "../Context/AgentsContext";

const PlayerCardContainer = styled.div`
  display: flex;
  width: 50%;
  min-height: 300px;
  margin: 25px auto;
  /* border: 2px solid black; */
  border-radius: 15px;
  background-color: white;
  box-shadow: 8px 8px 4px #ccac08, -8px -8px 4px #eec006;

  @media only screen and (max-width: 1078px) {
    flex-wrap: wrap;
    .userCard__Container {
      width: 100%;
      height: 50%;
      order: 2;
    }
    .userCard__contactInfo {
      margin: auto;
      width: 50%;
      order: 3;
    }
    .userCard__xBtn {
      order: 1;
    }
  }
  .userCard__Container {
    margin: 15px;
    margin-top: 35px;
    .userCard__Img {
      height: 220px;
      width: 200px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .userCard__contactInfo {
    text-align: left;
    margin: auto;
    p {
      padding: 5px;
    }
  }
  .userCard__xBtn {
    margin-top: 5px;
    margin-right: 5px;
  }
`;

function PlayerCard(props) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [agentsList, setAgentsList] = useContext(AgentContext);

  const { match } = props;
  useEffect(() => {
    const id = match.params.id;
    const itemToUpdate = agentsList.find((item) => `${item.id}` === id);
    if (itemToUpdate) {
      console.log(itemToUpdate);
      setValues(itemToUpdate);
    }
  }, [match, agentsList]);

  const deleteAgent = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/friends/${values.id}`)
      .then((res) => {
        setAgentsList(res.data);
        props.history.push("/players");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <PlayerCardContainer key={values.id}>
      <div className="userCard__Container">
        <img
          src={`https://www.wellandgood.com/wp-content/uploads/2019/07/GettyImages-1159767394.jpg`}
          alt="agent profile"
          height="200"
          className="userCard__Img"
        />
      </div>
      <div className="userCard__contactInfo">
        <p>Name: {values.name}</p>
        <p>Title: {values.email}</p>
      </div>
      <div className="userCard__xBtn">
        <NavLink to="/players">X</NavLink>
      </div>
      <button onClick={() => props.history.push(`/update-player/${values.id}`)}>
        Edit Item
      </button>
      <button onClick={deleteAgent}>Delete</button>
    </PlayerCardContainer>
  );
}

export default PlayerCard;

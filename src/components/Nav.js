import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  background-color: #eec006;
  // background-color: #1f6421;
  padding-top: 10px;
  // min-height: 75px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  .logo,
  .supportTeam {
    margin-left: 35px;
    font-size: 2.5rem;
  }
  .supportTeam {
    margin-right: 35px;
  }
`;

export default function Nav() {
  return (
    <Container>
      <div className="logo  hvr-wobble-horizontal">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="supportTeam  hvr-wobble-horizontal">
        <NavLink to="/players">Players</NavLink>
      </div>
      <div className="supportTeam  hvr-wobble-horizontal">
        <NavLink to="/find-my-team">Find My Team</NavLink>
      </div>
      <div className="supportTeam  hvr-wobble-horizontal">
        <NavLink to="/add-player">Add Players</NavLink>
      </div>
    </Container>
  );
}

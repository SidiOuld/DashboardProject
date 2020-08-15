import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  background-color: #eec006;
  padding-top: 10px;
  min-height: 75px;
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

  @-webkit-keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .hvr-wobble-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-wobble-horizontal:hover,
  .hvr-wobble-horizontal:focus,
  .hvr-wobble-horizontal:active {
    -webkit-animation-name: hvr-wobble-horizontal;
    animation-name: hvr-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
  @media only screen and (max-width: 550px) {
    flex-flow: column wrap;
    justify-content: center;
    margin: -10px 0 140px 0;
    /* padding-bottom: 10px; */
    .logo,
    .team {
      padding: 10px;
      margin: 0;
      width: 100%;
      :hover {
        border: 2px solid gray;
      }
    }
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

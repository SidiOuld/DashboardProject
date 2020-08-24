import React from "react";
import TeamInfo from "./TeamInfo";
import styled from "styled-components";
import LeagueStandings from "./LeagueStandings";
import NextGameCard from "./NextGameCard";
import CoachContactCard from "./CoachContactCard";
import AccordionExampleStyled from "./Accordion.js";

const Container = styled.div`
  margin-top: 100px;
  @media only screen and (max-width: 900px) {
    margin-top: 5px;
    // height: 20px;
  }
`;

const TeamInfoContainer = () => {
  return (
    <Container>
      {/* <h1>Team Info container</h1> */}
      <TeamInfo />
      {/* <LeagueStandings />
      <NextGameCard />
      <CoachContactCard /> */}
      <AccordionExampleStyled />
    </Container>
  );
};

export default TeamInfoContainer;

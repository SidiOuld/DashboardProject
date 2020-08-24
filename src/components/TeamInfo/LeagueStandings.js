import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  margin-top: 5px;
`;

const LeagueStandings = () => {
  return (
    <Container>
      <h1>League Standings: 3W 2D 0L</h1>
    </Container>
  );
};

export default LeagueStandings;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // border: 2px solid black;
  padding: 0.75em 1em;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
  border-radius: 0.28571429rem;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15),
    0 0 0 1px rgba(34, 36, 38, 0.15);
`;

const TeamInfo = () => {
  return (
    <Container>
      <h1>Team Name: Chelsea FC</h1>
    </Container>
  );
};

export default TeamInfo;

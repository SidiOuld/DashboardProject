import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  margin-top: 5px;
`;

const NextGameCard = () => {
  return (
    <Container>
      <h1>
        Playing Arsenal Next. Match start time is at 4pm EST. Location: East
        Madison. Weather: 80* with no rain{" "}
      </h1>
    </Container>
  );
};

export default NextGameCard;

import React from "react";
import styled from "styled-components";
import ManagerOne from "./ManagerOne";
import ManagerTwo from "./ManagerTwo";

const Container = styled.div`
  margin: 50px auto 5px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) {
    margin-top: 40px;
  }
`;

function Home() {
  return (
    <Container>
      <ManagerOne />
      <ManagerTwo />
    </Container>
  );
}

export default Home;

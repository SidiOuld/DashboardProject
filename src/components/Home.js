import React from "react";
import styled from "styled-components";
import MyProfile from "./MyProfile";
import TeamInfoContainer from "./TeamInfo/TeamInfoContainer";

const Container = styled.div`
  margin: auto;
  padding: 50px;
  background-color: #a4a71e;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media only screen and (max-width: 1000px) {
    // margin-top: 40px;
    height: 100%;
  }
`;

function Home() {
  return (
    <Container>
      <MyProfile />

      <TeamInfoContainer />
    </Container>
  );
}

export default Home;

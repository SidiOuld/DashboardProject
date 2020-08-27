import React from "react";
import styled from "styled-components";
import ViewTeamBtn from "./ViewTeamBtn";

const Container = styled.div`
  border-radius: 15px;
  // margin: 70px 15px;
  width: 300px;
  background: white;
  // box-shadow: 8px 8px 4px #ccac08, -8px -8px 4px #eec006;
  .managerImg {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    object-fit: cover;
  }
  @media only screen and (max-width: 930px) {
    margin-bottom: 5px;
  }
`;

const OuterContainer = styled.div`
  // height: 80vh;
`;

export default function MyProfile() {
  return (
    // <OuterContainer>
    <Container>
      <div>
        <img
          className="managerImg"
          src="https://www.wellandgood.com/wp-content/uploads/2019/07/GettyImages-1159767394.jpg"
          alt="Alex morgan"
        />
      </div>
      <div>
        <p>Alex Morgan</p>
        <p>Captain</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
      <ViewTeamBtn />
    </Container>
    // </OuterContainer>
  );
}

import React from "react";
import styled from "styled-components";
import ManagerBtn from "./ManagerBtn";

const Container = styled.div`
  border-radius: 15px;
  margin: 15px 15px;
  width: 300px;
  background: white;
  box-shadow: 8px 8px 4px #ccac08, -8px -8px 4px #eec006;
  .managerImg {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

export default function TeamMarleen() {
  return (
    <Container>
      <div>
        <img
          className="managerImg"
          src="https://www.wellandgood.com/wp-content/uploads/2019/07/GettyImages-1159767394.jpg"
          alt="alex morning"
        />
      </div>
      <div>
        <p>Alex Morgan</p>
        <p>Customer Support Manager</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <ManagerBtn />
    </Container>
  );
}

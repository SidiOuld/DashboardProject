import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  height: 80vh;
  background-color: #a4a71e;
  .box1 {
    border-radius: 5px;
    margin: auto;
    margin-bottom: 15px;
    margin-top: 5%;
    background: #fff;
    padding: 25px 25px;
    border: 1px solid #f0f1f4;
    width: 50%;
  }
  .email_status {
    h1 {
      margin: 0 0 5px 0;
      padding-bottom: 0;
      font-weight: 700;
    }
    b {
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      color: #6f7f9b;
    }
  }

  @media only screen and (max-width: 1010px) {
    // height: 100%;
  }
`;

const EmailConfirmation = () => {
  return (
    <Container>
      <div className="box1">
        <div className="email_status">
          <h1>
            <b>An invite was sent. Please check your email inbox.</b>
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default EmailConfirmation;

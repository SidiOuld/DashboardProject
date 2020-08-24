import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #eec006;
  padding-top: 10px;
  // margin: 15vh;
  height: 10vh;
  // width: 100%;
  // height: 10vh;
`;

function Footer() {
  return (
    <FooterContainer>
      <p> Project under 🛠</p>
    </FooterContainer>
  );
}

export default Footer;

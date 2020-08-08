import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #eec006;
  padding-top: 15px;
  height: 50px;
  margin-top: 50px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p> Project under 🛠</p>
    </FooterContainer>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #eec006;
  padding-top: 10px;
  height: 50px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p> Project under 🛠</p>
    </FooterContainer>
  );
}

export default Footer;

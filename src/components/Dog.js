import React from "react";
import styled from "styled-components";
import "./dog.scss";
const Container = styled.div`
  justify-content: center;
  width: 200px;
  margin: 15px auto;
  margin-top: 40px;
`;

function Dog() {
  return (
    <Container className="dogBody">
      <div className="dog">
        <div className="dog-body">
          <div className="dog-tail">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dog-torso" />
        <div className="dog-head">
          <div className="dog-ears">
            <div className="dog-ear" />
            <div className="dog-ear" />
          </div>
          <div className="dog-eyes">
            <div className="dog-eye" />
            <div className="dog-eye" />
          </div>
          <div className="dog-muzzle">
            <div className="dog-tongue" />
          </div>
        </div>
      </div>

      <div className="ball" tabIndex="0" />
    </Container>
  );
}

export default Dog;

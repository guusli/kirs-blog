import React from "react";
import { space, width } from "styled-system";
import styled from "styled-components";

const Wrapper = styled.div`
  ${space} ${width} max-width: 900px;
  //background: white;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 32rem) {
    max-width: 600px;
  }

  @media (min-width: 54rem) {
    max-width: 900px;
  }
`;

const TextBox = styled.div`
  margin: auto;
  text-align: center;
  background: white;
  padding: 48px;

  @media (min-width: 32rem) {
    width: 60%;
  }
`;

const Name = styled.p`
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 0.8em;
`;

export default ({ works, images }) => {
  return (
    <Wrapper width={"auto"} my={3} mx={3}>
      <TextBox>
        <Name>Mathilda Kirs</Name>
        <Description>Stockholm-based artist</Description>
        <Description>
          mathilda.kirs<span style={{ display: "none" }}>+spammers</span>@gmail.com
        </Description>
      </TextBox>
    </Wrapper>
  );
};

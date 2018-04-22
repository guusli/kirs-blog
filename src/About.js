import React from "react";
import { space, width } from "styled-system";
import styled from "styled-components";

const Wrapper = styled.div`
  ${space} ${width} max-width: 900px;

  @media (min-width: 32rem) {
    max-width: 600px;
  }

  @media (min-width: 54rem) {
    max-width: 900px;
  }
`;

export default ({ works, images }) => {
  return (
    <Wrapper width={1} my={3} mx="auto" px={3}>
      <p>Mathilda Kirs</p>
      <p>Stockholm based artist</p>
    </Wrapper>
  );
};

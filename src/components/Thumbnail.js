import React from "react";
import styled from "styled-components";
import { space, width, color } from "styled-system";

const ThumbnailImage = styled.img`
  ${space} ${width};
  border: 12px solid #fff;

  width: 100%;
  height: 100%;

  @media (min-width: 32rem) {
    width: 250px;
    height: 250px;
  }
`;

const Caption = styled.div`
  ${color} text-transform: uppercase;
  text-align: center;
  ${space};
`;

const Thumbnail = ({ name = "Name", className, src }) => (
  <div className={className}>
    <ThumbnailImage m={0} src={src} />
    <Caption color="darkgray" mt={12}>
      {name}
    </Caption>
  </div>
);

export default styled(Thumbnail)`
  display: inline-block;
`;

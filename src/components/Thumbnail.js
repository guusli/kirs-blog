import React from "react";
import styled from "styled-components";
import { space, width, color } from "styled-system";
import Img from "gatsby-image";

const ThumbnailImage = styled(Img)`
  ${space} ${width};
`;

const Caption = styled.div`
  ${color} text-transform: uppercase;
  text-align: center;
  ${space};
`;

const Thumbnail = ({ name = "Name", className, resolutions }) => (
  <div className={className}>
    <ThumbnailImage width={1} m={0} resolutions={resolutions} />
    <Caption color="darkgray" mt={12}>
      {name}
    </Caption>
  </div>
);

export default styled(Thumbnail)`
  display: inline-block;
`;

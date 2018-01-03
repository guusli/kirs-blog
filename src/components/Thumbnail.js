import React from "react";
import styled from "styled-components";

const ThumbnailImage = styled.img`
  margin: 0;
`;

const Thumbnail = ({ name = "Name", className }) => (
  <div className={className}>
    <ThumbnailImage src="https://picsum.photos/300/300/?random" />
    <div>{name}</div>
  </div>
);

export default styled(Thumbnail)`
  display: inline-block;
`;

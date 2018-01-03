import React from "react";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";
import Link from "gatsby-link";

const StyledThumbnail = styled(Thumbnail)`
  padding: 20px;
`;

export default () => (
  <div>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
    <Link to="/page-2">
      <StyledThumbnail />
    </Link>
  </div>
);

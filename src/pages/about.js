import React from "react";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";
import Link from "gatsby-link";
import { space, width } from "styled-system";
import Helmet from "react-helmet";

const StyledThumbnail = styled(Thumbnail)`
  ${width} ${space};
`;

export default ({ data }) => {
  return <div>About</div>;
};

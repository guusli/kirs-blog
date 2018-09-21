import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = props =>
  props.href ? (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  ) : (
    <NavLink {...props} />
  );

export default styled(Link)`
  text-decoration: none;
  color: #6d6d6d;

  a:visited {
    color: #6d6d6d;
  }
`;

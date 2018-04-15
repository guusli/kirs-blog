import React from "react";
import PropTypes from "prop-types";
import Link from "../components/Link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import raleway from "typeface-raleway";
import { ThemeProvider } from "styled-components";

import "./index.css";
import "typeface-raleway";

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 8, 16, 24, 32],
  fontSizes: [12, 16, 18, 24, 36, 72],
  colors: {
    black: "#111",
    darkgray: "#6d6d6d"
  }
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  ${space};
`;

const NavigationHeading = styled.h1`
  ${fontSize};
`;

const NavigationMenu = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  ${color} display: inline-block;
  ${space};
`;

const Wrapper = styled.div`
  ${space} ${width} max-width: 900px;
`;

const Heading = styled.h1`
  font-weight: 100;
  font-size: 2.2rem;
`;

const Header = () => (
  <Navigation px={20} py={4}>
    <Heading>
      <Link to="/">M Kirs</Link>
    </Heading>
    <NavigationMenu>
      <NavItem px={1} color="darkgray">
        <Link
          to="/work"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
          Work
        </Link>
      </NavItem>
      <NavItem px={1} color="darkgray">
        <Link
          activeStyle={{
            textDecoration: "underline"
          }}
          to="/about"
        >
          About
        </Link>
      </NavItem>
      <NavItem px={1} color="darkgray">
        <Link
          activeStyle={{
            textDecoration: "underline"
          }}
          to="/shop"
        >
          Shop
        </Link>
      </NavItem>
    </NavigationMenu>
  </Navigation>
);

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Wrapper width={1} my={3} mx="auto">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <div>{children()}</div>
    </Wrapper>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

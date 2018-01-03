import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import raleway from "typeface-raleway";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

const NavigationMenu = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Header = () => (
  <Navigation>
    <h1>M Kirs</h1>
    <NavigationMenu>
      <NavItem>Work</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Shop</NavItem>
    </NavigationMenu>
  </Navigation>
);

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        textAlign: "center"
      }}
    >
      {children()}
    </div>
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

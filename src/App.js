import React, { Component } from "react";
import "./App.css";
import Work from "./Work";
import Painting from "./Painting";
import About from "./About";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "./components/Link";
import styled from "styled-components";
import { space, width, color } from "styled-system";
import "typeface-raleway";
import { ThemeProvider } from "styled-components";

import "./index.css";
import "typeface-raleway";

import works from "./work/work";

const images = importAll(require.context("./work", false, /\.(png|jpe?g)$/));

function importAll(r) {
  return r.keys().map(r);
}

const theme = {
  breakpoints: ["32rem", "54rem", "72rem"],
  space: [0, 8, 16, 24, 32],
  fontSizes: [12, 16, 18, 24, 36, 72],
  colors: {
    black: "#111",
    darkgray: "#6d6d6e"
  }
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  ${space};
  flex-direction: column;

  @media (min-width: 32rem) {
    flex-direction: row;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  ${color} display: inline-block;
  ${space};
`;

const Wrapper = styled.div`
  ${space} ${width} max-width: 900px;

  @media (min-width: 32rem) {
    max-width: 600px;
  }

  @media (min-width: 54rem) {
    max-width: 900px;
  }
`;

const Heading = styled.h1`
  font-weight: 100;
  font-size: 2.2rem;

  @media (min-width: 32rem) {
    padding-left: 6px;
  }
`;

const gaTracking = ({ location }) => {
  if (typeof window.ga === "function") {
    window.ga("set", "page", location.pathname + location.search);
    window.ga("send", "pageview");
  }
  return null;
};

const Header = () => (
  <Navigation px={20} py={4}>
    <Heading>
      <Link to="/">M Kirs</Link>
    </Heading>
    <NavigationMenu>
      <NavItem px={1} color="darkgray">
        <Link
          exact
          to="/"
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
        <Link href="https://www.instagram.com/mathildakirsart/">Instagram</Link>
      </NavItem>
      {false && (
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
      )}
    </NavigationMenu>
  </Navigation>
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper width={1} my={3} mx="auto">
          <Router>
            <div>
              <Header />
              <Route
                exact
                path="/"
                component={props => (
                  <Work {...props} works={works} images={images} />
                )}
              />
              <Route exact path="/" render={gaTracking} />
              <Route
                path="/work/:slug"
                component={props => (
                  <Painting {...props} works={works} images={images} />
                )}
              />
              <Route path="/work/:slug" render={gaTracking} />
              <Route exact path="/about" component={props => <About />} />
              <Route exact path="/about" render={gaTracking} />
            </div>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

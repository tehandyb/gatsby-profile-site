import React from 'react';
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Link } from "gatsby"
import '../../node_modules/normalize.css/normalize.css'
import './Layout.scss'
import TexGyreHelvetica from '../fonts/texgyreheros-regular-webfont.woff'
import 'typeface-jura'

const globalStyles = css`
  body {
    background-color: #ababab;
    
  }

  h1,h2,h3,h4,h5,h6 {
    letter-spacing: .1rem;
  }
  
  @font-face {
    font-family: 'TexGyreHelvetica';
    src: url(${TexGyreHelvetica}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const Main = styled.div`
  color: #dbf3ff;
  font-family: 'TexGyreHelvetica', sans-serif;
`;

const MaxWidth = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  padding: 0 6rem;
`;

const NavBar = styled.div`
  display: flex;
  padding-top: .5rem;
  padding-bottom: .5rem;
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 6rem;
`;



const ActiveBar = styled.div`
  width: 0px;
  background-color: #fdcf41;
  height: 4px;
  margin-top: 4px;
  transition: width .4s;
`;

const StyledNavItem = styled(Link)`
  margin: 1rem 1rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: .15rem;
  position: relative;
  border-radius: 2px;


  &:hover {
    ${ActiveBar} {
      width: 100%
    }
  }
  
  &.active {
    ${ActiveBar} {
      width: 100%
    }
  }
`;


const NavItem = ({ to, children }) => {
  return (
    <StyledNavItem to={to} activeClassName="active">
      {children}
      <ActiveBar />
    </StyledNavItem>
  )
}

const Nav = () => {
  return (
    <NavBar>
      <NavMenu>
        <NavItem to="/about">about</NavItem>
        <NavItem to="/portfolio">portfolio</NavItem>
        <NavItem to="/contact">contact</NavItem>
      </NavMenu>
    </NavBar>
  )
}

const Layout = ({ children, showNav }) => (
  <Main>
    <Helmet>
      <title>Andrew Blowe</title>
    </Helmet>
    <Global styles={globalStyles} />
    {showNav && <Nav />}
    <MaxWidth>
      {children}
    </MaxWidth>
  </Main>
);

export default Layout;

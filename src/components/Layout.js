import React from 'react';
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import '../../node_modules/normalize.css/normalize.css'
import './Layout.scss'
import TexGyreHelvetica from '../fonts/texgyreheros-regular-webfont.woff'

const globalStyles = css`
  body {
    background-color: black;
  }
  
  @font-face {
      font-family: 'TexGyreHelvetica';
      src: url(${TexGyreHelvetica}) format('woff');
      font-weight: normal;
      font-style: normal;
  }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  font-family: 'TexGyreHelvetica';
`;

const Layout = ({ children }) => (
  <Body>
    <Global styles={globalStyles} />
    {children}
  </Body>
);

export default Layout;

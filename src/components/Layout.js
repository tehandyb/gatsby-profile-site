import React from 'react';
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import '../../node_modules/normalize.css/normalize.css'
import './Layout.scss'
import TexGyreHelvetica from '../fonts/texgyreheros-regular-webfont.woff'
import 'typeface-jura'

const globalStyles = css`
  body {
    background-color: #ababab;
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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  padding: 0 2em;
`;

const Layout = ({ children }) => (
  <Main>
    <Helmet>
      <title>Andrew Blowe</title>
    </Helmet>
    <Global styles={globalStyles} />
    <MaxWidth>
      {children}
    </MaxWidth>
  </Main>
);

export default Layout;

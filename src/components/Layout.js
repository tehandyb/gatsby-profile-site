import React from 'react';
import Helmet from 'react-helmet'
import '../../node_modules/normalize.css/normalize.css'
import './Layout.scss'

const style = {
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  color: 'white',
  fontFamily: "'Jura', sans-serif"
};

const Layout = ({ children }) => (
  <div style={style}>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Jura" rel="stylesheet" />
    </Helmet>
    {children}
  </div>
);

export default Layout;

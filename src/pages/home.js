import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import OverviewPanel from '../components/OverviewPanel'

const Home = () => (
  <Layout>
    <Helmet title="Home">
    </Helmet>
    <OverviewPanel />
  </Layout>
);

export default Home;

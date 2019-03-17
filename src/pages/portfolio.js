import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Container = styled.div`
  margin-left: 100px;
  margin-right: 10%;
  margin-top: 100px;
`;

const LayoutHeading = styled.h1`
  color: white;
`;

const ProjectTitle = styled.h2`
  color: #efefef;
  font-weight: 400;
  margin: .5rem 0;
`;

const ProjectInfo = styled.h4`
  color: #efefef;
  font-weight: 400;
  margin: .5rem 0;
`;

const ProjectDescription = styled.div`
  padding: .5rem 0;
  color: #4a5154;
`;

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <LayoutHeading>Portfolio</LayoutHeading>
        <ProjectTitle>Capterra</ProjectTitle>
        <ProjectInfo>Capterra (Gartner Digital Markets), June 2018 - Present</ProjectInfo>
        <ProjectDescription>
          Transition Rails application to serverless architecture using React and AWS Lambda. 
  Collaborated with design team on creating a React component library to allow more efficient front end development.
        </ProjectDescription>
        <ProjectTitle>USAID Economic Analysis and Data Services</ProjectTitle>
        <ProjectInfo>Barquin International, August 2014 - July 2018</ProjectInfo>
        <ProjectDescription>
          Worked for USAID and the Economic Analysis and Data Services team to build important dashboards to visualize Foreign Aid and Economic data from around the world. https://eads.usaid.gov/
  We used leading edge Javascript libraries including ReactJs and D3.js for Frontend, Node build tools, Jest and Cucumber for testing, and Ruby on Rails for the backend.
        </ProjectDescription>
      </Container>
    </Layout>
  )
}

export default Portfolio;

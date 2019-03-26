import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import inlineSearchImage from '../images/capterraInlineSearch.jpg';
import spotlightImage from '../images/capterraSpotlight.jpg';
import ImageGallery from '../components/ImageGallery';

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

const capterraInfo = {
  projectName: 'Capterra',
  projectInfo: 'Capterra (Gartner Digital Markets), June 2018 - Present'
}

const CaptionRenderer = ({ projectName, projectInfo }) => ({ caption }) => (
  <React.Fragment>
    <ProjectTitle>{projectName}</ProjectTitle>
    <ProjectInfo>{projectInfo}</ProjectInfo>
    <ProjectDescription>
      {caption || 'Transition Rails application to serverless architecture using React and AWS Lambda. Collaborated with design team on creating a React component library to allow more efficient front end development.'}
    </ProjectDescription>
  </React.Fragment>
);

const capterraImages = [
  {
    id: 'inline-search-img',
    src: inlineSearchImage,
    caption: "Here shows the inline search that I created for the Capterra home page",
    alt: 'Capterra Home page with Inline Search'
  },
  {
    id: 'spotlight-image',
    src: spotlightImage,
    caption: "This is the Product Spotlight page where I worked heavily on the front end to accomplish our goal of transitioning from Rails to react",
    alt: 'Capterra Spotlight page'
  }
];

const Portfolio = () => {
  return (
    <Layout>
      <LayoutHeading>Portfolio</LayoutHeading>
      <ImageGallery CaptionRenderer={CaptionRenderer(capterraInfo)} images={capterraImages} />
      <ProjectTitle>USAID Economic Analysis and Data Services</ProjectTitle>
      <ProjectInfo>Barquin International, August 2014 - July 2018</ProjectInfo>
      <ProjectDescription>
        Worked for USAID and the Economic Analysis and Data Services team to build important dashboards to visualize Foreign Aid and Economic data from around the world. https://eads.usaid.gov/
We used leading edge Javascript libraries including ReactJs and D3.js for Frontend, Node build tools, Jest and Cucumber for testing, and Ruby on Rails for the backend.
      </ProjectDescription>
    </Layout>
  )
}

export default Portfolio;

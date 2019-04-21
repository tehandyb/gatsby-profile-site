import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import inlineSearchImage from '../images/capterraInlineSearch.jpg';
import spotlightImage from '../images/capterraSpotlight.jpg';
import ImageGallery from '../components/ImageGallery';
import faeImage from '../images/eadsForeignAidExplorer.jpg';
import d2rImage from '../images/eadsDollarsToResults.jpg';
import faeCountryImage from '../images/eadsCountryDashboard.jpg';

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
  padding-top: .5rem;
  color: #4a5154;
`;

const SectionContainer = styled.div`
  box-shadow: 11px 36px 62px -10px rgba(0,0,0,0.2);
  margin-bottom: 4em;
  padding: 24px;
  border-radius: 12px;
`;

const capterraInfo = {
  projectName: 'Capterra',
  projectInfo: 'Capterra (Gartner Digital Markets), June 2018 - Present',
  overallDescription: 'Transition Rails application to serverless architecture using React and AWS Lambda. Collaborated with design team on creating a React component library to allow more efficient front end development.'
}

const barquinInfo = {
  projectName: 'USAID Economic Analysis and Data Services',
  projectInfo: 'Barquin International, August 2014 - July 2018',
  overallDescription: `Worked for USAID and the Economic Analysis and Data Services team to build important dashboards to visualize Foreign Aid and Economic data from around the world. https://eads.usaid.gov/
We used leading edge Javascript libraries including ReactJs and D3.js for Frontend, Node build tools, Jest and Cucumber for testing, and Ruby on Rails for the backend.`
}

const CaptionRenderer = ({ projectName, projectInfo, overallDescription }) => ({ caption }) => (
  <React.Fragment>
    <ProjectTitle>{projectName}</ProjectTitle>
    <ProjectInfo>{projectInfo}</ProjectInfo>
    <ProjectDescription>
      {caption || overallDescription || 'No Description'}
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
    caption: "This is the Product Spotlight page where I worked heavily on the front end to accomplish our goal of transitioning from Rails + JQuery to AWS Lambda + React",
    alt: 'Capterra Spotlight page'
  }
];

const barquinImages = [
  {
    id: 'fae-img',
    src: faeImage,
    caption: `This is the Foreign Aid Explorer dashboard. It is an interactive data visualization dashboard that helps inform economists and the general public 
    about how the US is spending Foreign Aid. The dashboard makes use of DC.js and D3.js to power the visualizations and live filtering.`,
    alt: 'USAID Foreign Aid Explorer'
  },
  {
    id: 'd2r-img',
    src: d2rImage,
    caption: `This is the Dollars To Results dashboard. It informs the public of the effective benefits that countries receive from US aid. This dashboard makes use of D3.js and React.js`,
    alt: 'Dollars to Results'
  },
  {
    id: 'fae-country-image',
    src: faeCountryImage,
    caption: `This dashboard also shows Foreign Aid, but it gives a closer look at each country. The data visualizations on this dashboard are all bespoke and custom made just as the other dashboards. 
    This dashboard uses D3.js and React.js`,
    alt: 'Foreign Aid by Country'
  }
];

const Portfolio = () => {
  return (
    <Layout>
      <LayoutHeading>Portfolio</LayoutHeading>
      <SectionContainer>
        <ImageGallery CaptionRenderer={CaptionRenderer(capterraInfo)} imagesWithCaptions={capterraImages} />
      </SectionContainer>
      <SectionContainer>
        <ImageGallery CaptionRenderer={CaptionRenderer(barquinInfo)} imagesWithCaptions={barquinImages} />
      </SectionContainer>
    </Layout>
  )
}

export default Portfolio;

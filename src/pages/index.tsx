import 'react-typed/dist/animatedCursor.css';
import '../styles/index.css';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { breakpoint } from '../styles/breakpoint';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "echosergio.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  console.log(
    "           _                              _\n\
  ___  ___| |__   ___  ___  ___ _ __ __ _(_) ___  \n\
 / _ \\/ __| '_ \\ / _ \\/ __|/ _ \\ '__/ _` | |/ _ \\ \n\
|  __/ (__| | | | (_) \\__ \\  __/ | | (_| | | (_) |\n\
 \\___|\\___|_| |_|\\___/|___/\\___|_|  \\__, |_|\\___/ \n\
                                    |___/        \n\
  ",
  );

  console.log(
    "%cHi! You're not gonna find anything interesting here but nice to meet you anyway :)",
    'font-size: 14px',
  );

  return (
    <StyledLayout>
      <SEO title="Hi" />
      <StyledBackgroundImage Tag="section" fluid={imageData} backgroundColor={`#040e18`}>
        <StyledTyped
          strings={['echo Hello!', 'echo $idea > new_project', 'echo $(git init)', 'echosergio :)']}
          startDelay={1000}
          typeSpeed={90}
          backSpeed={40}
          backDelay={1200}
          smartBackspace={true}
          cursorChar="|"
          contentType={null}
        />
      </StyledBackgroundImage>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const StyledTyped = styled(Typed)`
  position: absolute;
  color: #fff;
  font-family: 'Courier Prime';
  bottom: 50px;

  @media (min-width: ${breakpoint.md}px) {
    padding: 50px;
    font-size: 50px;
  }

  @media (max-width: ${breakpoint.md}px) {
    padding: 40px;
    font-size: 30px;
  }
`;

export default IndexPage;

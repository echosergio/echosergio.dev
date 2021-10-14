import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

interface ContainerProps {
  children: any;
}

const Layout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  header,
  footer {
    flex-shrink: 0;
  }
  main {
    flex: 1 0 auto;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--color-primary-shade);
    text-decoration: none !important;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-mark);
  }
`;

const StyledMain = styled.main`
  width: 100%;
  background-color: #2a2a2a;
  display: flex;
  flex-direction: column;
  align-items: top;
  min-height: 450px;
`;

export default Layout;

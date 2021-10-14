import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

import { breakpoint } from '../../styles/breakpoint';

function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          social {
            github
            linkedin
          }
        }
      }
    }
  `);

  const codeString = `export const profile = {
  name: '${site.siteMetadata.author}',
  description: \`${site.siteMetadata.description}\`,
  stack: ['.NET Core', 'React', 'Elasticsearch'],
  location: ['Madrid, Spain', 'Fully remote'],
  salary: {
    min_eur: 50000,
    max_eur: 60000
  },
  contact: {
    github: '${site.siteMetadata.social.github}',
    linkedin: '${site.siteMetadata.social.linkedin}'
  },
  version: '${new Date().getFullYear() - 1992}'
};`;

  return (
    <StyledFooter>
      <StyledFooterLayout>
        <SyntaxHighlighter
          language="javascript"
          style={xonokai}
          wrapLongLines={true}
          customStyle={{
            border: 0,
            marginBottom: 0,
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </StyledFooterLayout>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  background-color: #2a2a2a;
  color: var(--color-primary-contrast);

  @media (min-width: ${breakpoint.md}px) {
    padding: 20px;
  }

  @media (max-width: ${breakpoint.md}px) {
    padding: 10px;
  }
`;

const StyledFooterLayout = styled.div`
  max-width: ${breakpoint.lg}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoint.md}px) {
    span {
      font-size: 14px;
    }
  }

  @media (max-width: ${breakpoint.md}px) {
    span {
      font-size: 12px;
    }
  }
`;

export default Footer;

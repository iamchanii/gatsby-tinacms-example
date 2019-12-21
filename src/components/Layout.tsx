import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from './Header';

const LayoutBlock = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

export interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = React.memo(({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={LayoutBlock}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
});

Layout.displayName = 'Layout';

export default Layout;

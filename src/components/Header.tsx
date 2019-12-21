import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';

const headerCss = css`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;

  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export interface IHeaderProps {
  siteTitle: string;
}

const Header: React.FC<IHeaderProps> = React.memo(({ siteTitle }) => {
  return (
    <header css={headerCss}>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

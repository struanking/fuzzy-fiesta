import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  margin: 2rem auto 3rem;
  width: 100%;
`;

const SiteTitle = styled.h1`
  color: #385b66;
  font-size: 3rem;
  font-weight: normal;
  margin: 0;
  text-align: center;
`;

const Layout = ({ children }) => (
  <div>
    <Header role="banner">
      <SiteTitle>Energy Usage and Meter Readings</SiteTitle>
    </Header>

    <main id="main">
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Layout;

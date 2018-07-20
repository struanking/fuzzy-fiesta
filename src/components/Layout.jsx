import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const SiteHeader = styled.header`
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

const Footer = styled.footer`
  border-top: solid 1px #ddd;
  color: #555;
  font-size: 80%;
  margin-top: 2rem;
  text-align: center;
`;

const Layout = ({ children }) => (
  <Fragment>
    <SiteHeader role="banner">
      <SiteTitle>Energy Usage and Meter Readings</SiteTitle>
    </SiteHeader>

    <main id="main">
      {children}
    </main>

    <Footer role="contentinfo">
      <p>Struan King | Bulb Energy | 2018</p>
    </Footer>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Layout;

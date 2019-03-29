import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby'

import css from 'styled-components';
import Header from './header';
import './layout.css';
import '../static/font/iconfont.css';

const Wrap = css.div`
  width: 100%;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrap>
      {children}
    </Wrap>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

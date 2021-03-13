import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
  fontSizes: {
    small: '.8rem',
    normal: '1rem',
    large: '1.2rem',
    title: '1.3rem',
    subtitle: '1.25rem',
  },
  breakpoints: {
    xs: '0',
    vsm: '600px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

const GlobalTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

GlobalTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalTheme;

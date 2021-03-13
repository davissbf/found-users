import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const dark = {
  colors: {
    white: '#ffffff',
    greyLight: '#dddddd',
    black: '#000000',
    turquese: '#1abc9c',
    turqueseDark: '#16a085',
    green: '#2ecc71',
    greenDark: '#27ae60',
    blue: '#3498db',
    blueDark: '#2980b9',
    violet: '#9b59b6',
    violetDark: '#8e44ad',
    yellow: '#f1c40f',
    yellowDark: '#f39c12',
    orange: '#e67e22',
    orangeDark: '#d35400',
    red: '#e74c3c',
    redDark: '#c0392b',
    champagne: '#ecf0f1',
    champagneDark: '#bdc3c7',
    metal: '#95a5a6',
    metalDark: '#7f8c8d',
    asphalt: '#34495e',
    asphaltDark: '#2c3e50',
    carbon: '#555459',
    carbonDark: '#3b3a3e',

    // Default colors
    primary: '#2ecc71',
    secondary: '#ecf0f1',
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#233240',
    background: '#131419',
    secondBackground: '#111',
    container: '#2d2d2d',
    text: '#3a3a3a',
    link: '#3498db',

    // Brands
    apiGit: '#131419',
  },
  buttonColor: {
    primary: 'rgba(255, 255, 255, 0.05)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: '#131419',
  },
};

const Dark = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
);

Dark.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dark;

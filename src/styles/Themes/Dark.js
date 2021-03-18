import { shade, lighten } from 'polished';

const dark = {
  title: 'dark',

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
    yellowDarks: '#f39c42',
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
    secondBackground: shade(0.2, '#131419'),
    container: '#080705',
    text: lighten(0.4, '#3a3a3a'),
    link: '#3498db',
    cleaner: lighten(0.02, '#131419'),

    // Brands
    apiGit: '#131419',
  },
  buttonColor: {
    backgroundColor: '#131419',
  },
  inputStyle: {
    boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.6)',
    boxShadowSecond: 'inset -5px -5px 6px #33333300',
    focus: 'inset 1px 1px 2px rgba(0, 0, 0, 0.8)',
    focusSecond: 'inset -1px -1px 5px #333333b4',
  },
  buttonStyle: {
    boxShadow: '-2px -2px 15px #1a1a1a11',
    boxShadowSecond: '2px 2px 15px rgba(0, 0, 0, 0.6)',
    hover: '-2px -2px 5px #33333352',
    hoverSecond: '2px 2px 5px rgba(0, 0, 0, 0.6)',
    active: 'inset 1px 1px 2px rgba(0, 0, 0, 0.6)',
    activeSecond: 'inset -1px -1px 2px #333333b4',
  },
};

const Dark = dark;

export default Dark;

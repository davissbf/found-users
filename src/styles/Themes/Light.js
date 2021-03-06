import { shade } from 'polished';

const light = {
  title: 'light',

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
    background: shade(0.06, '#dee2e6'),
    secondBackground: '#ddddddbd',
    thirdBackground: '#a2aebb',
    container: '#e7ecef',
    text: '#3a3a3a',
    link: '#3498db',
    cleaner: shade(1.5, '#ecf0f1'),

    // Brands
    apiGit: '#f0f0f5',
  },
  buttonColor: {
    backgroundColor: shade(0.06, '#dee2e6'),
  },
  // secondary: shade(0.04, '#ffffff'),
  inputStyle: {
    boxShadow: 'inset 2px 2px 5px #babeccd1',
    boxShadowSecond: 'inset -5px -5px 10px #f7fff771',
    focus: 'inset 1px 1px 2px #babeccd1',
    focusSecond: 'inset -1px -1px 2px #f7fff771',
  },
  buttonStyle: {
    boxShadow: '-5px -5px 20px #f7fff771',
    boxShadowSecond: '5px 5px 20px #babeccd1',
    hover: '-2px -2px 5px #f7fff771',
    hoverSecond: '2px 2px 5px #babeccd1',
    active: 'inset 1px 1px 2px #babeccd1',
    activeSecond: 'inset -1px -1px 2px #f7fff771',
  },
};

const Light = light;

export default Light;

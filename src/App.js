import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Light from './styles/Themes/Light';

import Routes from './routes/routes';

import GlobalTheme from './styles/Themes/GlobalTheme';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={Light}>
    <GlobalTheme>
      <Routes />
      <GlobalStyle />
      <Normalize />
    </GlobalTheme>
  </ThemeProvider>
);

export default App;

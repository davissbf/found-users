import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import ThemeSwitcher from './components/ThemeSwitcher/index';
import Light from './styles/Themes/Light';
// import Dark from './styles/Themes/Dark';

import Routes from './routes/routes';

import GlobalTheme from './styles/Themes/GlobalTheme';
import GlobalStyle from './styles/global';

const App = () => {
  const [theme, setTheme] = useState(Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={Light}>
      <GlobalTheme>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyle />
        <Normalize />
      </GlobalTheme>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import usePersistedState from './utils/usePersistedState';

import ThemeSwitcher from './components/ThemeSwitcher/index';
import Light from './styles/Themes/Light';
import Dark from './styles/Themes/Dark';

import Routes from './routes/routes';

import GlobalTheme from './styles/Themes/GlobalTheme';
import GlobalStyle from './styles/global';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
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

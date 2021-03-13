import React, { useContext } from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const ThemeSwitcher = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.link}
      />
    </Container>
  );
};

ThemeSwitcher.defaultProps = {
  toggleTheme: null,
};

ThemeSwitcher.propTypes = {
  toggleTheme: PropTypes.func,
};

export default ThemeSwitcher;

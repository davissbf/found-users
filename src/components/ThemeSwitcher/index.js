import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const ThemeSwitcher = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={() => {}}
        checked
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
export default ThemeSwitcher;

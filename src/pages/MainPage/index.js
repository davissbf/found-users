import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import logoIgm from '../../assets/github-logo.svg';

import { Container, Form, Button } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <img src={logoIgm} alt="Logo Github" />
      <h1>API Github</h1>
      <Form>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <FiSearch size={46} />
        </Button>
      </Form>
    </Container>
  );
};
export default MainPage;

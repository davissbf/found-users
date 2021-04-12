import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import logoIgm from '../../assets/github-logo.svg';

import { Container, Form, Input, Button } from './styles';

import Cobweb from '../../components/Cobweb/index';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Cobweb />
      <img src={logoIgm} alt="Logo Github" />
      <h1>Get Usuários</h1>
      <Form>
        <Input
          type="text"
          placeholder="Digite o nome do usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to="repositories">
          <FiSearch size={46} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;

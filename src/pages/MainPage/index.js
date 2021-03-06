import React from 'react';
import { FiSearch } from 'react-icons/fi';

import logoIgm from '../../assets/github-logo.svg';

import { Container, Form } from './styles';

const MainPage = () => (
  // const [login, setLogin] = useEffect();

  <Container>
    <img src={logoIgm} alt="Logo Github" />
    <h1>API Github</h1>
    <Form>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        // value={login}
        // onChange={(event) => setLogin(event.target.value)}
      />
      <button type="submit">
        <FiSearch size={46} />
      </button>
    </Form>
  </Container>
);
export default MainPage;

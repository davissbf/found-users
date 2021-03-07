import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriePage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);

export default RepositoriePage;

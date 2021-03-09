import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriePage = () => {
  const user = {
    login: 'Davi Souza',
    name: 'Davi Souza',
    avatar_url: 'https://avatars.githubusercontent.com/u/53843375?v=4',
    followers: 0,
    followings: 0,
    company: null,
    blog: 'https://davissbf.github.io/myportifolioreact/',
    location: 'Brasília',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriePage;

/* eslint-disable no-unused-vars */
import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/languages';

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

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'Ruby',
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'TypeScript',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriePage;

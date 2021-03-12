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
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'JavaScript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'Ruby',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'TypeScript',
    },
    {
      id: '6',
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
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriePage;

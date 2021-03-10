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
      language: 'Java',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://davissbf.github.io/myportifolioreact/',
      language: 'TypeScript',
    },
  ];

  const languages = [
    { name: 'JavaScript', count: 2, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 1, color: '#3498db' },
  ];

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

import React from 'react';

import { MdGroup, MdWork, MdLocationCity, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/53843375?v=4" />
      <Login>Davi</Login>
      <Name>Davissbf</Name>
    </Header>
    <Inner>
      <Data>
        {' '}
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        {' '}
        <MdWork size={20} /> Dev and Pentester
      </Data>
      <Data>
        {' '}
        <MdLocationCity size={20} /> Brasília
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://davissbf.github.io/myportifolioreact/">myPortifolio</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;

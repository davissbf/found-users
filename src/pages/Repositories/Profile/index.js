import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/53843375?v=4" />
      <Login>Davi</Login>
      <Name>Davissbf</Name>
    </Header>
  </Container>
);

export default Profile;

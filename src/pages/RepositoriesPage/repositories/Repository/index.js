import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <Container>
    <Name>Repository Name</Name>
    <Description>Repository Description</Description>
    <Footer color="#f37272">
      <Lang>Reppository Lang</Lang>
      <Link
        href="https://davissbf.github.io/myportifolioreact/"
        target="_blank"
      >
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;

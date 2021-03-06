import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media scren and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.secondBackground};
  min-width: 20rem;
  max-width: 100vh;
  overflow: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media scren and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media scren and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;

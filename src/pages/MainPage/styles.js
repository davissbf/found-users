import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;

  img {
    width: 130px;
  }

  h1 {
    font-size: 2.5rem;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 583px;

  input {
    height: 70px;
    width: 100%;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${(props) => props.theme.colors.metalDark};
    border: 2px solid ${(props) => props.theme.colors.white};
    border-right: 0;

    &::placeholder {
      color: ${(props) => props.theme.colors.metalDark};
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 70px;
  background: #04d361;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;

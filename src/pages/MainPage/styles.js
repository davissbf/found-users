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
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 583px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.vsm}) {
    display: block;
  }
`;

export const Input = styled.input`
  margin-right: 8px;
  height: 70px;
  width: 100%;
  box-shadow: inset 2px 2px 5px ${(props) => props.theme.buttonColor.primary},
    inset -5px -5px 10px ${(props) => props.theme.buttonColor.secondary};
  transition: all 0.2s ease-in-out;

  appearance: none;
  -webkit-appearance: none;

  border: 0;
  font-size: 17px;
  border-radius: 5px 0 0 5px;
  padding: 0 24px;
  background-color: ${(props) => props.theme.buttonColor.backgroundColor};
  color: ${(props) => props.theme.colors.metalDark};

  &:focus {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.buttonColor.primary},
      inset -1px -1px 2px ${(props) => props.theme.buttonColor.secondary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.vsm}) {
    border-radius: 3px;

    &::placeholder {
      text-align: center;
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 70px;
  border: 0;
  border-radius: 0 5px 5px 0;
  padding: 0 24px;
  background-color: ${(props) => props.theme.buttonColor.backgroundColor};
  color: ${(props) => props.theme.colors.metalDark};

  font-weight: bold;
  box-shadow: -5px -5px 20px ${(props) => props.theme.buttonColor.secondary},
    5px 5px 20px ${(props) => props.theme.buttonColor.primary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: -2px -2px 5px ${(props) => props.theme.buttonColor.secondary},
      2px 2px 5px ${(props) => props.theme.buttonColor.primary};
    background-color: ${shade(0.03, '#f0f0f5')};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.buttonColor.primary},
      inset -1px -1px 2px ${(props) => props.theme.buttonColor.secondary};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.vsm}) {
    margin-top: 15px;
    border-radius: 3px;
    width: 100%;
  }
`;

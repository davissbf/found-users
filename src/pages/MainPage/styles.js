import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  @media screen and (max-width: ${(props) => props.theme.breakpoints.vsm}) {
    display: block;
  }
`;

export const Input = styled.input`
  margin-right: 8px;
  height: 70px;
  width: 100%;
  box-shadow: ${(props) => props.theme.inputStyle.boxShadow},
    ${(props) => props.theme.inputStyle.boxShadowSecond};
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.buttonColor.backgroundColor};

  appearance: none;
  -webkit-appearance: none;

  border: 0;
  font-size: 17px;
  border-radius: 5px 0 0 5px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.metalDark};

  &:focus {
    box-shadow: ${(props) => props.theme.inputStyle.focus},
      ${(props) => props.theme.inputStyle.focusSecond};
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
  box-shadow: ${(props) => props.theme.buttonStyle.boxShadow},
    ${(props) => props.theme.buttonStyle.boxShadowSecond};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.buttonStyle.hover},
      ${(props) => props.theme.buttonStyle.hoverSecond};
  }

  &:active {
    box-shadow: ${(props) => props.theme.buttonStyle.active},
      ${(props) => props.theme.buttonStyle.activeSecond};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.vsm}) {
    margin-top: 15px;
    border-radius: 3px;
    width: 100%;
  }
`;

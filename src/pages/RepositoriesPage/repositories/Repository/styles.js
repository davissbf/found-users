import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.buttonColor.background};

  border-left: 3px solid
    ${(props) => props.color || props.theme.colors.champagneDark};
  padding: 1rem;
  cursor: pointer;

  box-shadow: inset 2px 2px 5px ${(props) => props.theme.buttonColor.primary},
    inset -5px -5px 10px ${(props) => props.theme.buttonColor.secondary};
  transition: all 0.2s ease-in-out;

  appearance: none;
  -webkit-appearance: none;
  color: ${(props) => props.theme.colors.metalDark};

  &:hover {
    box-shadow: -2px -2px 5px ${(props) => props.theme.buttonColor.secondary},
      2px 2px 5px ${(props) => props.theme.buttonColor.primary};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.buttonColor.primary},
      inset -1px -1px 2px ${(props) => props.theme.buttonColor.secondary};
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 1.25;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.color || props.theme.colors.champagneDark};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;

  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 2rem;

  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: left;
  padding: 1rem;
  margin-top: 15px;
  cursor: pointer;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: -5px -5px 20px ${(props) => props.theme.buttonColor.secondary},
    5px 5px 20px ${(props) => props.theme.buttonColor.primary};
  transition: all 0.2s ease-in-out;

  &:focus {
    color: ${(props) => props.theme.colors.turquese};
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.buttonColor.primary},
      inset -1px -1px 2px ${(props) => props.theme.buttonColor.secondary};
  }

  &:hover {
    color: ${(props) => props.theme.colors.turquese};
    box-shadow: -2px -2px 5px ${(props) => props.theme.buttonColor.secondary},
      2px 2px 5px ${(props) => props.theme.buttonColor.primary};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 5px 1rem;
    border-radius: 20px;
  }
`;

import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.secondaryBackground};
    color: ${theme.color};
    box-shadow: 0 5px 6px -2px ${theme.shadow};
  `};
  padding: 20px 0;
  transition: all 400ms ease-in-out;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 21px;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.color};
  `};
  background: transparent;
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  font-size: 17px;
  transition: all 400ms ease-in-out;
`;

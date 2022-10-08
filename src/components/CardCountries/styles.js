import styled, { css } from 'styled-components';

export const Link = styled.a`
  cursor:pointer;
  transition: all 400ms ease-in-out;
  background-color: transparent;

  &:hover {
    transform: scale(1.10) rotate(8deg);
  }
`;

export const Cards = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.secondaryBackground};
    box-shadow: 0 0 5px 1px ${theme.shadow};
  `};

  padding: 25px 20px 45px;
  border-radius: 0 0 5px 5px;
  text-align: left;
  transition: all 400ms ease-in-out;
`;

export const CountryInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 8px;
`;

export const Infos = styled.p`
${({ theme }) => css`
  color: ${theme.color};
`};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Span = styled.span`
  font-weight: 300;
`;

export const Flag = styled.img`
${({ theme }) => css`
  transition: all 400ms ease-in-out;
  box-shadow: 0 0 5px 1px ${theme.shadow};
`};
width: 100%;
border-radius: 5px 5px 0 0;
height: 180px;
`;

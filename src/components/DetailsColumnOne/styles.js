import styled, { css } from 'styled-components';

export const DetailsColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CountryDetailsText = styled.p`
${({ theme }) => css`
  color: ${theme.color};
`};
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  transition: all 400ms ease-in-out;
`;

export const CountryDetailsSpan = styled.span`
  font-weight: 300;
  font-size: 17px;
`;

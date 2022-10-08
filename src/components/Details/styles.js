import styled, { css } from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;

  @media screen and (max-width: 1200px) {
    gap: 50px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const DetailsColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CountryFlag = styled.img`
  width: 100%;
  max-width: 600px;
  height: 425px;

  @media screen and (max-width: 1200px) {
    max-width: 450px;
    height: 325px;
  }

  @media screen and (max-width: 1200px) {
    height: 300px;
  }

  @media screen and (max-width: 600px) {
    max-width: 330px;
    height: 225px;
  }
`;

export const CountryName = styled.h2`
  font-size: 27.2px;
`;

export const BordersCountry = styled.div`
  display: flex;
  gap: 5px;

`;

export const BorderDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

`;

export const BorderCountryName = styled.p`
${({ theme }) => css`
  color: ${theme.color};
  background-color: ${theme.secondaryBackground};
  box-shadow: 0 0 5px 1px  ${theme.shadow};
  padding: 3px 27px;
  transition:  all 400ms ease-in-out;
`};
`;

export const Span = styled.span`
${({ theme }) => css`
  color: ${theme.color};
  transition:  all 400ms ease-in-out;
`};
`;

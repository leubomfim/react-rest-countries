import styled, { css } from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
  gap: 55px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 269px);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 269px);
    gap: 58px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
    gap: 58px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    width: 100%;
  }
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 32px;
  ${({ theme }) => css`
    color: ${theme.color};
  `};
 `:
  

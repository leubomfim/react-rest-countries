import styled, { css } from 'styled-components';

export const SearchCountriesArea = styled.section`
  margin: 60px 0 70px;
`;

export const SearchDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const SearchArea = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.div`
  & > svg {
    ${({ theme }) => css`
      color: ${theme.inputColor};
  `};
    position: absolute;
    width: 25px;
    height: 25px;
    left: 20px;
    top: 16px;
  }
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    background: ${theme.secondaryBackground};
    color: ${theme.inputColor};
    box-shadow: 0 0 5px 1px  ${theme.shadow};
  `};
  max-width: 700px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 20px 15px 20px 70px;
  font-size: 0.9em;
  font-weight: 600;
  transition: all 400ms ease-in-out;

  @media screen and (max-width: 1200px) {
    max-width: 500px;
  }


  @media screen and (max-width: 900px) {
    max-width: inherit;
  }


  &::placeholder {
    ${({ theme }) => css`
    color: ${theme.inputColor};
  `};
  }
`;

export const DetailsRegion = styled.details`
  ${({ theme }) => css`
    color: ${theme.inputColor};
    box-shadow: 0 0 5px 1px  ${theme.shadow};
    background: ${theme.secondaryBackground};
  `};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 400ms ease-in-out;
`;

export const Summary = styled.summary`
  cursor: pointer;
  padding: 20px;
`;

export const SummaryText = styled.p`
  ${({ theme, transformArrow }) => css`
    color: ${theme.inputColor};
    font-size: .9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;

    & > svg {
      transform: ${transformArrow ? 'rotate(-180deg)' : 'rotate(0)'};
      transition: all 400ms ease-in-out;
      font-size: 1.2rem
    };
  `};
`;

export const RegionList = styled.div`
  ${({ theme }) => css`
    color: ${theme.inputColor};
    box-shadow: 0 0 5px 1px  ${theme.shadow};
    background: ${theme.secondaryBackground};
  `};
  position: absolute;
  left: 0;
  top: calc(100% + 0.5rem);
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  transition: all 400ms ease-in-out;
`;

export const Ul = styled.ul`
  display:flex;
  flex-direction: column;
  gap: 6px;
  z-index: 999;
`;

export const List = styled.li`
  ${({ theme }) => css`
    color: ${theme.inputColor};
    cursor: pointer;
    font-size: .9rem;
  `};
`;

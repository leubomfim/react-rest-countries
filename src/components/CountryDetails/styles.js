import styled, { css } from 'styled-components';

export const BackButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.color};
    background: ${theme.secondaryBackground};
    box-shadow: 0 0 5px 1px  ${theme.shadow};
    border-radius: 5px;
    padding: 8px 30px;
    box-shadow: ;
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 70px 0;
    font-size: 0.9rem;
    transition: all 400ms ease-in-out;
    cursor: pointer;
    & > svg {
      font-size: 1.2rem
    }
  `};
`;

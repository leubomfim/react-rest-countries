import styled from 'styled-components';

export const DetailsTwoColumns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 120px;

  @media screen and (max-width: 1200px) {
    gap: 50px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

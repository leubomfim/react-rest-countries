import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    max-width: 95vw;
  }

  @media screen and (max-width: 900px) {
    max-width: 90vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;

import * as Styled from './styles';
import { useContext } from 'react';
import { UserContext } from '../../Templates/Home';
import { CardCountries } from '../CardCountries';
import { Container } from '../Container';

export const Countries = () => {
  const countries = useContext(UserContext);
  return (
    <section>
      <Container>
        {countries.length === 0 ? (
          <Styled.Loading>Loading...</Styled.Loading>
        ) : (
          <Styled.CardsWrapper>
            {countries.length > 0 && <CardCountries />}
          </Styled.CardsWrapper>
        )}
      </Container>
    </section>
  );
};

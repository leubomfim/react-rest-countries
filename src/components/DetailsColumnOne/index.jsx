import * as Styled from './styles';
import P from 'prop-types';

export const DetailsColumnOne = ({ detail }) => {
  return (
    <Styled.DetailsColumnOne>
      <Styled.CountryDetailsText>
        Native Name:
        <Styled.CountryDetailsSpan>
          {Object.values(detail.name.nativeName)[0].common}
        </Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        Population:
        <Styled.CountryDetailsSpan>
          {detail.population.toLocaleString()}
        </Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        <Styled.CountryDetailsSpan> {detail.region}</Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        Sub Region:
        <Styled.CountryDetailsSpan>
          {detail.subregion}
        </Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        Capital:
        <Styled.CountryDetailsSpan>{detail.capital}</Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
    </Styled.DetailsColumnOne>
  );
};

DetailsColumnOne.propTypes = {
  detail: P.object.isRequired,
};

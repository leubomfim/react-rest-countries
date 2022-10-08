import * as Styled from './styles';
import P from 'prop-types';

export const DetailsColumnTwo = ({ detail }) => {
  return (
    <Styled.DetailsColumnTwo>
      <Styled.CountryDetailsText>
        Top Level Domain:
        <Styled.CountryDetailsSpan>{detail.tld}</Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        Currencies:
        <Styled.CountryDetailsSpan>
          {Object.values(detail.currencies)[0].name}
        </Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
      <Styled.CountryDetailsText>
        Languages:
        <Styled.CountryDetailsSpan>
          {Object.values(detail.languages).toLocaleString()}.
        </Styled.CountryDetailsSpan>
      </Styled.CountryDetailsText>
    </Styled.DetailsColumnTwo>
  );
};

DetailsColumnTwo.propTypes = {
  detail: P.object.isRequired,
};

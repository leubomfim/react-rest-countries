import * as Styled from './styles.js';
import P from 'prop-types';
import { DetailsColumnOne } from '../DetailsColumnOne/index.jsx';
import { DetailsColumnTwo } from '../DetailsColumnTwo/index.jsx';
import { DetailsTwoColumns } from '../DetailsTwoColumns/index.jsx';

export const Details = ({ details = [] }) => {
  return (
    <>
      {details.map((detail) => (
        <Styled.DetailsWrapper key={detail.name.common}>
          <Styled.CountryFlag src={detail.flags.png} />
          <Styled.DetailsColumnDirection>
            <Styled.CountryName>{detail.name.common}</Styled.CountryName>
            <DetailsTwoColumns>
              <DetailsColumnOne detail={detail} />
              <DetailsColumnTwo detail={detail} />
            </DetailsTwoColumns>
            <Styled.BordersCountry>
              <Styled.Span>Borders:</Styled.Span>
              <Styled.BorderDisplay>
                {detail.borders ? (
                  detail.borders.map((border, index) => (
                    <Styled.BorderCountryName key={index}>
                      {border}
                    </Styled.BorderCountryName>
                  ))
                ) : (
                  <Styled.Borders>No borders...</Styled.Borders>
                )}
              </Styled.BorderDisplay>
            </Styled.BordersCountry>
          </Styled.DetailsColumnDirection>
        </Styled.DetailsWrapper>
      ))}
    </>
  );
};

Details.propTypes = {
  details: P.array,
};

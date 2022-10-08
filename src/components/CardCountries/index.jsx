import * as Styled from './styles';
import { useContext } from 'react';
import { UserContext } from '../../Templates/Home';
import { useNavigate } from 'react-router-dom';

export const CardCountries = () => {
  const countries = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (name, e) => {
    e.preventDefault();
    navigate(`/${name.toLowerCase()}`);
  };

  return (
    <>
      {countries.map(({ name, flags, region, population, capital }) => (
        <Styled.Link
          key={name.common}
          onClick={(e) => handleClick(name.common, e)}
        >
          <Styled.Flag src={flags.png} alt={`${name.common} flag`} />
          <Styled.Cards>
            <h2 aria-label={`${name.common} country name`}>{name.common}</h2>
            <Styled.CountryInfos>
              <Styled.Infos>
                Population:{' '}
                <Styled.Span>{population.toLocaleString()}</Styled.Span>
              </Styled.Infos>
              <Styled.Infos>
                Region: <Styled.Span>{region}</Styled.Span>
              </Styled.Infos>
              <Styled.Infos>
                Capital: <Styled.Span>{capital}</Styled.Span>
              </Styled.Infos>
            </Styled.CountryInfos>
          </Styled.Cards>
        </Styled.Link>
      ))}
    </>
  );
};

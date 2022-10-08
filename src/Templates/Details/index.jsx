import { Header } from '../../components/Header/index';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global-styles.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryDetails } from '../../components/CountryDetails';
import { fetchCountryDetails } from '../../api/api';

export const Details = () => {
  const [darkOrLightTheme, setDarkOrLightTheme] = useState(false);
  const [countryDetails, setCountryDetails] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetchCountryDetails(name, setCountryDetails);
  }, [name]);

  const handleClick = () => {
    setDarkOrLightTheme((d) => !d);
  };

  return (
    <ThemeProvider theme={!darkOrLightTheme ? lightMode : darkMode}>
      <Header onClick={handleClick} theme={darkOrLightTheme} />
      <CountryDetails details={countryDetails} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

import { Header } from '../../components/Header/index';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global-styles.js';
import { useState, createContext, useEffect } from 'react';
import { Countries } from '../../components/Countries/index';
import { SearchArea } from '../../components/SearchArea/index';
import {
  fetchCountries,
  fetchRegion,
  fetchSearchCountries,
} from '../../api/api.js';

export const UserContext = createContext();

function Home() {
  const [darkOrLightTheme, setDarkOrLightTheme] = useState(false);
  const [arrowTransform, setarrowTransform] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);

  const handleClick = () => {
    setDarkOrLightTheme((d) => !d);
  };

  const handleClickTransform = () => {
    setarrowTransform((d) => !d);
  };

  const handleFetchChange = (value) => {
    fetchSearchCountries(value, setCountries);
  };

  const handleFetchClick = (regionNme) => {
    fetchRegion(regionNme, setCountries);
  };

  return (
    <UserContext.Provider value={countries}>
      <ThemeProvider theme={!darkOrLightTheme ? lightMode : darkMode}>
        <Header onClick={handleClick} theme={darkOrLightTheme} />
        <SearchArea
          handleFetchChange={handleFetchChange}
          handleFetchClick={handleFetchClick}
          onClick={handleClickTransform}
          transform={arrowTransform}
        />
        <Countries />
        <GlobalStyles />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default Home;

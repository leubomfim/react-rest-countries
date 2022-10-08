export const fetchCountries = async (setCountries) => {
  try {
    const url = 'https://restcountries.com/v3.1/all';
    const response = fetch(url);
    const [countries] = await Promise.all([response]);
    const data = await countries.json();
    setCountries(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryDetails = async (name, setCountryDetails) => {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const response = fetch(url);
    const [countries] = await Promise.all([response]);
    const data = await countries.json();
    setCountryDetails(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchSearchCountries = async (valueInput, setCountries) => {
  try {
    const url = `https://restcountries.com/v3.1/all`;
    const response = fetch(url);
    const [countries] = await Promise.all([response]);
    const data = await countries.json();
    const filterCharacter = await data.filter((value) => {
      return value.name.common.toLowerCase().includes(valueInput);
    });
    setCountries(valueInput.length > 0 ? filterCharacter : data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchRegion = async (regionName, setCountries) => {
  if (regionName === 'all') {
    try {
      fetchCountries(setCountries);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const url = `https://restcountries.com/v3.1/region/${regionName}`;
      const response = fetch(url);
      const [countries] = await Promise.all([response]);
      const data = await countries.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  }
};

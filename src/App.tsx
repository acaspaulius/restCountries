import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import { ICountry } from './types';
import { fetchCountriesAPICall } from './plugins/http';

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchCountries = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await fetchCountriesAPICall();

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className='App'>
      <Header />
      <CountryList countries={countries} isLoading={isLoading} onFailure={hasError ? fetchCountries : undefined} />
    </div>
  );
}

export default App;

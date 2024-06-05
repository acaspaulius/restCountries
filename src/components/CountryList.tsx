import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../plugins/http';
import CountryComp from './CountryComp';
import Filters from './Filters';

type Country = {
  name: string;
  region: string;
  area: number;
};

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    };
    getCountries();
  }, []);

  return (
    <main>
      <Filters />
      <ul className='country_list'>
        {filteredCountries.map((country) => (
          <CountryComp key={country.name} {...country} />
        ))}
      </ul>
    </main>
  );
};

export default CountryList;

import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../plugins/http';
import CountryComp from './CountryComp';
import Filters from './Filters';
import Pagination from './Pagination';
import { ICountry } from '../types/countries';
import { TSortingOrder } from '../types/pagination';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [sortOrder, setSortOrder] = useState<TSortingOrder>('asc');
  const [isLithuaniaFiltered, setLithuaniaFiltered] = useState(false);
  const [isOceaniaFiltered, setOceaniaFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    };

    getCountries();
  }, []);

  const sortCountries = (countriesToSort: ICountry[], order: TSortingOrder): ICountry[] => {
    return [...countriesToSort].sort((a, b) => {
      if (order === 'asc') return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
  };

  const handleSort = () => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedCountries = sortCountries(filteredCountries, order);
    setFilteredCountries(sortedCountries);
    setSortOrder(order);
  };

  const applyFilters = (countriesToFilter: ICountry[], filterBy: 'none' | 'lithuania' | 'oceania'): ICountry[] => {
    let filtered = countriesToFilter;

    if (filterBy === 'lithuania') {
      filtered = filtered.filter((country) => country.area < 65300);
    } else if (filterBy === 'oceania') {
      filtered = filtered.filter((country) => country.region === 'Oceania');
    }

    return sortCountries(filtered, sortOrder);
  };

  const filterSmallerThanLithuania = () => {
    const newFilterState = !isLithuaniaFiltered;
    setLithuaniaFiltered(newFilterState);
    setOceaniaFiltered(false); // Reset Oceania filter when Lithuania filter is applied

    const updatedFiltered = applyFilters(countries, newFilterState ? 'lithuania' : 'none');
    setFilteredCountries(updatedFiltered);
    setCurrentPage(1); // Reset to the first page
  };

  const filterByOceania = () => {
    const newFilterState = !isOceaniaFiltered;
    setOceaniaFiltered(newFilterState);
    setLithuaniaFiltered(false); // Reset Lithuania filter when Oceania filter is applied

    const updatedFiltered = applyFilters(countries, newFilterState ? 'oceania' : 'none');
    setFilteredCountries(updatedFiltered);
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main>
      <Filters
        onSort={handleSort}
        sortOrder={sortOrder}
        filterSmallerThanLithuania={filterSmallerThanLithuania}
        isLithuaniaFiltered={isLithuaniaFiltered}
        filterByOceania={filterByOceania}
        isOceaniaFiltered={isOceaniaFiltered}
      />
      <ul className='country_list'>
        {currentCountries.map((country) => (
          <CountryComp key={country.name} {...country} />
        ))}
      </ul>
      <Pagination itemsPerPage={itemsPerPage} totalItems={filteredCountries.length} paginate={paginate} currentPage={currentPage} />
    </main>
  );
};

export default CountryList;

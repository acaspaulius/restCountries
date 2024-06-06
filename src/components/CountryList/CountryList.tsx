import React, { useEffect, useRef, useState } from 'react';
import { EAvailableCountryFilters, ICountry, IListParams } from '../../types';
import CountryInfo from '../CountryInfo/CountryInfo';
import Loader from '../Loader/Loader';
import Filters from '../Filters/Filters';
import { sortCountries } from './utils';
import Pagination from '../Pagination/Pagination';

interface IProps {
  countries: ICountry[];
  isLoading: boolean;
  onFailure?: () => void;
}

const CountryList: React.FC<IProps> = ({ countries: originalCountries, isLoading, onFailure }) => {
  const [currentCountries, setCurrentCountries] = useState(originalCountries);

  const isMounted = useRef(false);

  const [listParams, setListParams] = useState<IListParams>({
    currentFilter: null,
    currentPage: 1,
    perPage: 10,
    sortOrder: 'asc',
    totalCount: 0,
  });

  useEffect(() => {
    if (!currentCountries.length && !!originalCountries.length) {
      organizeCountries();
      isMounted.current = true;
    }
  }, [originalCountries]);

  useEffect(() => {
    if (!isMounted.current) return;

    organizeCountries();
  }, [listParams.perPage, listParams.currentPage]);

  useEffect(() => {
    if (!isMounted.current) return;

    if (listParams.currentPage !== 1) {
      setListParams({ ...listParams, currentPage: 1 });
    } else {
      organizeCountries();
    }
  }, [listParams.currentFilter, listParams.sortOrder]);

  const handlePagination = (countries: ICountry[]) => {
    const { perPage, currentPage } = listParams;

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;

    return countries.slice(indexOfFirstItem, indexOfLastItem);
  };

  const handleFiltering = () => {
    switch (listParams.currentFilter) {
      case EAvailableCountryFilters.SMALLER_THAN_LITHUANIA:
        return originalCountries.filter((country) => country.area < 65300);
      case EAvailableCountryFilters.ONLY_OCEANIA_REGION:
        return originalCountries.filter((country) => country.region === 'Oceania');
      default:
        return originalCountries;
    }
  };

  const organizeCountries = () => {
    const filtered = handleFiltering();

    setListParams({ ...listParams, totalCount: filtered.length });

    const sorted = sortCountries(filtered, listParams.sortOrder);

    const paginated = handlePagination(sorted);

    setCurrentCountries(paginated);
  };

  return (
    <>
      <Filters
        sorting={{
          current: listParams.sortOrder,
          onSort: (order) => setListParams({ ...listParams, sortOrder: order }),
        }}
        filtering={{
          current: listParams.currentFilter,
          onFilter: (filter) => setListParams({ ...listParams, currentFilter: filter }),
        }}
        disabled={isLoading}
      />
      {!isLoading ? (
        <>
          <ul className='country_list'>
            {currentCountries.map((country) => (
              <CountryInfo key={country.name} {...country} />
            ))}
          </ul>
          <Pagination
            itemsPerPage={listParams.perPage}
            totalItems={listParams.totalCount}
            paginate={(page, perPage) => setListParams({ ...listParams, currentPage: page, perPage })}
            currentPage={listParams.currentPage}
          />
        </>
      ) : (
        <Loader customAction={onFailure ? { heading: 'Something went wrong!', buttonText: 'Refetch countries', onClick: onFailure } : undefined} />
      )}
    </>
  );
};

export default CountryList;

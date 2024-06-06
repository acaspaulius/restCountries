import React from 'react';

import { TSortingOrder, EAvailableCountryFilters } from '../../types';
import * as S from './Filters.styled';

interface IProps {
  sorting: {
    current: TSortingOrder;
    onSort: (order: TSortingOrder) => void;
  };
  filtering: {
    current: EAvailableCountryFilters | null;
    onFilter: (filter: EAvailableCountryFilters | null) => void;
  };
  disabled: boolean;
}

const filtersConfig: { id: EAvailableCountryFilters; toggleText: string; untoggleText: string }[] = [
  {
    id: EAvailableCountryFilters.SMALLER_THAN_LITHUANIA,
    toggleText: 'Filter Smaller than Lithuania',
    untoggleText: 'Remove Lithuania Filter',
  },
  {
    id: EAvailableCountryFilters.ONLY_OCEANIA_REGION,
    toggleText: 'Filter Oceania',
    untoggleText: 'Remove Oceania Filter',
  },
];

const Filters: React.FC<IProps> = ({ sorting, filtering, disabled }) => {
  const handleSorting = () => {
    const { current, onSort } = sorting;

    const newOrder = current === 'asc' ? 'desc' : 'asc';
    onSort(newOrder);
  };

  const handleFiltering = (filter: EAvailableCountryFilters) => {
    const { current, onFilter } = filtering;

    onFilter(filter !== current ? filter : null);
  };

  const sortingText = `Sort ${sorting.current === 'asc' ? 'Z-A' : 'A-Z'}`;

  return (
    <S.FilterButtonsContainer>
      <S.FilterGroup>
        {filtersConfig.map(({ id, toggleText, untoggleText }) => {
          const isActive = filtering.current === id;

          const buttonText = isActive ? untoggleText : toggleText;

          return (
            <S.Button key={id} onClick={() => handleFiltering(id)} disabled={disabled} isActive={isActive}>
              {buttonText}
            </S.Button>
          );
        })}
      </S.FilterGroup>
      <S.FilterGroup>
        <S.Button onClick={handleSorting} disabled={disabled} isActive={false}>
          {sortingText}
        </S.Button>
      </S.FilterGroup>
    </S.FilterButtonsContainer>
  );
};

export default Filters;

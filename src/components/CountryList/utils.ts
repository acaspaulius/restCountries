import { ICountry, TSortingOrder } from '../../types';

export const sortCountries = (countries: ICountry[], order: TSortingOrder) => {
  return [...countries].sort((lhs, rhs) => {
    if (order === 'asc') return lhs.name.localeCompare(rhs.name);
    return rhs.name.localeCompare(lhs.name);
  });
};

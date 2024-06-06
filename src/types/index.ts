export interface ICountry {
  name: string;
  region: string;
  area: number;
}

export enum EAvailableCountryFilters {
  SMALLER_THAN_LITHUANIA,
  ONLY_OCEANIA_REGION,
}

export type TSortingOrder = 'desc' | 'asc';

export type TPerPage = 10 | 25 | 50 | 100;

export interface IListParams {
  sortOrder: TSortingOrder;
  currentFilter: EAvailableCountryFilters | null;
  currentPage: number;
  perPage: TPerPage;
  totalCount: number;
}

import { ICountry } from '../types';

const API_URL = 'https://restcountries.com/v2/all?fields=name,region,area';

export const fetchCountriesAPICall = async (): Promise<ICountry[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }

    const data: ICountry[] = await response.json();

    return data;
  } catch (error) {
    console.log('Error fetching countries data: ', error);
    throw error;
  }
};

const API_URL = 'https://restcountries.com/v2/all?fields=name,region,area';

type Country = {
  name: string;
  region: string;
  area: number;
};

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching countries data: ', error);
    throw error;
  }
};

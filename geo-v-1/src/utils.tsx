import { Country } from '../types/types';
import { setLoading, setError, setCountries } from './redux/actions';
import { Dispatch } from 'redux';

export const fetchCountries = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Error while loading data');
    }
    const data = await response.json();

    data.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));
    dispatch(setCountries(data));
  } catch (err) {
    dispatch(setError((err as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const filterCountries = (countries: Country[], searchQuery: string): Country[] => {
  return countries.filter(country => {
    const commonName = country.name.common.toLowerCase();
    const translations = Object.values(country.translations).map(t => t.common.toLowerCase());
    return commonName.includes(searchQuery.toLowerCase()) || translations.some(t => t.includes(searchQuery.toLowerCase()));
  });
};

export const groupCountriesByInitial = (countries: Country[]): { title: string; data: Country[] }[] => {
  return countries.reduce((acc: any[], country) => {
    const firstLetter = country.name.common[0].toUpperCase();
    const section = acc.find((item) => item.title === firstLetter);

    if (section) {
      section.data.push(country);
    } else {
      acc.push({ title: firstLetter, data: [country] });
    }

    return acc;
  }, []);
};
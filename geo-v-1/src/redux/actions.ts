import { Country } from '../../types/types';

export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FAVORITE_VISIBLE = 'SET_FAVORITE_VISIBLE';
export const FILTER_COUNTRIES_BY_LANGUAGE = 'FILTER_COUNTRIES_BY_LANGUAGE';

export const setCountries = (countries: Country[]) => ({ type: SET_COUNTRIES, payload: countries });
export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading });
export const setError = (error: string) => ({ type: SET_ERROR, payload: error });
export const setSearchQuery = (query: string) => ({ type: SET_SEARCH_QUERY, payload: query });
export const setSelectedCountry = (country: Country | null) => ({ type: SET_SELECTED_COUNTRY, payload: country });
export const toggleFavorite = (countryCode: string) => ({ type: TOGGLE_FAVORITE, payload: countryCode });
export const setFavoriteVisible = (isVisible: boolean) => ({ type: SET_FAVORITE_VISIBLE, payload: isVisible });
export const filterCountriesByLanguage = (language: string) => ({ type: FILTER_COUNTRIES_BY_LANGUAGE, payload: language });
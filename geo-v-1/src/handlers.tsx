import { Dispatch } from 'redux';
import { Country } from '../types/types';
import { 
  setSelectedCountry, 
  setFavoriteVisible, 
  toggleFavorite 
} from './redux/actions';
import { fetchCountries } from './utils';

export const loadCountries = async (dispatch: Dispatch, setRefreshing: (value: boolean) => void) => {
  setRefreshing(true);
  await fetchCountries(dispatch);
  setRefreshing(false);
};

export const openCountryDetails = (dispatch: Dispatch, country: Country) => {
  dispatch(setSelectedCountry(country));
};

export const closeCountryDetails = (dispatch: Dispatch) => {
  dispatch(setSelectedCountry(null));
};

export const handleToggleFavorite = (dispatch: Dispatch, countryCode: string) => {
  dispatch(toggleFavorite(countryCode));
};

export const handleFavoriteSelection = (dispatch: Dispatch, openCountryDetails: (country: Country) => void, country: Country) => {
  openCountryDetails(country);
  dispatch(setFavoriteVisible(false));
};
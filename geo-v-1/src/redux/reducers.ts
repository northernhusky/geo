import { AnyAction } from 'redux';
import {
    SET_COUNTRIES,
    SET_LOADING,
    SET_ERROR,
    SET_SEARCH_QUERY,
    SET_SELECTED_COUNTRY,
    TOGGLE_FAVORITE,
    SET_FAVORITE_VISIBLE,
    FILTER_COUNTRIES_BY_LANGUAGE
} from './actions';
import { Country } from '../../types/types';

interface State {
    countries: Country[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    selectedCountry: Country | null;
    favorites: string[];
    isFavoriteVisible: boolean;
    filteredCountries: Country[],
}

const initialState: State = {
    countries: [],
    loading: true,
    error: null,
    searchQuery: '',
    selectedCountry: null,
    favorites: [],
    isFavoriteVisible: false,
    filteredCountries: []
};

const rootReducer = (state = initialState, action: AnyAction): State => {
    switch (action.type) {
        case SET_COUNTRIES:
            return { ...state, countries: action.payload, loading: false };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        case SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload };
        case SET_SELECTED_COUNTRY:
            return { ...state, selectedCountry: action.payload };
        case TOGGLE_FAVORITE: {
            const { payload: countryCode } = action;
            const favorites = state.favorites.includes(countryCode)
                ? state.favorites.filter(code => code !== countryCode)
                : [...state.favorites, countryCode];
            return { ...state, favorites };
        }
        case FILTER_COUNTRIES_BY_LANGUAGE: {
            const language = action.payload;
            const filteredCountries = state.countries.filter(country =>
                country.languages && Object.keys(country.languages).includes(language)
            );
            return { ...state, filteredCountries };
        }        
        case SET_FAVORITE_VISIBLE:
            return { ...state, isFavoriteVisible: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
import { Country } from '../../types/types';

export interface RootState {
    countries: Country[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    selectedCountry: Country | null;
    favorites: string[];
    isFavoriteVisible: boolean;
}
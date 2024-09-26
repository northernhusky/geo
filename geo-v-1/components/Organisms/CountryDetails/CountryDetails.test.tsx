import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CountryDetails from './CountryDetails';

const mockCountry = {
  name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
  cca3: 'BRA',
  population: 212559417,
  area: 8515767,
  flags: { png: 'https://flagcdn.com/w320/br.png' },
  borders: ['ARG', 'BOL'],
  languages: { por: 'Portuguese' },
};

describe('CountryDetails', () => {
  const mockOnClose = jest.fn();
  const mockOnToggleFavorite = jest.fn();
  const mockOnOpenCountryDetails = jest.fn();
  const mockSetFilteredCountries = jest.fn();

  it('renders correctly with country details', () => {
    const { getByText } = render(
      <CountryDetails
        country={mockCountry}
        isVisible={true}
        onClose={mockOnClose}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
        onOpenCountryDetails={mockOnOpenCountryDetails}
        countries={[mockCountry]}
        setFilteredCountries={mockSetFilteredCountries}
      />
    );
    expect(getByText('Brazil')).toBeTruthy();
    expect(getByText('Federative Republic of Brazil')).toBeTruthy();
  });

  it('handles close and toggle favorite actions', () => {
    const { getByText } = render(
      <CountryDetails
        country={mockCountry}
        isVisible={true}
        onClose={mockOnClose}
        onToggleFavorite={mockOnToggleFavorite}
        isFavorite={false}
        onOpenCountryDetails={mockOnOpenCountryDetails}
        countries={[mockCountry]}
        setFilteredCountries={mockSetFilteredCountries}
      />
    );
    fireEvent.press(getByText('Close'));
    expect(mockOnClose).toHaveBeenCalled();

    fireEvent.press(getByText('♡ Add to favorites'));
    expect(mockOnToggleFavorite).toHaveBeenCalledWith('BRA');
  });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoritesModal from './FavoritesModal';

const mockCountries = [
  { name: { common: 'Brazil' }, cca3: 'BRA', flags: { png: 'https://flagcdn.com/w320/br.png' } },
  { name: { common: 'Argentina' }, cca3: 'ARG', flags: { png: 'https://flagcdn.com/w320/ar.png' } },
];

describe('FavoritesModal', () => {
  const mockOnClose = jest.fn();
  const mockOnSelectCountry = jest.fn();

  it('renders favorite countries and handles selection', () => {
    const { getByText } = render(
      <FavoritesModal
        isVisible={true}
        favorites={['BRA']}
        countries={mockCountries}
        onClose={mockOnClose}
        onSelectCountry={mockOnSelectCountry}
      />
    );
    expect(getByText('♥ Favorites')).toBeTruthy();
    expect(getByText('Brazil')).toBeTruthy();

    fireEvent.press(getByText('Brazil'));
    expect(mockOnSelectCountry).toHaveBeenCalledWith(mockCountries[0]);

    fireEvent.press(getByText('Close'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
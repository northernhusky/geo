import React from 'react';
import { render } from '@testing-library/react-native';
import AddToFavoritesButton from './AddToFavoritesButton';

describe('AddToFavoritesButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<AddToFavoritesButton />);
    expect(getByTestId('add-to-favorites-button')).toBeTruthy();
  });
});
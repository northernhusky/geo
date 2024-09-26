import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoritesButton from './FavoritesButton';

describe('FavoritesButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly and triggers onPress', () => {
    const { getByText } = render(<FavoritesButton onPress={mockOnPress} />);
    fireEvent.press(getByText('♥'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
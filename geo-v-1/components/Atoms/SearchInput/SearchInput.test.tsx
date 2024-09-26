import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockOnChangeText = jest.fn();

  it('renders correctly and triggers onChangeText', () => {
    const { getByPlaceholderText } = render(<SearchInput value="" onChangeText={mockOnChangeText} />);
    fireEvent.changeText(getByPlaceholderText('⌕ Search'), 'Brazil');
    expect(mockOnChangeText).toHaveBeenCalledWith('Brazil');
  });
});
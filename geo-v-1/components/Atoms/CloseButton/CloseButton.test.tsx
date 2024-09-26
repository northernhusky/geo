import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
  const mockOnClose = jest.fn();

  it('renders correctly and triggers onClose', () => {
    const { getByText } = render(<CloseButton onClose={mockOnClose} />);
    fireEvent.press(getByText('Close'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
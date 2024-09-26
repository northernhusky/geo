import React from 'react';
import { render } from '@testing-library/react-native';
import GreetingText from './GreetingsText';

describe('GreetingText', () => {
  it('renders correctly based on time of day', () => {
    const { getByText } = render(<GreetingText />);
    expect(getByText(/Good Morning|Good Afternoon|Good Evening|Time to sleep|Early bird!/)).toBeTruthy();
  });
});
import React from 'react';
import { TextInput } from 'react-native';
import styles from './SearchInputStyles'

const SearchInput: React.FC<{
  value: string;
  onChangeText: (text: string) => void;
}> = ({ value, onChangeText }) => {

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="⌕ Search"
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={'rgba(70, 61, 103, .78)'}
    />
  );
};

export default SearchInput;
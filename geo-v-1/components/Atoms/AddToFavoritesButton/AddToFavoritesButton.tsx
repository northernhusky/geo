import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './AddToFavoritesStyles';

const AddToFavoritesButton: React.FC<{
  isFavorite: boolean;
  onToggleFavorite: (countryCode: string) => void;
  countryCode: string;
}> = ({ isFavorite, onToggleFavorite, countryCode }) => {
  return (
    <TouchableOpacity testID="add-to-favorites-button" style={styles.favoritesButton} onPress={() => onToggleFavorite(countryCode)}>
      <Text style={styles.favorite}>
        {isFavorite ? '♥ Remove from favorites' : '♡ Add to favorites'}
      </Text>
    </TouchableOpacity>
  );
};

export default AddToFavoritesButton;
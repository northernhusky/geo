import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './FavoritesButtonStyles'

const FavoritesButton: React.FC<{
  onPress: () => void;
}> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.favoritesButton}>♥</Text>
    </TouchableOpacity>
  );
};

export default FavoritesButton;
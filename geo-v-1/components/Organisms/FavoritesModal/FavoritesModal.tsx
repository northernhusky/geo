import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Country } from '../../../types/types';
import { BlurView } from 'expo-blur';
import CloseButton from '../../Atoms/CloseButton/CloseButton';
import styles from './FavoritesModalStyles'

const FavoritesModal: React.FC<{
  isVisible: boolean;
  favorites: string[];
  countries: Country[];
  onClose: () => void;
  onSelectCountry: (country: Country) => void;
}> = ({ isVisible, favorites, countries, onClose, onSelectCountry }) => {
  const favoriteCountries = countries.filter(country => favorites.includes(country.cca3));

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <BlurView intensity={90} tint={'dark'} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>♥ Favorites</Text>
          <FlatList
            data={favoriteCountries}
            keyExtractor={(item) => item.cca3}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelectCountry(item)} style={styles.itemContainer}>
                <Image source={{ uri: item.flags.png }} style={styles.flag} />
                <Text style={styles.item}>{item.name.common}</Text>
              </TouchableOpacity>
            )}
          />
          <CloseButton onClose={onClose} />
        </View>
      </BlurView>
    </Modal>
  );
};

export default FavoritesModal;
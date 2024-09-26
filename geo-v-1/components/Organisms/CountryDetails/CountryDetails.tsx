import React from 'react';
import { Modal, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { Country } from '../../../types/types';
import CloseButton from '../../Atoms/CloseButton/CloseButton';
import AddToFavoritesButton from '../../Atoms/AddToFavoritesButton/AddToFavoritesButton';
import styles from './CountryDetailsStyles';

const CountryDetails: React.FC<{
  country: Country;
  isVisible: boolean;
  onClose: () => void;
  onToggleFavorite: (countryCode: string) => void;
  isFavorite: boolean;
  onOpenCountryDetails: (country: Country) => void;
  countries: Country[];
  setFilteredCountries: (countries: Country[]) => void;
}> = ({
  country,
  isVisible,
  onClose,
  onToggleFavorite,
  isFavorite,
  onOpenCountryDetails,
  countries,
  setFilteredCountries,
}) => {
  const neighboringCountries = country.borders || [];
  const languages = country.languages ? Object.keys(country.languages) : [];

  const sortedCountries = [...countries].sort((a, b) => b.population - a.population);
  
  const countryIndex = sortedCountries.findIndex(c => c.cca3 === country.cca3) + 1;

  const filterCountriesByLanguage = (language: string) => {
    const filtered = countries.filter((c) => c.languages && language in c.languages);
    setFilteredCountries(filtered);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <ImageBackground 
        source={{ uri: country.flags.png }} 
        style={styles.background}
        blurRadius={10}
      >
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent} >
          <Text style={styles.title}>{country.name.common}</Text>
          <Image source={{ uri: country.flags.png }} style={styles.flag} />
          <Text style={styles.subtitle}>{country.name.official}</Text>
          <Text style={styles.info}>Code: {country.cca3}</Text>
          <Text style={styles.info}>Population: {country.population} (#{countryIndex})</Text>
          <Text style={styles.info}>Area: {country.area} км²</Text>
          
          {neighboringCountries.length > 0 && (
            <>
              <Text style={styles.subtitle}>Neighboring countries:</Text>
              {neighboringCountries.map((item) => {
                const neighboringCountry = countries.find(c => c.cca3 === item);
                return (
                  <TouchableOpacity key={item} onPress={() => neighboringCountry && onOpenCountryDetails(neighboringCountry)}>
                    <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </>
          )}

          {languages.length > 0 && (
            <>
              <Text style={styles.subtitle}>Languages:</Text>
              {languages.map((item) => (
                <TouchableOpacity key={item} onPress={() => filterCountriesByLanguage(item)}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          <View style={styles.bottomButtons}>
            <AddToFavoritesButton 
              isFavorite={isFavorite} 
              onToggleFavorite={onToggleFavorite} 
              countryCode={country.cca3}
            />
            <CloseButton onClose={onClose} />
          </View>
        </ScrollView>
      </ImageBackground>
    </Modal>
  );
};

export default CountryDetails;
import React, { useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  setFavoriteVisible
} from './src/redux/actions';
import { SectionList, ActivityIndicator, Text, View, TouchableOpacity, RefreshControl } from 'react-native';
import { Provider } from 'react-redux';
import { RootState } from './src/redux/types';
import store from './src/redux/store';
import { Country } from './types/types';
import CountryDetails from './components/Organisms/CountryDetails/CountryDetails';
import FavoritesModal from './components/Organisms/FavoritesModal/FavoritesModal'; 
import GreetingText from './components/Atoms/GreetingsText/GreetingsText';
import FavoritesButton from './components/Atoms/FavoritesButton/FavoritesButton';
import SearchInput from './components/Atoms/SearchInput/SearchInput';
import { Video } from 'expo-av';
import styles from './AppStyles';
import { filterCountries, groupCountriesByInitial } from './src/utils';
import { loadCountries, openCountryDetails, closeCountryDetails, handleToggleFavorite, handleFavoriteSelection } from './src/handlers';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { countries, loading, error, searchQuery, selectedCountry, favorites, isFavoriteVisible } = useSelector((state: RootState) => state);
  
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadCountries(dispatch, setRefreshing);
  }, [dispatch]);

  useEffect(() => {
    const filtered = filterCountries(countries, searchQuery);
    setFilteredCountries(filtered);
  }, [countries, searchQuery]);

  const handleOpenCountryDetails = useCallback(
    (country: Country) => {
      openCountryDetails(dispatch, country);
    },
    [dispatch]
  );

  const handleCloseCountryDetails = useCallback(() => {
    closeCountryDetails(dispatch);
  }, [dispatch]);

  const handleFavoriteSelectionCallback = useCallback(
    (country: Country) => {
      handleFavoriteSelection(dispatch, handleOpenCountryDetails, country);
    },
    [dispatch, handleOpenCountryDetails]
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={28} color="white" />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  const sections = filteredCountries.length > 0 ? groupCountriesByInitial(filteredCountries) : [];

  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/background.mp4')}
        style={styles.videoBackground}
        resizeMode='cover'
        isLooping
        isMuted
        shouldPlay
      />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.cca3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOpenCountryDetails(item)}>
            <Text style={styles.item}>{item.name.common}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ListHeaderComponent={(
          <>
            <View style={styles.header}>
              <GreetingText />
              <FavoritesButton onPress={() => dispatch(setFavoriteVisible(true))} />
            </View>
            <SearchInput
              value={searchQuery}
              onChangeText={text => dispatch(setSearchQuery(text))}
            />
          </>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadCountries(dispatch, setRefreshing)}
          />
        }
      />

      {selectedCountry && (
        <CountryDetails
          country={selectedCountry}
          isVisible={Boolean(selectedCountry)}
          onClose={handleCloseCountryDetails}
          onToggleFavorite={(countryCode) => handleToggleFavorite(dispatch, countryCode)}
          isFavorite={favorites.includes(selectedCountry.cca3)}
          countries={countries}
          setFilteredCountries={setFilteredCountries}
          onOpenCountryDetails={handleOpenCountryDetails}
        />
      )}
      
      <FavoritesModal
        isVisible={isFavoriteVisible}
        favorites={favorites}
        countries={countries}
        onClose={() => dispatch(setFavoriteVisible(false))}
        onSelectCountry={handleFavoriteSelectionCallback}
      />

      <StatusBar style='light' />
    </View>
  );
};

const MainApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MainApp;
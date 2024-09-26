import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    searchInput: {
      fontSize: 20,
      fontWeight: '300',
      color: 'lightgrey',
      backgroundColor: 'rgba(255, 255, 255, 0.012)',
      width: '100%',
      borderWidth: 1,
      marginLeft: 0,
      letterSpacing: 0.76,
      marginRight: 0,
      borderRadius: 11,
      textAlign: 'center',
      borderColor: 'black',
      padding: 8,
      shadowColor: 'rgba(150, 58, 100, .043)',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 1,
      shadowRadius: 33,
      marginBottom: '3%',
    },
    searchButton: {
        color: 'white'
    }
});

export default createStyles;
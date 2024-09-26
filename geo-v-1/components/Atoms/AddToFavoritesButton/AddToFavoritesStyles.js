import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    favorite: {
    fontSize: 21,
    color: '#cf1934',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: .2,
    marginTop: 20,
    marginBottom: 20,
},
favoritesButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.012)',
    width: '100%',
    borderWidth: 1,
    marginLeft: 0,
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
    }
});

export default createStyles;
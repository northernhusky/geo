import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    closeButton: {
        backgroundColor: 'rgba(5, 8, 10, 0.4012)',
        width: '100%',
        borderWidth: 1,
        borderRadius: 11,
        textAlign: 'center',
        borderColor: 'black',
        padding: 8,
        marginBottom: '2%',
        shadowColor: 'rgba(150, 58, 100, .043)',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 33,
      },
      close: {
        fontSize: 19,
        color: 'darkgrey',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
});

export default createStyles;
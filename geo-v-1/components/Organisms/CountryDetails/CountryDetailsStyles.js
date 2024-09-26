import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.91)',
      height: '100%'
    },
    background: {
        flex: 1,
    },
    title: {
      fontSize: 53,
      fontWeight: 'bold',
      color: 'rgba(255, 255, 255, .88)',
      marginTop: 20,
    },
    subtitle: {
      fontSize: 20,
      marginVertical: 10,
      marginTop: 10,
      marginBottom: 10,
      color: 'grey',
      fontWeight: '600',
    },
    flag: {
      width: '40%',
      height: '8%',
      marginVertical: 10,
      marginTop: 10,
      marginBottom: 10,
      objectFit: 'contain',
    },
    item: {
      color: 'rgba(255,255,255, 0.3)',
      fontSize: 19,
    },
    info: {
      color: 'rgba(255,255,255, 0.3)',
      fontSize: 14,
      letterSpacing: 0.2,
    },
    bottomButtons: {
      marginTop: 20,
      marginBottom: 60,
    },
    scrollViewContent: {
      paddingBottom: 88,
    }
  });

export default createStyles;
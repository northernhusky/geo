import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    modalContent: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      padding: 20,
    },
    modalTitle: {
      fontSize: 33,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'rgba(255,255,255, 0.11)',
      textAlign: 'left',
      marginTop: 25,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    flag: {
      width: 40,
      height: 25,
      marginRight: 10,
    },
    item: {
      fontSize: 22,
      color: '#fafafa',
      letterSpacing: .23,
    },
  });

export default createStyles;
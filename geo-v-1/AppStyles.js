import { StyleSheet } from 'react-native';

const createStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 17,
    },
    title: {
      fontSize: 33,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'rgba(233, 222, 255, .24)',
    },
    header: {
      marginBottom: 20,
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    item: {
      fontSize: 19,
      paddingVertical: 10,
      borderBottomColor: '#ccc',
      letterSpacing: .18,
      borderBottomWidth: 1,
      color: 'rgba(233, 222, 255, .64)',
    },
    sectionHeader: {
      fontSize: 21,
      fontWeight: 'bold',
      paddingVertical: 10,
      color: 'rgba(255,255,255, 0.12)',
    },
    videoBackground: {
      position: 'absolute',
      opacity: .12,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },    
    activityIndicator: {
        marginTop: 40,
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    }
  });

export default createStyles;
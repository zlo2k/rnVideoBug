import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width,
      height: '100%',
      paddingTop: 100
    },
    videoContainer: {
      position: 'relative',
      width,
      height: 500,
      marginBottom: 50,
    },
    video: {
      width: '100%',
      height: 'auto',
    },
    button: {
      position: 'absolute',
      top: 20,
      alignSelf: 'center',
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 10,
    },
    playButton: {
      position: 'absolute',
      bottom:10,
      right: 10,
      alignSelf: 'center',
      backgroundColor: '#007AFF',
      padding: 7,
      borderRadius: 10,
    },
    text: { color: 'white', fontWeight: 'bold' },
  });
};

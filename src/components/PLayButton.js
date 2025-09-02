import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getStyles } from '../styles/styles';

export const PlayButton = ({title="Play", onPress }) => {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.playButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getStyles } from '../styles/styles';

export const CustomButton = ({ title, onPress }) => {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

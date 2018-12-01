// @flow

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from 'spotMe/src/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.grid.x2,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default (props: PropsType) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);

type PropsType = {
  onPress: () => void,
  title: string,
};

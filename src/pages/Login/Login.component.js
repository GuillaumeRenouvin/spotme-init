// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Button, Page } from 'spotMe/src/components';

import styles from './Login.style';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>Hello</Text>
          <Button title="Connexion" onPress={() => this.props.navigation.navigate('home')} />
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};

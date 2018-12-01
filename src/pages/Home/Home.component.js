// @flow

import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { Page } from 'spotMe/src/components';

import styles from './Home.style';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  render() {
    return (
      <Page noMargin noNavBar>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.882694,
            longitude: 2.322347,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 48.882694,
              longitude: 2.322347,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </MapView>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};

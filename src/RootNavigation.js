// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as Pages from 'spotMe/src/pages';

export const AppNavigator = createStackNavigator({
  login: {
    screen: Pages.Login,
  },
  home: {
    screen: Pages.Home,
  },
});

export default createAppContainer(AppNavigator);

// @flow

import { createStore } from 'redux';
import reducers from 'spotMe/src/modules/rootReducer';

export default () => createStore(reducers);

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

// presentational components
import Catalogue from './src/components/Catalogue/Catalogue';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Catalogue />
      </Provider>
    );
  }
}

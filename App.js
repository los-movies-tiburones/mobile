/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// App Screens
import Catalogue from './src/components/Catalogue/Catalogue';
import MovieScreen from './src/components/MovieScreen/MovieScreen';
import GenreScreen from './src/components/GenreScreen/GenreScreen';
import ShowAllGenreScreen from './src/components/ShowAllGenreScreen/ShowAllGenreScreen';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen/SignUpScreen';
import LandingScreen from './src/components/LandingScreen/LandingScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LandingScreen"
              component={LandingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GenreScreen"
              component={GenreScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShowAll"
              component={ShowAllGenreScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Catalogue"
              component={Catalogue}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Movie"
              component={MovieScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

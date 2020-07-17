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
import ComingSoonScreen from './src/components/ComingSoonScreen/ComingSoonScreen';
import MyListScreen from './src/components/MyListScreen/MyListScreen';
import AddReviewScreen from './src/components/AddReviewScreen/AddReviewScreen';
import OnBoardingScreen from './src/components/OnBoardingScreen/OnBoardingScreen';

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
              name="OnBoardingScreen"
              component={OnBoardingScreen}
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
            <Stack.Screen
              name="ComingSoonScreen"
              component={ComingSoonScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyListScreen"
              component={MyListScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddReviewScreen"
              component={AddReviewScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

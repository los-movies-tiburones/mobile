/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';

import {View, StyleSheet, Keyboard} from 'react-native';

//Components
import NavigationBarOption from '../NavigationBarOption/NavigationBarOption';

const NavigationBar = ({navigation, actualSection}) => {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
  }, []);

  const _keyboardDidShow = () => {
    setShouldShow(false);
  };
  const _keyboardDidHide = () => {
    setShouldShow(true);
  };

  return (
    <View style={shouldShow ? styles.navigationBar : styles.notShowing}>
      <View style={styles.navigationBarView}>
        <NavigationBarOption
          navigationAction={() => navigation.navigate('GenreScreen')}
          selectedSection={actualSection}
          title={'Recommended'}
          icon={'star'}
        />
        <NavigationBarOption
          navigationAction={() =>
            navigation.navigate('Catalogue', {activeSearch: false})
          }
          selectedSection={actualSection}
          title={'Library'}
          icon={'local-movies'}
        />
        <NavigationBarOption
          navigationAction={() => navigation.navigate('ComingSoonScreen')}
          selectedSection={actualSection}
          title={'Coming Soon'}
          icon={'camera-roll'}
        />
        <NavigationBarOption
          navigationAction={() => navigation.navigate('MyListScreen')}
          selectedSection={actualSection}
          title={'My List'}
          icon={'playlist-play'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    width: '100%',
    height: 63,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navigationBarView: {
    width: '90%',
    height: '100%',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  notShowing: {
    display: 'none',
  },
});

export default NavigationBar;

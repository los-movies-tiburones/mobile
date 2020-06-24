/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const NavigationHeader = ({title, navigation, principal}) => {
  return (
    <View style={styles.headerView}>
      {!principal ? (
        <TouchableOpacity
          style={styles.movieRatingIcon}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.movieRatingIcon}
        onPress={() => navigation.navigate('Catalogue', {activeSearch: true})}>
        <Icon name="search" size={22} color={'#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    height: 60,
    backgroundColor: '#131313',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    maxWidth: '50%',
    height: '100%',
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 19,
    marginTop: 5,
  },
});

export default NavigationHeader;

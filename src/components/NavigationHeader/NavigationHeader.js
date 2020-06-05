/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const NavigationHeader = ({title, navigation, principal}) => {
  return (
    <View style={styles.headerView}>
      {!principal ? (
        <Icon
          style={styles.movieRatingIcon}
          name="arrow-back"
          size={22}
          color={'#FFFFFF'}
          onPress={() => navigation.goBack()}
        />
      ) : null}
      <Text style={styles.title}>{title}</Text>
      <Icon
        style={styles.movieRatingIcon}
        name="search"
        size={22}
        color={'#FFFFFF'}
        onPress={() => navigation.navigate('Catalogue', {activeSearch: true})}
      />
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

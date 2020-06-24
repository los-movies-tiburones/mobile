/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const NavigationBar = ({navigation, actualSection}) => {
  let topColor = actualSection === 'Top' ? '#3462FF' : '#FFFFFF';
  let libraryColor = actualSection === 'Top' ? '#FFFFFF' : '#3462FF';
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigation.navigate('GenreScreen')}>
        <Icon style={styles.itemIcon} name="star" size={14} color={topColor} />
        <Text style={{...styles.itemText, color: topColor}}>Top Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigation.navigate('Catalogue', {activeSearch: false})}>
        <Icon
          style={styles.itemIcon}
          name="local-movies"
          size={14}
          color={libraryColor}
        />
        <Text style={{...styles.itemText, color: libraryColor}}>Library</Text>
      </TouchableOpacity>
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
  itemView: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIcon: {
    marginBottom: 5,
  },
  itemText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
  },
});

export default NavigationBar;

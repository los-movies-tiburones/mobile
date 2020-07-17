/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

// Components
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// Styles
import {styles} from '../MovieScreen/movieScreenStyles';

const MovieDescription = ({
  previousRating,
  showRatingAction,
  addToListAction,
  isInList,
}) => {
  return (
    <>
      <View style={styles.otherInfoRight}>
        <TouchableOpacity
          style={styles.rateItem}
          onPress={() => showRatingAction()}>
          <Icon
            style={styles.rateIcon}
            name={previousRating ? 'star' : 'star-border'}
            size={22}
            color={'#FFFFFF'}
          />
          <Text style={styles.rateText}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rateItem}
          onPress={() => addToListAction()}>
          <MaterialIcons
            style={styles.rateIcon}
            name={isInList ? 'check' : 'plus-circle-outline'}
            size={22}
            color={'#FFFFFF'}
          />
          <Text style={styles.rateText}>My List</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MovieDescription;

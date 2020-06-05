/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const RatingStars = ({rating}) => {
  const getStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          style={styles.movieRatingIcon}
          name={
            i > rating
              ? i - rating < 0.5
                ? 'star-half'
                : 'star-border'
              : 'star'
          }
          size={22}
          color={'#FFC107'}
        />,
      );
    }
    return stars;
  };
  return (
    <>
      <View style={styles.ratingView}>
        {getStars()}
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.ratingDefaultText}>Average Rating</Text>
    </>
  );
};

const styles = StyleSheet.create({
  ratingView: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 25,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 29,
  },
  ratingDefaultText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
    marginLeft: 4,
  },
});

export default RatingStars;

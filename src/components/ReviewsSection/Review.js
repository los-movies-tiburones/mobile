/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Review = ({review}) => {
  return (
    <View style={styles.reviewView}>
      <Text style={styles.reviewTitle}>{review.username}</Text>
      <Text style={styles.reviewInformation}>{review.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewView: {
    width: 176,
    backgroundColor: '#494B548A',
    borderRadius: 7,
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 15,
  },
  reviewTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  reviewSubTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#C7C3C3',
  },
  reviewInformation: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
    marginTop: 12,
  },
});

export default Review;

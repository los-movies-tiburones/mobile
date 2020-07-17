/* eslint-disable prettier/prettier */
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

// Components
import Review from './Review';

const ReviewsSection = ({reviews}) => {
  return (
    <View style={styles.reviewsView}>
      <Text style={styles.reviewsTitle}>Reviews</Text>
      <View style={styles.genreList}>
        <FlatList
          style={styles.reviewList}
          data={reviews}
          horizontal={true}
          renderItem={({item}) => (
            <View key={Math.random()} style={styles.listItem}>
              <Review review={item} />
            </View>
          )}
          ListEmptyComponent={() => (
            <ActivityIndicator
              animating
              size="large"
              style={styles.activityIndicator}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  activityIndicator: {
    marginTop: 20,
    marginBottom: 30,
  },
  reviewList: {
    marginTop: 9,
  },
  listItem: {
    marginRight: 9,
  },
});

export default ReviewsSection;

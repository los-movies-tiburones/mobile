/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Movie = ({movie, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Movie', {id: movie.id})}>
      <View style={styles.listItemView}>
        <Image
          style={styles.image}
          source={movie.cover ? {uri: movie.cover} : null}
        />
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <View style={styles.movieRating}>
          <Icon
            style={styles.movieRatingIcon}
            name="star"
            size={12}
            color="#FFC107"
            onPress={() => this.props.changeSearchStatus()}
          />
          <Text style={styles.movieRatingNumber}>{movie.averageRating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 220,
    backgroundColor: '#00000000',
    borderColor: '#eee',
  },
  listItemView: {
    width: 114,
    height: 215,
  },
  image: {
    width: 114,
    height: 174,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    width: '100%',
    height: 15,
    marginTop: 10,
  },
  movieRating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  movieRatingNumber: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

export default Movie;

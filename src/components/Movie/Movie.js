/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {
  stylesSmall,
  stylesMedium,
  stylesLarge,
  stylesSearch,
} from './movieStyles';

const Movie = ({movie, navigation, size}) => {
  const styles =
    size === 'Small'
      ? stylesSmall
      : size === 'Large'
      ? stylesLarge
      : size === 'Medium'
      ? stylesMedium
      : stylesSearch;
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

export default Movie;

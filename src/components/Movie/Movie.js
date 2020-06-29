/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

// Utils
import {formatDate} from '../../utils/dates';

const Movie = ({movie, navigation, styles}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        navigation.push('Movie', {
          id: movie.id,
          genres: movie.genres,
          title: movie.title,
        })
      }>
      <View style={styles.listItemView}>
        <Image
          style={styles.image}
          source={movie.cover ? {uri: movie.cover} : null}
        />
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieYear}>
          {formatDate(movie.year).split(', ')[1]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;

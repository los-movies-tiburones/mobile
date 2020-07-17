/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text} from 'react-native';

// Utils
import {formatDate, formatDuration} from '../../utils/dates';

// Styles
import {styles} from '../MovieScreen/movieScreenStyles';

const MovieDescription = ({movieInstance, playVideo}) => {
  return (
    <>
      <View style={styles.moviePrincipalInfo}>
        <View
          style={{
            ...styles.movieDescriptionView,
            height: playVideo ? 50 : 150,
          }}>
          <Text style={styles.movieDate}>
            {formatDate(movieInstance.year).split(', ')[1]}
          </Text>
          <Text style={styles.movieCategories}>
            {movieInstance.genres.join(', ')}
          </Text>
        </View>
        <Text style={styles.movieTitle}>{movieInstance.title}</Text>
      </View>
      <View style={styles.movieInfo}>
        <Text style={styles.movieDuration}>
          {formatDuration(movieInstance.runtime)}
        </Text>
        <Text style={styles.movieDuration}>
          {formatDate(movieInstance.year)} (
          {movieInstance.productionCountries[0].name})
        </Text>
      </View>
      <Text style={styles.movieOverview}>{movieInstance.overview}</Text>
    </>
  );
};

export default MovieDescription;

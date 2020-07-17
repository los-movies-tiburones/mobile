/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

// Components
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// Utils
import {formatDate, getMonth} from '../../utils/dates';
import {ApiGenres} from '../../utils/genres';

const Movie = ({movie}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image
          style={styles.coverImage}
          source={
            movie.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              : null
          }
        />
        <View style={styles.imageFooter}>
          <View style={styles.movieRatingView}>
            <Icon name="star" size={15} color={'#FFC107'} />
            <Text style={styles.movieRating}>
              {(movie.vote_average / 2).toFixed(2)}
            </Text>
          </View>
          <Text style={styles.movieYear}>
            {formatDate(movie.release_date).split(', ')[1]}
          </Text>
        </View>
        <View style={styles.imageDescription}>
          <Text style={styles.movieDate}>{`Coming on ${getMonth(
            movie.release_date,
          )}`}</Text>
          <Text style={styles.movieTitle}>{movie.original_title}</Text>
          <Text style={styles.movieOverview}>{movie.overview}</Text>
          <Text style={styles.movieCategories}>
            {ApiGenres.filter((genre) => movie.genre_ids.includes(genre.id))
              .map((genre) => genre.name)
              .join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#00000000',
    borderColor: '#eee',
    alignSelf: 'center',
    marginBottom: 20,
  },
  listItemView: {
    width: '95%',
    height: 'auto',
    alignSelf: 'center',
  },
  coverImage: {
    width: '90%',
    height: 410,
    borderRadius: 4,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  imageDescription: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  movieTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    marginTop: 14,
  },
  movieOverview: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 9,
    height: 'auto',
  },
  movieCategories: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 14,
  },
  movieDate: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 24,
  },
  movieYear: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  movieRating: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 7,
  },
  movieRatingView: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Movie;

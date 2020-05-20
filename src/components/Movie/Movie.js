/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import formatDate from '../../utils/dates';

const Movie = ({movie}) => {
  const formatBudget = (budget) =>
    budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  formatDate('1995-12-22');
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image
          style={styles.image}
          source={movie.cover ? {uri: movie.cover} : null}
        />
        <View style={styles.listItemInformationView}>
          <View style={styles.headerView}>
            <View style={styles.titleView}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieDate}>{formatDate(movie.year)}</Text>
            </View>
            <View style={styles.budgetView}>
              <Text style={styles.movieBudget}>Budget</Text>
              <Text style={styles.movieBudgetNumber}>
                ${formatBudget(movie.budget)}
              </Text>
            </View>
          </View>
          <Text style={styles.movieCategories}>{movie.genres.join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 20,
    height: 114,
    backgroundColor: '#00000000',
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 114,
    borderRadius: 10,
  },
  listItemInformationView: {
    flex: 1,
    width: '70%',
    height: 85,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  titleView: {
    width: '60%',
  },
  budgetView: {
    width: '40%',
  },
  movieTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
  },
  movieDate: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 15,
    marginTop: 4,
  },
  movieCategories: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
  },
  movieBudget: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 15,
    alignSelf: 'flex-end',
    marginEnd: 15,
  },
  movieBudgetNumber: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 15,
    alignSelf: 'flex-end',
    marginEnd: 15,
    marginTop: 4,
  },
});

export default Movie;

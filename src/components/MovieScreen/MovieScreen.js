/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {formatDate, formatDuration} from '../../utils/dates';

//Components
import RatingStars from '../RatingStars/RatingStars';
import NavigationHeader from '../NavigationHeader/NavigationHeader';
import RatingChart from '../RatingChart/RatingChart';

//Actions
import * as movieDetailActions from '../../store/actions/movieDetailActions';

class MovieScreen extends Component {
  componentDidMount() {
    const {getMovie, route} = this.props;
    getMovie(route.params.id);
  }

  formatBudget = (budget) =>
    budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  render() {
    const {movieInstance, navigation} = this.props;
    return movieInstance ? (
      <ImageBackground
        source={{uri: movieInstance.cover}}
        style={styles.imageBack}
        blurRadius={0.7}>
        <NavigationHeader title={movieInstance.title} navigation={navigation} />
        <ScrollView style={styles.movieDetailView}>
          <View style={styles.moviePrincipalInfo}>
            <Image
              style={styles.image}
              source={movieInstance.cover ? {uri: movieInstance.cover} : null}
            />
            <View style={styles.movieDescriptionView}>
              <Text style={styles.movieDate}>
                {formatDate(movieInstance.year).split(', ')[1]}
              </Text>
              <Text style={styles.movieTitle}>{movieInstance.title}</Text>
              <Text style={styles.movieCategories}>
                {movieInstance.genres.join(', ')}
              </Text>
            </View>
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
          <View style={styles.otherInfo}>
            <Text style={styles.otherInfoTitle}>Budget: </Text>
            <Text style={styles.otherInfoText}>
              {this.formatBudget(movieInstance.budget)}
            </Text>
          </View>
          <View style={styles.otherInfo}>
            <Text style={styles.otherInfoTitle}>Spoken Languajes: </Text>
            <Text style={styles.otherInfoText}>
              {movieInstance.spokenLanguages
                .map((languaje) => languaje.name)
                .join(', ')}
            </Text>
          </View>
          <View style={styles.otherInfo}>
            <Text style={styles.otherInfoTitle}>Production Companies: </Text>
            <Text style={styles.otherInfoText}>
              {movieInstance.productionCompanies
                .map((company) => company.name)
                .join(', ')}
            </Text>
          </View>
          <View style={styles.movieRating}>
            <RatingStars rating={movieInstance.averageRating} />
          </View>
          <View style={styles.movieRating}>
            <RatingChart ratings={movieInstance.ratings} />
          </View>
        </ScrollView>
      </ImageBackground>
    ) : (
      <View style={styles.movieDetailView}>
        <Text style={styles.movieTitle}>{'Movie not found'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieDetailView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
  },
  moviePrincipalInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  movieDescriptionView: {
    width: '60%',
    height: 211,
    marginLeft: 20,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  image: {
    width: 140,
    height: 211,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    marginTop: 5,
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
    marginTop: 5,
  },
  movieInfo: {
    maxWidth: '75%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  movieDuration: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 13,
  },
  movieOverview: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 14,
    marginTop: 20,
    marginBottom: 20,
  },
  otherInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  otherInfoTitle: {
    fontSize: 12,
    color: '#BEBEBE',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
  },
  otherInfoText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
  },
  movieRating: {
    marginTop: 40,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    movieInstance: state.movieDetail.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(movieDetailActions.fetchMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);

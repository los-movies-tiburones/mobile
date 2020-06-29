/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// Components
import LinearGradient from 'react-native-linear-gradient';
import GenreSection from '../GenreSection/GenreSection';
import NavigationBar from '../NavigationBar/NavigationBar';

// Actions
import * as genreActions from '../../store/actions/genreActions';
import * as movieDetailActions from '../../store/actions/movieDetailActions';
import * as registrationActions from '../../store/actions/registrationActions';
// Utils
import {checkUsername} from '../../utils/asyncStorage';

import {
  stylesSmall,
  stylesGiant,
  stylesSmallTop100,
} from '../Movie/movieStyles';

class GenreScreen extends Component {
  getRecommendedMoviesToToken = async () => {
    const {getRecommendedMovies} = this.props;
    const credentials = await checkUsername();
    getRecommendedMovies(credentials.token);
  };

  setUsernameAsync = async () => {
    const {setUsername} = this.props;
    const credentials = await checkUsername();
    setUsername(credentials.username);
  };

  componentDidMount() {
    const {getGenres, getTop100, genres, top100} = this.props;
    if (!genres.length) getGenres();
    if (!top100.length) getTop100();
    this.getRecommendedMoviesToToken();
    this.setUsernameAsync();
  }
  render() {
    const {
      genres,
      navigation,
      moviesByGenre,
      getAllTopMoviesByGenre,
      top100,
      clearMovie,
      recommendations,
    } = this.props;

    clearMovie();
    if (genres.length && !moviesByGenre) {
      getAllTopMoviesByGenre(genres);
    }
    return (
      <>
        <LinearGradient
          start={{x: 0.01, y: 0.01}}
          end={{x: 0, y: 1}}
          colors={[
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#243676',
            '#3462FF',
          ]}
          style={styles.app}>
          <ScrollView style={styles.genresScreenView}>
            <View style={styles.appTitleView}>
              <Text style={styles.appTitle}>MovieSharkers</Text>
              <TouchableOpacity
                style={styles.searchIcon}
                onPress={() =>
                  navigation.navigate('Catalogue', {activeSearch: true})
                }>
                <Icon name="search" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <GenreSection
              genre={'Recommendations'}
              navigation={navigation}
              allGenres={genres}
              moviesByGenre={recommendations}
              movieStyle={stylesGiant}
              title={'Recommendations'}
            />
            <GenreSection
              genre={'Top 100'}
              navigation={navigation}
              allGenres={genres}
              moviesByGenre={top100}
              movieStyle={stylesSmallTop100}
              title={'Top 100'}
              showButton
            />
            {moviesByGenre ? (
              genres.map((genre) => (
                <GenreSection
                  genre={genre}
                  navigation={navigation}
                  allGenres={genres}
                  moviesByGenre={moviesByGenre[genre]}
                  movieStyle={stylesSmall}
                  title={`Top movies in ${genre}`}
                  showButton
                />
              ))
            ) : (
              <ActivityIndicator
                animating
                size="large"
                style={{marginTop: 20, marginBottom: 30}}
              />
            )}
          </ScrollView>
        </LinearGradient>
        <NavigationBar navigation={navigation} actualSection={'Top'} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
  },
  genresScreenView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    paddingTop: 40,
    marginBottom: 63,
  },
  appTitleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    backgroundColor: '#00000000',
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 43,
  },
});

const mapStateToProps = (state) => {
  return {
    genres: state.topGenre.genres,
    top100: state.topGenre.top100,
    moviesByGenre: state.topGenre.moviesByGenre,
    recommendations: state.topGenre.recommended,
    username: state.registration.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: () => dispatch(genreActions.fetchGenres()),
    getTop100: () => dispatch(genreActions.fetchTop100()),
    getAllTopMoviesByGenre: (allGenres) =>
      dispatch(genreActions.fetchTopMoviesByGenre(allGenres)),
    getRecommendedMovies: (username) =>
      dispatch(genreActions.fetchRecommendedMovies(username)),
    clearMovie: () => dispatch(movieDetailActions.clearMovie()),
    setUsername: (username) =>
      dispatch(registrationActions.logInSuccess(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreScreen);

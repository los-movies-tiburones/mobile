/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//Components
import Movie from '../Movie/Movie';
//Actions
import * as genreActions from '../../store/actions/genreActions';

class GenreSection extends Component {
  componentDidMount() {
    const {getTopMoviesByGenre, genre, moviesByGenre} = this.props;
    const genreMovies = moviesByGenre.find(
      (moviesObject) => moviesObject.genre === genre,
    );
    if (!genreMovies) getTopMoviesByGenre(genre);
  }

  render() {
    const {genre, moviesByGenre, navigation, allGenres} = this.props;

    const genreMovies = moviesByGenre.find(
      (moviesObject) => moviesObject.genre === genre,
    );

    return (
      <View style={styles.genreSectionView}>
        <View style={styles.genreHeader}>
          {allGenres.includes(genre) ? (
            <Text style={styles.genreTitle}>Top movies in {genre}</Text>
          ) : (
            <Text style={{...styles.genreTitle, fontWeight: '500'}}>
              Top 100
            </Text>
          )}
          <Text
            style={styles.showAllBtn}
            onPress={() => navigation.navigate('ShowAll', {genre: genre})}>
            Show All
          </Text>
        </View>
        {genreMovies && genreMovies.movies.length > 0 ? (
          <View style={styles.genreList}>
            <FlatList
              data={genreMovies ? genreMovies.movies : null}
              horizontal={true}
              renderItem={({item}) => (
                <View key={Math.random()}>
                  <Movie
                    movie={item}
                    navigation={navigation}
                    size={allGenres.includes(genre) ? 'Small' : 'Medium'}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <ActivityIndicator
            animating
            size="large"
            style={{marginTop: 20, marginBottom: 30}}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genreSectionView: {
    marginBottom: 20,
  },
  genreHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genreTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 16,
    backgroundColor: '#00000000',
  },
  showAllBtn: {
    fontSize: 14,
    color: '#3462FF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 16,
  },
  genreList: {
    marginTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    moviesByGenre: state.topGenre.moviesByGenre,
    top100: state.topGenre.top100,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopMoviesByGenre: (genre) =>
      dispatch(genreActions.fetchTopMoviesByGenre(genre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSection);

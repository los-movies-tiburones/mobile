/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as moviesActions from '../../store/actions/movieActions';
import BurnedGenres from '../../utils/genres';

class GenreFilter extends Component {
  state = {
    genres: [],
    error: false,
  };

  onChangedGenreOption = (selectedItem) => {
    const {changeGenres, getAllMovies, sort} = this.props;
    let {genres} = this.state;
    if (genres.includes(BurnedGenres[selectedItem])) {
      genres = genres.filter((genre) => genre !== BurnedGenres[selectedItem]);
      changeGenres(genres);
      getAllMovies(0, '', sort, genres);
    } else {
      if (genres.length < 4) {
        genres.push(BurnedGenres[selectedItem]);
        this.setState({genres: genres, error: false});
        changeGenres(genres);
        getAllMovies(0, '', sort, genres);
      } else {
        this.setState({error: true});
      }
    }
    this.setState({genres: genres, error: false});
  };

  getGenres = () => {
    let {genres} = this.state;
    const {allGenres} = this.props;
    return allGenres.map((genre, i) => {
      return (
        <View style={styles.genreContainer}>
          <Icon
            style={styles.checkIcon}
            name="check"
            size={25}
            color={genres.includes(genre) ? 'blue' : 'black'}
          />
          <Text
            style={styles.genre}
            onPress={() => this.onChangedGenreOption(i)}>
            {genre}
          </Text>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView
        style={this.props.filterOn ? styles.genresView : styles.genreViewNone}>
        {this.getGenres()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  genresView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    paddingLeft: 10,
  },
  genreViewNone: {
    display: 'none',
  },
  genreContainer: {
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  genre: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    backgroundColor: '#00000000',
    marginTop: 18,
  },
  checkIcon: {
    marginTop: 13,
    marginRight: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
    backgroundColor: '#00000000',
    marginLeft: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    sort: state.movies.sort,
    genres: state.movies.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenres: (selectedGenres) =>
      dispatch(moviesActions.changeGenres(selectedGenres)),
    getAllMovies: (page, title, sort, selectedGenres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, selectedGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
